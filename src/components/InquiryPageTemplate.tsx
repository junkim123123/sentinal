import Image from "next/image";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import type { OfferPath } from "@/content/site";

type InquiryPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImageAlt: string;
  heroImageSrc: string;
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
  actions?: ReactNode;
};

export function InquiryPageTemplate({
  eyebrow,
  title,
  description,
  heroImageAlt,
  heroImageSrc,
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
          <div className="intake-hero-visual private-intake-hero">
            <div className="page-hero-figure page-hero-figure-tall">
              <Image
                alt={heroImageAlt}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 34vw"
                src={heroImageSrc}
              />
              <div className="page-hero-figure-card">
                <span className="small-label">{heroLabel}</span>
                <strong>{heroHighlight}</strong>
              </div>
            </div>
            <div className="intake-hero-brief private-intake-brief">
              <article className="intake-hero-card private-intake-card">
                <span className="small-label">{expectationLabel}</span>
                <strong>{expectationTitle}</strong>
                <p className="private-intake-card-copy">
                  {description}
                </p>
                <ul className="page-hero-mini-list">
                  {expectationItems.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="intake-hero-card private-intake-card">
                <span className="small-label">{pathLabel}</span>
                <strong>{pathTitle}</strong>
                <div className="intake-chip-row">
                  {paths.map((item) => (
                    <span className="intake-chip" key={item.title}>
                      {item.title}
                    </span>
                  ))}
                </div>
              </article>
              <article className="intake-hero-card private-intake-card private-intake-card-accent">
                <span className="small-label">{assuranceLabel}</span>
                <strong>{assuranceTitle}</strong>
                <p className="private-intake-card-copy">{assuranceText}</p>
                <div className="private-intake-service-strip">
                  <span>Direct review</span>
                  <span>Curated response</span>
                  <span>Secure follow-up</span>
                </div>
              </article>
            </div>
          </div>
        }
        title={title}
      />

      <section className="section">
        <div className="section-inner">
          <div className="contact-summary-band private-intake-summary">
            {expectationItems.map((item, index) => (
              <article className="contact-summary-card" key={item}>
                <span>{`0${index + 1}`}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="contact-layout contact-layout-refined private-intake-shell">
            <div>
              <ContactForm
                messagePlaceholder={formPlaceholder}
                submitLabel={submitLabel}
                variant="private"
              />
            </div>
            <aside className="contact-sidebar private-intake-sidebar">
              <article className="source-panel inquiry-info-panel private-intake-panel">
                <div className="private-intake-panel-intro">
                  <span className="small-label">{assuranceLabel}</span>
                  <h2>{assuranceTitle}</h2>
                  <p>{assuranceText}</p>
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
                <div className="private-intake-disclosure">
                  <span>Restricted intake</span>
                  <span>Named follow-up</span>
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
