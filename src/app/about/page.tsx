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
        actions={
          <>
            <LinkButton href={ctaDirectory.consultation.href}>{ctaDirectory.consultation.label}</LinkButton>
            <LinkButton href={ctaDirectory.contact.href} variant="secondary">
              {ctaDirectory.contact.label}
            </LinkButton>
          </>
        }
        description="Sentinel stays narrow on purpose: focused coverage, named sources, accountable review, and delivery built for serious buying teams."
        eyebrow="About Sentinel"
        theme="dark"
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
        title="An operator-led model that earns trust fast"
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
            description="Buyers should be able to see who owns the work, how delivery runs, and why the model stays intentionally narrow."
            eyebrow="Operator credibility"
            title="Why it feels credible"
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
              description="Product posture, service boundaries, and client workflow should read together instead of as separate brand claims."
              eyebrow="Operating model"
              title="How Sentinel runs"
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
