import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { dataSources, methodologySteps, moleculeExamples, reportHighlights } from "@/content/site";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Explore Sentinel Imports data sources, workflow, and delivery approach for agricultural chemical import intelligence.",
};

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        description="Sentinel combines named data sources, molecule-level normalization, and client-ready delivery to make trade records more usable."
        eyebrow="Methodology"
        theme="light"
        title="A simple source-to-signal workflow"
      />

      <section className="section page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
          <SectionHeading
            description="See how Sentinel moves from raw records to a usable monthly brief."
            eyebrow="How it works"
            title="Three steps from records to working output"
          />
            <div className="compact-step-grid">
              {methodologySteps.map((item) => (
                <article className="compact-step" key={item.step}>
                  <span className="home-method-number">{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="stack-panel">
            <div className="stack-panel-top">
              <div>
                <span className="small-label">Named inputs</span>
                <h3>Source stack</h3>
              </div>
            </div>
            <div className="compact-chip-row compact-chip-row-spaced">
              {dataSources.map((source) => (
                <span key={source}>{source}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
          <SectionHeading
            description="The reporting is designed to surface the context teams need for sourcing, compliance, and market review."
            eyebrow="Report detail"
            title="What Sentinel reporting is designed to surface"
          />
            <ul className="detail-list">
              {reportHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="stack-panel">
            <div className="stack-panel-top">
              <div>
                <span className="small-label">Representative molecules</span>
                <h3>Current coverage examples</h3>
              </div>
            </div>
            <div className="compact-chip-row">
              {moleculeExamples.map((molecule) => (
                <span key={molecule}>{molecule}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
