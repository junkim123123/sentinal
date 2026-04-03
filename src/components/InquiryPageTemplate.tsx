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
        theme="dark"
        visualMode="intake"
        visual={
          <div className={`intake-hero-visual private-intake-hero inquiry-hero inquiry-hero-${heroVariant}`}>
            <div className="intake-hero-brief private-intake-brief inquiry-hero-brief">
              <article className="intake-hero-card private-intake-card private-intake-card-lead inquiry-hero-card">
                <span className="small-label">{heroLabel}</span>
                <strong>{heroHighlight}</strong>
                <ul className="page-hero-mini-list">
                  {bestFor.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="intake-hero-card private-intake-card inquiry-hero-card">
                <span className="small-label">Best for</span>
                <strong>This page works best when</strong>
                <div className="intake-chip-row">
                  {bestFor.map((item) => (
                    <span className="intake-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
              <article className="intake-hero-card private-intake-card inquiry-hero-card">
                <span className="small-label">Use another page when</span>
                <strong>Choose a different intake if</strong>
                <ul className="page-hero-mini-list">
                  {notFor.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="intake-hero-card private-intake-card private-intake-card-accent inquiry-hero-card inquiry-hero-card-accent">
                <span className="small-label">Response and next step</span>
                <strong>{responseWindow}</strong>
                <p className="private-intake-card-copy">{nextStep}</p>
                <div className="private-intake-service-strip">
                  {comparisonLinks.map((item) => (
                    <span key={item.href}>{item.label}</span>
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
          <div className="contact-summary-band private-intake-summary sentinel-inquiry-track inquiry-difference-grid">
            {[
              { title: "Best for", detail: bestFor[0] },
              { title: "Not for", detail: notFor[0] },
              { title: "Response window", detail: responseWindow },
            ].map((item, index) => (
              <article className="contact-summary-card" key={item.title}>
                <span>{`0${index + 1}`}</span>
                <p>{item.detail}</p>
                <small>{item.title}</small>
              </article>
            ))}
          </div>

          <div className="contact-layout contact-layout-refined private-intake-shell sentinel-inquiry-layout">
            <div>
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
            <aside className="contact-sidebar private-intake-sidebar">
              <article className="source-panel inquiry-info-panel private-intake-panel sentinel-inquiry-panel">
                <div className="private-intake-panel-intro">
                  <span className="small-label">{assuranceLabel}</span>
                  <h2>{assuranceTitle}</h2>
                  <p>{assuranceText}</p>
                </div>
                <div className="inquiry-block">
                  <span className="small-label">Best use</span>
                  <h2>Use this page when</h2>
                  <ul className="detail-list">
                    {bestFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="inquiry-block">
                  <span className="small-label">Use another path when</span>
                  <h2>This page is not the best fit if</h2>
                  <ul className="detail-list">
                    {notFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="inquiry-block">
                  <span className="small-label">{expectationLabel}</span>
                  <h2>{expectationTitle}</h2>
                  <ul className="detail-list">
                    {expectationItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="inquiry-block">
                  <span className="small-label">Response window</span>
                  <h2>{responseWindow}</h2>
                  <p>{nextStep}</p>
                </div>
                <div className="inquiry-block">
                  <span className="small-label">{promptLabel}</span>
                  <h2>{promptTitle}</h2>
                  <div className="simple-text-list simple-text-list-tight">
                    {prompts.map((prompt) => (
                      <div className="simple-text-row" key={prompt}>
                        <p>{prompt}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="inquiry-block">
                  <span className="small-label">{pathLabel}</span>
                  <h2>{pathTitle}</h2>
                  <div className="simple-text-list simple-text-list-tight">
                    {paths.map((item) => (
                      <div className="simple-text-row" key={item.title}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="inquiry-block">
                  <span className="small-label">Need another route?</span>
                  <h2>Jump to the better-matched page</h2>
                  <div className="inquiry-choice-list">
                    {comparisonLinks.map((item) => (
                      <Link className="inquiry-choice-link" href={item.href} key={item.href}>
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="private-intake-disclosure">
                  <span>Named follow-up</span>
                  <span>Clear route recommendation</span>
                  <span>Private service fit</span>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
