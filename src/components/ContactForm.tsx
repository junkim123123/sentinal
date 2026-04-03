"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import type { InquiryIntentKey, SupportingField } from "@/content/site";

type FormState = {
  error: string | null;
};

const initialState: FormState = {
  error: null,
};

type ContactFormProps = {
  intent?: InquiryIntentKey;
  messagePlaceholder?: string;
  submitLabel?: string;
  introTitle?: string;
  introBody?: string;
  successHref?: string;
  supportingFields?: SupportingField[];
  variant?: "default" | "private";
};

export function ContactForm({
  intent = "contact",
  messagePlaceholder = "Tell us the molecules, market question, or reporting need you want to discuss.",
  submitLabel = "Submit request",
  introTitle,
  introBody,
  successHref = "/thanks?intent=contact",
  supportingFields = [],
  variant = "default",
}: ContactFormProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(formData: FormData) {
    setState(initialState);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          intent,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
          clientStatus: formData.get("clientStatus"),
          requestCategory: formData.get("requestCategory"),
          expectedUse: formData.get("expectedUse"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setState({
          error:
            payload.error ??
            "We could not send your message right now. Please try again.",
        });
        return;
      }

      startTransition(() => {
        router.push(successHref);
      });
    } catch {
      setState({
        error:
          "We could not reach the contact service right now. Please try again shortly.",
      });
    }
  }

  return (
    <form
      action={handleSubmit}
      className={`form-panel ${variant === "private" ? "form-panel-private" : ""}`.trim()}
      noValidate
    >
      <div className="form-intro">
        <span className="small-label">
          {variant === "private" ? "Private intake" : "Request details"}
        </span>
        <h2>{introTitle ?? (variant === "private" ? "Prepare a private request for Sentinel review." : "Give Sentinel the essentials.")}</h2>
        <p>
          {introBody ??
            (variant === "private"
              ? "A concise brief helps Sentinel route the request quickly."
              : "The more specific the request, the faster the team can route it well.")}
        </p>
      </div>
      {variant === "private" ? (
        <div className="form-private-strip">
          <span>Direct review</span>
          <span>Named follow-up</span>
        </div>
      ) : null}
      <div className="field-grid">
        <label className="field">
          <span>Name</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label className="field">
          <span>Work email</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
      </div>
      <div className="field-grid">
        <label className="field">
          <span>Direct line</span>
          <input autoComplete="tel" name="phone" required type="tel" />
        </label>
        <label className="field">
          <span>Company / desk</span>
          <input autoComplete="organization" name="company" type="text" />
        </label>
      </div>
      {supportingFields.length > 0 ? (
        <div
          className={`field-grid supporting-field-grid ${
            supportingFields.length === 1 ? "supporting-field-grid-single" : ""
          }`.trim()}
        >
          {supportingFields.map((field) => (
            <label className="field" key={field.name}>
              <span>{field.label}</span>
              <select defaultValue="" name={field.name}>
                <option value="">Select one</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      ) : null}
      <label className="field">
        <span>What should Sentinel review?</span>
        <textarea
          name="message"
          placeholder={messagePlaceholder}
          required
          rows={7}
        />
      </label>
      <p className="form-note">
        {variant === "private"
          ? "Each request is reviewed directly by Sentinel."
          : "A Sentinel team member reviews each request directly."}
      </p>
      <div aria-live="polite" className="form-status">
        {state.error ? <p className="error-text">{state.error}</p> : null}
      </div>
      <button className="button button-primary submit-button" disabled={pending} type="submit">
        {pending ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
