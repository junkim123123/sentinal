import type { Metadata } from "next";

import { HeroPhotoCard } from "@/components/HeroPhotoCard";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { dataSources, methodologySteps, moleculeExamples, reportHighlights } from "@/content/site";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Explore Sentinel Imports data sources, workflow, and delivery approach for agricultural chemical import intelligence.",
};

const methodSignals = [
  {
    label: "Source stack",
    value: "7 named inputs",
    detail: "Trade, customs, regulatory, and crop-data systems inform the current method.",
  },
  {
    label: "Normalization",
    value: "Molecule-level",
    detail: "Records are translated into views built for category-specific monitoring.",
  },
  {
    label: "Delivery",
    value: "Monthly brief",
    detail: "The output is designed to support review, sharing, and escalation.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        actions={
          <LinkButton href="/product" variant="secondary">
            Review the product
          </LinkButton>
        }
        description="Sentinel combines named data sources, molecule-level normalization, and client-ready delivery to make trade records more usable."
        eyebrow="Methodology"
        theme="dark"
        visualMode="paired"
        visual={
          <>
            <HeroPhotoCard
              alt="Analysts collaborating in a laboratory environment"
              label="Research discipline"
              note="The methodology lands better when the visuals suggest rigor, review, and a controlled workflow rather than generic tech styling."
              src="/images/lab.jpg"
              title="Named sources and normalization discipline should feel tangible on the page"
            />
            <div className="page-hero-brief page-hero-brief-dark">
              <div className="page-hero-brief-head">
                <div>
                  <span className="small-label">Source to brief</span>
                  <strong>A short workflow with named inputs and visible discipline</strong>
                </div>
                <p>
                  The methodology needs to build trust quickly by showing how raw
                  records become a usable monthly brief.
                </p>
              </div>
              <div className="page-hero-brief-grid">
                {methodologySteps.map((item) => (
                  <article className="page-hero-stat" key={item.step}>
                    <span>{item.step}</span>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
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
          </>
        }
        title="A disciplined path from source records to usable reporting"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="page-signal-band">
            {methodSignals.map((item) => (
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
            description="A method page should show the discipline clearly enough that buyers can understand both the input quality and the transformation logic."
            eyebrow="How it works"
            title="Three steps from records to working output"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {methodologySteps.map((item) => (
              <article className="page-panel-card" key={item.step}>
                <span className="small-label">{item.step}</span>
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
              description="The reporting details matter because they explain what teams can actually expect from the output."
              eyebrow="Report detail"
              title="What Sentinel reporting is designed to surface"
            />
            <article className="page-panel-card page-panel-card-accent">
              <span className="small-label">Included context</span>
              <h3>What teams can review in the monthly brief</h3>
              <ul className="detail-list page-checklist">
                {reportHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="page-panel-grid">
            <article className="page-panel-card">
              <span className="small-label">Named inputs</span>
              <h3>Current source stack</h3>
              <div className="page-hero-tag-row page-hero-tag-row-light">
                {dataSources.map((source) => (
                  <span className="page-hero-tag page-hero-tag-light" key={source}>
                    {source}
                  </span>
                ))}
              </div>
            </article>
            <article className="page-panel-card">
              <span className="small-label">Representative coverage</span>
              <h3>Molecule examples in the current lens</h3>
              <div className="page-hero-tag-row page-hero-tag-row-light">
                {moleculeExamples.map((molecule) => (
                  <span className="page-hero-tag page-hero-tag-light" key={molecule}>
                    {molecule}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
