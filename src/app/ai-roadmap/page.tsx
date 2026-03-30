import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aiPilotSequence,
  aiPrinciples,
  openAiProductWorkflowReference,
  promptWorkflows,
  validatedAiCapabilities,
} from "@/content/site";

export const metadata: Metadata = {
  title: "AI Roadmap",
  description:
    "See the four AI capability areas Sentinel can credibly pursue, each framed with market precedent and a staged rollout approach.",
};

export default function AiRoadmapPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/consultation">Discuss the roadmap</LinkButton>
            <LinkButton href="/pricing" variant="secondary">
              Review pricing buckets
            </LinkButton>
          </>
        }
        description="AI belongs on the site as a validation-backed roadmap, not as a broad product promise."
        eyebrow="AI roadmap"
        theme="light"
        title="A measured path for Sentinel AI"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Each capability area is grounded in buyer value, market precedent, and a realistic delivery path."
            eyebrow="Validated capabilities"
            title="Where AI could create the most leverage"
          />
          <div className="line-column-grid grid-four">
            {validatedAiCapabilities.map((item) => (
              <article className="line-column" key={item.title}>
                <span className="small-label">{item.precedent}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
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
            description="Principles and pilot phases keep the roadmap grounded in trust, reviewability, and real workflow value."
            eyebrow="Adoption logic"
            title="How Sentinel can introduce AI responsibly"
          />
            <ul className="detail-list">
              {aiPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="stack-panel">
            <div className="stack-panel-top">
              <div>
                <span className="small-label">Pilot path</span>
                <h3>A phased rollout is more credible than a broad promise</h3>
              </div>
            </div>
            <div className="stack-panel-grid">
              {aiPilotSequence.map((item) => (
                <div className="stack-panel-row" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
          <SectionHeading
            description="This reference helps Sentinel think about repeatable internal workflows for research, product, and GTM work."
            eyebrow="Prompt-pack reference"
            title="How Sentinel can use the product workflow pattern internally"
          />
            <div className="button-row">
              <LinkButton external href={openAiProductWorkflowReference.href} variant="secondary">
                Open OpenAI Academy reference
              </LinkButton>
            </div>
          </div>

          <div className="simple-text-list">
            {promptWorkflows.map((item) => (
              <div className="simple-text-row" key={item.category}>
                <strong>{item.category}</strong>
                <p>{item.sentinelUse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
