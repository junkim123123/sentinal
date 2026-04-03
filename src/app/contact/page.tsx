import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { inquiryPageContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sentinel Imports to discuss recurring monitoring, a custom intelligence project, or Tableau-ready agricultural chemical reporting.",
};

export default function ContactPage() {
  const content = inquiryPageContent.contact;
  const alternateRoutes = [
    ...content.comparisonLinks,
    {
      href: "/support-request",
      label: "Need Support Request?",
      description:
        "Use Support Request only when the issue is operational, delivery-related, or already belongs to an active support lane.",
    },
  ];

  return (
    <>
      <PageHero
        variant="contact"
        eyebrow={content.eyebrow}
        title={content.title}
        description="Start with the business question, the timing, and the team. Sentinel will route the cleanest next step."
        actions={<LinkButton href="#contact-intake-form">Start intake</LinkButton>}
        visual={
          <article className="page-panel-card contact-intake-hero-card">
            <span className="small-label">What happens next</span>
            <h3>{content.responseWindow}</h3>
            <p>{content.nextStep}</p>
          </article>
        }
      />

      <section className="section page-section-tight contact-intake-section">
        <div className="section-inner">
          <div className="contact-intake-layout">
            <div className="contact-intake-form-column">
              <div className="contact-intake-form-anchor" id="contact-intake-form">
                <ContactForm
                  intent={content.intentKey}
                  introBody={content.introBody}
                  introTitle={content.introTitle}
                  messagePlaceholder={content.formPlaceholder}
                  submitLabel={content.submitLabel}
                  successHref={`/thanks?intent=${content.intentKey}`}
                  supportingFields={content.supportingFields}
                />
              </div>
            </div>

            <aside className="contact-intake-rail">
              <article className="page-panel-card contact-intake-note">
                <span className="small-label">{content.expectationLabel}</span>
                <h3>{content.expectationTitle}</h3>
                <ul className="detail-list page-checklist">
                  {content.expectationItems.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="page-panel-card page-panel-card-accent contact-intake-note">
                <span className="small-label">Alternate routes</span>
                <h3>Use a secondary route only when the next step is already clear.</h3>
                <div className="contact-route-list">
                  {alternateRoutes.map((item) => (
                    <Link className="contact-route-link" href={item.href} key={item.href}>
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </Link>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
