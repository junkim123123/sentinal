import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aboutCredibility,
  aboutDifferentiators,
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
        description="Sentinel is built around a narrower operating model: focused category coverage, named-source discipline, direct client follow-through, and a delivery posture designed for serious buying teams."
        eyebrow="About Sentinel"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Operating posture</span>
                <strong>Focused intelligence with accountable review and delivery</strong>
              </div>
              <p>
                Sentinel is easier to trust when buyers can see that it is built for
                a small number of serious workflows rather than broad platform volume.
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
        title="A narrower operator-led model built to earn trust quickly"
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

      <section className="section page-section-tight sentinel-subpage-emphasis about-operator-section">
        <div className="section-inner">
          <SectionHeading
            description="This page should help buyers understand who is really behind the work, how delivery is handled, and why the business remains focused instead of trying to be generic."
            eyebrow="Operator credibility"
            title="What makes the operating model believable"
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

      <section className="section section-tint page-section-tight about-value-section">
        <div className="section-inner">
          <SectionHeading
            description="Sentinel creates confidence by staying narrow where it needs to be narrow and explicit about how adjacent category expansion actually happens."
            eyebrow="Why it works"
            title="The value comes from focus, discipline, and workflow-ready delivery"
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

      <section className="section page-section-tight about-operating-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="The business reads more credibly when the site shows the product posture, client workflow, and service boundaries side by side."
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
    </>
  );
}
