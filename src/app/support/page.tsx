import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ctaDirectory,
  supportAccessPoints,
  supportChannels,
  supportFaqs,
  supportResources,
  supportResponseCards,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Explore Sentinel Imports support channels, response expectations, expert access, FAQs, and help-center style resources.",
};

const supportStandards = [
  "Current-client delivery issues are prioritized first because they affect active workflows immediately.",
  "Interpretation and workflow requests are routed through the same service relationship rather than a disconnected queue.",
  "When a support issue becomes a bigger market or supplier question, Sentinel can escalate it without losing context.",
] as const;

export default function SupportPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href={ctaDirectory.support.href}>{ctaDirectory.support.label}</LinkButton>
            <LinkButton href={ctaDirectory.contact.href} variant="secondary">
              {ctaDirectory.contact.label}
            </LinkButton>
          </>
        }
        description="Support is part of the relationship, not an afterthought. Buyers should be able to see response ownership, priority rules, and escalation paths before they submit."
        eyebrow="Support"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Support model</span>
                <strong>Expert access, visible routing, and accountable follow-through</strong>
              </div>
              <p>
                This page should answer three things quickly: who gets priority,
                who responds, and what happens when the issue gets deeper.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {supportResponseCards.map((item) => (
                <article className="page-hero-stat" key={item.title}>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="Support with clear ownership, priority, and escalation rules"
      />

      <section className="section page-section-tight sentinel-subpage-emphasis support-standards-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="A buyer or current client should be able to quote these rules back after one pass through the page."
              eyebrow="Response expectations"
              title="How support is prioritized"
            />
            <div className="simple-text-list">
              {supportStandards.map((item) => (
                <div className="simple-text-row" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="page-panel-grid">
            {supportResponseCards.map((item) => (
              <article className="page-panel-card page-panel-card-accent" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight support-paths-section">
        <div className="section-inner">
          <SectionHeading
            description="Clients should be able to see what kind of help they can expect and where the path changes."
            eyebrow="Support paths"
            title="Three ways support enters the relationship"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {supportChannels.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label ?? "Support"}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight support-flow-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="Delivery issues, interpretation questions, and deeper requests should not all travel the same path."
              eyebrow="How support works"
              title="A clear path from question to review"
            />
            <div className="compact-step-grid">
              {supportAccessPoints.map((item, index) => (
                <article className="compact-step" key={item.title}>
                  <span className="home-method-number">{`0${index + 1}`}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="page-panel-grid">
            {supportResources.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight support-faq-section">
        <div className="section-inner">
            <SectionHeading
            description="Common questions about access, escalation, and help scope should be answered directly."
            eyebrow="Support FAQ"
            title="What clients usually need to know"
          />
          <div className="page-panel-grid page-panel-grid-two">
            {supportFaqs.map((item) => (
              <article className="page-panel-card" key={item.question}>
                <span className="small-label">FAQ</span>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
