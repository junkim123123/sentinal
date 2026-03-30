"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

type FormState = {
  error: string | null;
};

const initialState: FormState = {
  error: null,
};

type ContactFormProps = {
  messagePlaceholder?: string;
  submitLabel?: string;
};

export function ContactForm({
  messagePlaceholder = "Tell us the molecules, market question, or reporting need you want to discuss.",
  submitLabel = "Submit request",
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
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
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
        router.push("/thanks");
      });
    } catch {
      setState({
        error:
          "We could not reach the contact service right now. Please try again shortly.",
      });
    }
  }

  return (
    <form action={handleSubmit} className="form-panel" noValidate>
      <div className="form-intro">
        <span className="small-label">Request details</span>
        <h2>Give Sentinel the essentials.</h2>
        <p>The more specific the request, the faster the team can route it well.</p>
      </div>
      <div className="field-grid">
        <label className="field">
          <span>Name</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label className="field">
          <span>Email</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
      </div>
      <div className="field-grid">
        <label className="field">
          <span>Phone</span>
          <input autoComplete="tel" name="phone" required type="tel" />
        </label>
        <label className="field">
          <span>Company</span>
          <input autoComplete="organization" name="company" type="text" />
        </label>
      </div>
      <label className="field">
        <span>What are you trying to understand?</span>
        <textarea
          name="message"
          placeholder={messagePlaceholder}
          required
          rows={7}
        />
      </label>
      <p className="form-note">
        A Sentinel team member reviews each request directly.
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
