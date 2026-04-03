import type { ReactNode } from "react";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import type {
  ComparisonLink,
  InquiryIntentKey,
  OfferPath,
  SupportingField,
} from "@/content/site";

type InquiryPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroLabel: string;
  heroHighlight: string;
  expectationLabel: string;
  expectationTitle: string;
  expectationItems: string[];
  promptLabel: string;
  promptTitle: string;
  prompts: string[];
  pathLabel: string;
  pathTitle: string;
  paths: OfferPath[];
  formPlaceholder: string;
  submitLabel: string;
  assuranceLabel: string;
  assuranceTitle: string;
  assuranceText: string;
  intentKey: InquiryIntentKey;
  introTitle: string;
  introBody: string;
  bestFor: string[];
  notFor: string[];
  nextStep: string;
  responseWindow: string;
  heroVariant: "contact" | "demo" | "consultation" | "support";
  comparisonLinks: ComparisonLink[];
  supportingFields?: SupportingField[];
  actions?: ReactNode;
};

export function InquiryPageTemplate({
  eyebrow,
  title,
  description,
  heroLabel,
  heroHighlight,
  expectationLabel,
  expectationTitle,
  expectationItems,
  promptLabel,
  promptTitle,
  prompts,
  pathLabel,
  pathTitle,
  paths,
  formPlaceholder,
  submitLabel,
  assuranceLabel,
  assuranceTitle,
  assuranceText,
  intentKey,
  introTitle,
  introBody,
  bestFor,
  notFor,
  nextStep,
  responseWindow,
  heroVariant,
  comparisonLinks,
  supportingFields,
  actions,
}: InquiryPageTemplateProps) {
  return (
    <>
      <PageHero
        actions={actions}
        description={description}
        eyebrow={eyebrow}
        theme="light"
        visualMode="intake"
        visual={
          <div className={`intake-hero-visual private-intake-hero inquiry-hero inquiry-hero-${heroVariant}`}>
            <div className="inquiry-hero-brief">
              <article className="intake-hero-card private-intake-card private-intake-card-lead inquiry-hero-card inquiry-hero-card-primary">
                <span className="small-label">{heroLabel}</span>
                <strong>{heroHighlight}</strong>
                <p className="private-intake-card-copy">{responseWindow}</p>
              </article>
              <article className="intake-hero-card private-intake-card inquiry-hero-card">
                <span className="small-label">Use this page for</span>
                <strong>{bestFor[0]}</strong>
                <ul className="page-hero-mini-list">
                  {bestFor.slice(1, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="intake-hero-card private-intake-card private-intake-card-accent inquiry-hero-card inquiry-hero-card-accent">
                <span className="small-label">Need another route?</span>
                <strong>Jump straight to the better fit</strong>
                <div className="inquiry-hero-link-list">
                  {comparisonLinks.map((item) => (
                    <Link className="inquiry-hero-link" href={item.href} key={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </article>
            </div>
          </div>
        }
        title={title}
      />

      <section className="section sentinel-inquiry-section">
        <div className="section-inner">
          <div className="contact-layout contact-layout-refined private-intake-shell sentinel-inquiry-layout">
            <div className="sentinel-inquiry-form-column">
              <article className="page-panel-card sentinel-inquiry-callout">
                <span className="small-label">Response window</span>
                <h3>{responseWindow}</h3>
                <p>{nextStep}</p>
              </article>
              <ContactForm
                intent={intentKey}
                introBody={introBody}
                introTitle={introTitle}
                messagePlaceholder={formPlaceholder}
                successHref={`/thanks?intent=${intentKey}`}
                submitLabel={submitLabel}
                supportingFields={supportingFields}
                variant="private"
              />
            </div>
            <aside className="contact-sidebar private-intake-sidebar sentinel-inquiry-sidegrid">
              <article className="page-panel-card sentinel-inquiry-sidecard">
                <span className="small-label">{expectationLabel}</span>
                <h3>{expectationTitle}</h3>
                <ul className="detail-list page-checklist">
                  {expectationItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="page-panel-card sentinel-inquiry-sidecard">
                <span className="small-label">{promptLabel}</span>
                <h3>{promptTitle}</h3>
                <div className="simple-text-list simple-text-list-tight">
                  {prompts.map((prompt) => (
                    <div className="simple-text-row" key={prompt}>
                      <p>{prompt}</p>
                    </div>
                  ))}
                </div>
                <div className="inquiry-chip-stack">
                  <span className="small-label">{pathLabel}</span>
                  <p className="inquiry-chip-stack-copy">{pathTitle}</p>
                  <div className="intake-chip-row">
                    {paths.map((item) => (
                      <span className="intake-chip" key={item.title}>
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="page-panel-card sentinel-inquiry-sidecard sentinel-inquiry-sidecard-accent">
                <span className="small-label">{assuranceLabel}</span>
                <h3>{assuranceTitle}</h3>
                <p>{assuranceText}</p>
                <div className="inquiry-choice-list">
                  {comparisonLinks.map((item) => (
                    <Link className="inquiry-choice-link" href={item.href} key={item.href}>
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </Link>
                  ))}
                </div>
                <div className="sentinel-inquiry-notfor">
                  <span className="small-label">Use another page when</span>
                  <ul className="detail-list page-checklist">
                    {notFor.slice(0, 2).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
