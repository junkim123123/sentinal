"use client";

import { useState, useTransition } from "react";

type NewsletterState = {
  error: string | null;
  success: string | null;
};

const initialState: NewsletterState = {
  error: null,
  success: null,
};

export function NewsletterForm() {
  const [state, setState] = useState<NewsletterState>(initialState);
  const [pending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setState(initialState);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
        }),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok || !payload.ok) {
        setState({
          error:
            payload.error ??
            "We could not save your signup right now. Please try again.",
          success: null,
        });
        return;
      }

      startTransition(() => {
        setState({
          error: null,
          success: "Thanks. You'll hear from Sentinel when new updates are shared.",
        });
      });
    } catch {
      setState({
        error: "We could not reach the signup service right now.",
        success: null,
      });
    }
  }

  return (
    <form action={handleSubmit} className="newsletter-form">
      <label className="newsletter-field">
        <span className="sr-only">Email address</span>
        <input
          autoComplete="email"
          name="email"
          placeholder="Your email for updates"
          required
          type="email"
        />
      </label>
      <button className="button button-primary newsletter-button" disabled={pending} type="submit">
        {pending ? "Joining..." : "Join"}
      </button>
      <div aria-live="polite" className="newsletter-status">
        {state.error ? <p className="error-text">{state.error}</p> : null}
        {state.success ? <p className="success-text">{state.success}</p> : null}
      </div>
    </form>
  );
}
