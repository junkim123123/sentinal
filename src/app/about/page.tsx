import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aboutCredibility,
  aboutExpertise,
  aboutOperatorCards,
  aboutPoints,
  ctaDirectory,
  dataSources,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Sentinel Imports approaches agricultural chemical intelligence, reporting clarity, and careful category expansion.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        family="marketing"
        headingMeasure="balanced"
        surfaceTone="soft"
        actions={
          <>
            <LinkButton href={ctaDirectory.contact.href}>{ctaDirectory.contact.label}</LinkButton>
            <LinkButton href="/product" variant="secondary">
              Review product
            </LinkButton>
          </>
        }
        description="Sentinel stays narrow on purpose: named sources, visible review, and delivery built for buying teams that need signal they can circulate."
        eyebrow="About Sentinel"
        theme="light"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Operating posture</span>
                <strong>Operator-led review, narrow focus</strong>
              </div>
              <p>
                Buyers trust Sentinel faster when the site shows a controlled model
                instead of a broad portal story.
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
        title="A narrow operating model built for serious buying teams"
      />

      <section className="section section-evidence home-proof-section about-proof-section">
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

      <section className="section page-section-tight sentinel-subpage-emphasis subpage-shorthead about-operator-section">
        <div className="section-inner">
          <SectionHeading
            description="Buyers should be able to see who owns the work, how delivery runs, and why the model stays intentionally focused."
            eyebrow="Operator credibility"
            title="Why the model feels credible"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {aboutOperatorCards.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight subpage-shorthead about-operating-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="Product posture, service boundaries, and workflow fit should read together instead of as separate brand claims."
              eyebrow="Operating model"
              title="How Sentinel works"
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
    </>
  );
}
