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
  actions,
}: InquiryPageTemplateProps) {
  return (
    <>
      <PageHero
        actions={actions}
        description={description}
        eyebrow={eyebrow}
        visual={
          <div className="page-hero-figure">
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
        }
        title={title}
      />

      <section className="section">
        <div className="section-inner contact-layout">
          <div>
            <ContactForm
              messagePlaceholder={formPlaceholder}
              submitLabel={submitLabel}
            />
          </div>
          <aside className="contact-sidebar">
            <article className="source-panel inquiry-info-panel">
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
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
