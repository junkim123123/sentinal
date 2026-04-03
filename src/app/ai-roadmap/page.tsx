import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aiPilotSequence,
  aiPrinciples,
  aiRoadmapFrames,
  ctaDirectory,
  openAiProductWorkflowReference,
  promptWorkflows,
  validatedAiCapabilities,
} from "@/content/site";

export const metadata: Metadata = {
  title: "AI Roadmap",
  description:
    "See the AI capability areas Sentinel can credibly pursue after the core product and trust model are established.",
};

export default function AiRoadmapPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/product" variant="secondary">
              Review current product
            </LinkButton>
            <LinkButton href={ctaDirectory.consultation.href} variant="ghost">
              {ctaDirectory.consultation.label}
            </LinkButton>
          </>
        }
        description="AI belongs on the site as a later acceleration layer. Sentinel leads with current reviewed monitoring, delivery clarity, and human accountability first, then explains where AI could responsibly help."
        eyebrow="AI roadmap"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Roadmap posture</span>
                <strong>Current product first, AI later</strong>
              </div>
              <p>
                The roadmap becomes more credible when it reads like a sequence of
                measured additions on top of a working product, not a shortcut
                around unfinished trust work.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {aiRoadmapFrames.map((item) => (
                <article className="page-hero-stat" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="A measured AI path that follows the core product, not the other way around"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="page-panel-grid page-panel-grid-three">
            {aiRoadmapFrames.map((item) => (
              <article className="page-panel-card" key={item.label}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Each capability area should connect precedent, buyer value, and Sentinel's practical use case in the same card, while staying visibly downstream of the current product."
            eyebrow="Validated capabilities"
            title="Where AI could create leverage after the trust model is established"
          />
          <div className="page-panel-grid page-panel-grid-four">
            {validatedAiCapabilities.map((item) => (
              <article className="page-panel-card page-panel-card-accent" key={item.title}>
                <span className="small-label">{item.precedent}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="page-panel-note">
                  <strong>Sentinel use case</strong>
                  <p>{item.sentinelUse}</p>
                </div>
                <div className="inline-cta">
                  <LinkButton external href={item.href} variant="secondary">
                    Official precedent
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="Principles and pilot phases keep the roadmap grounded in trust, reviewability, and practical workflow gains."
              eyebrow="Adoption logic"
              title="How Sentinel can introduce AI responsibly"
            />
            <article className="page-panel-card">
              <span className="small-label">Operating principles</span>
              <h3>The rules that should shape rollout</h3>
              <ul className="detail-list page-checklist">
                {aiPrinciples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="page-panel-grid">
            {aiPilotSequence.map((item, index) => (
              <article className="page-panel-card" key={item}>
                <span className="small-label">{`Phase 0${index + 1}`}</span>
                <h3>{item.split(":")[0]}</h3>
                <p>{item.split(":")[1]?.trim() ?? item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="The workflow reference is useful because it turns AI from a vague claim into repeatable operating patterns that can support the current product team."
              eyebrow="Prompt-pack reference"
              title="How Sentinel can use the product workflow pattern internally"
            />
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">{openAiProductWorkflowReference.source}</span>
              <h3>{openAiProductWorkflowReference.title}</h3>
              <p>
                Published {openAiProductWorkflowReference.published}. Updated{" "}
                {openAiProductWorkflowReference.updated}.
              </p>
              <div className="inline-cta">
                <LinkButton
                  external
                  href={openAiProductWorkflowReference.href}
                  variant="secondary"
                >
                  Open OpenAI Academy reference
                </LinkButton>
              </div>
            </article>
          </div>

          <div className="page-panel-grid page-panel-grid-two">
            {promptWorkflows.map((item) => (
              <article className="page-panel-card" key={item.category}>
                <span className="small-label">{item.category}</span>
                <h3>{item.description}</h3>
                <p>{item.sentinelUse}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
