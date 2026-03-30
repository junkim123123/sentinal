import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aboutCredibility,
  aboutDifferentiators,
  aboutExpertise,
  aboutPoints,
  dataSources,
  roadmapSignals,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Sentinel Imports approaches agricultural chemical intelligence, reporting clarity, and future custom intelligence expansion.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/consultation">Talk with Sentinel</LinkButton>
            <LinkButton href="/methodology" variant="secondary">
              Review the method
            </LinkButton>
          </>
        }
        description="Sentinel focuses on agricultural chemical and intermediate imports, recurring reporting, and workflow-ready delivery instead of broad generic trade-data claims."
        eyebrow="About Sentinel"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Operating posture</span>
                <strong>Focused intelligence with a working delivery model</strong>
              </div>
              <p>
                Sentinel stays deliberately narrow so clients get a signal they can
                trust, share, and act on without wading through platform noise.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {aboutCredibility.slice(0, 3).map((item) => (
                <article className="page-hero-stat" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <div className="page-hero-tag-row">
              {dataSources.slice(0, 5).map((source) => (
                <span className="page-hero-tag" key={source}>
                  {source}
                </span>
              ))}
            </div>
          </div>
        }
        title="A narrower intelligence model built for real operating teams"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="page-signal-band">
            {aboutCredibility.map((item) => (
              <article className="page-signal-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Sentinel is designed to create confidence quickly: narrow category focus, disciplined interpretation, and output that fits existing client workflows."
            eyebrow="Why it works"
            title="The value comes from focus, discipline, and delivery"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {aboutDifferentiators.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">Differentiator</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="The business is easier to understand when the operating model, the client workflow, and the future growth path are shown side by side."
              eyebrow="Operating model"
              title="How Sentinel is built today"
            />
            <div className="simple-text-list">
              {aboutPoints.map((point) => (
                <div className="simple-text-row" key={point}>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="page-panel-grid">
            {aboutExpertise.map((item) => (
              <article className="page-panel-card page-panel-card-accent" key={item.title}>
                <span className="small-label">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="Sentinel can extend carefully from the current reporting model without diluting the core offer that makes the service credible today."
              eyebrow="Where it can grow"
              title="A careful path to deeper intelligence"
            />
            <div className="page-hero-tag-row page-hero-tag-row-light">
              {dataSources.map((source) => (
                <span className="page-hero-tag page-hero-tag-light" key={source}>
                  {source}
                </span>
              ))}
            </div>
          </div>

          <div className="page-panel-grid">
            {roadmapSignals.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">Next move</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
