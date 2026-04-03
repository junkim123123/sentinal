import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { thanksPageContent, type InquiryIntentKey } from "@/content/site";

export const metadata: Metadata = {
  title: "Thanks",
  description: "Confirmation page for Sentinel Imports contact requests.",
};

type ThanksPageProps = {
  searchParams?: Promise<{ intent?: string }>;
};

function isIntent(value: string): value is InquiryIntentKey {
  return value in thanksPageContent;
}

export default async function ThanksPage({ searchParams }: ThanksPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const requestedIntent = resolvedSearchParams?.intent;
  const intent = requestedIntent && isIntent(requestedIntent) ? requestedIntent : "contact";
  const content = thanksPageContent[intent];

  return (
    <section className="page-hero page-hero-light page-hero-family-conversion page-hero-density-tight page-hero-measure-balanced page-hero-actions-compact page-hero-surface-soft">
      <div className="section-inner narrow thanks-panel">
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <article className="page-panel-card thanks-next-panel">
          <span className="small-label">What to expect</span>
          <h3>{content.responseWindow}</h3>
          <ul className="detail-list page-checklist">
            {content.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <div className="button-row">
          <LinkButton href={content.primaryHref}>{content.primaryLabel}</LinkButton>
          <LinkButton href={content.secondaryHref} variant="secondary">
            {content.secondaryLabel}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
