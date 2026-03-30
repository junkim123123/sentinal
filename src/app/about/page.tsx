import type { Metadata } from "next";
import Image from "next/image";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutCredibility, aboutPoints, dataSources, roadmapSignals } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Sentinel Imports approaches agricultural chemical intelligence, reporting clarity, and future custom intelligence expansion.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={<LinkButton href="/consultation">Talk with Sentinel</LinkButton>}
        description="Sentinel focuses on agricultural chemical and intermediate imports, recurring reporting, and workflow-ready delivery instead of broad generic trade-data claims."
        eyebrow="About Sentinel"
        theme="light"
        visual={
          <div className="page-hero-figure page-hero-figure-tall">
            <Image
              alt="Aerial cargo-container yard showing structured logistics movement"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 34vw"
              src="/images/hero-port.jpg"
            />
            <div className="page-hero-figure-card">
              <span className="small-label">Positioning</span>
              <strong>Focused import intelligence for a specialized market</strong>
            </div>
          </div>
        }
        title="A narrower, more usable intelligence model"
      />

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="simple-proof-band">
            {aboutCredibility.map((item) => (
              <div className="simple-proof-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
          <SectionHeading
            description="Sentinel focuses on a specific category and a usable delivery model so clients can act on the reporting faster."
            eyebrow="Who, what, why"
            title="Why Sentinel stands apart from a generic data vendor"
          />
          </div>
          <div className="simple-text-list">
            {aboutPoints.map((point) => (
              <p className="simple-text-row" key={point}>
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
          <SectionHeading
            description="Named sources, disciplined normalization, and practical delivery shape the way Sentinel works."
            eyebrow="Methodology"
            title="What the business is built on"
          />
            <div className="compact-chip-row compact-chip-row-spaced">
              {dataSources.map((source) => (
                <span key={source}>{source}</span>
              ))}
            </div>
          </div>

          <div className="simple-text-list">
            {roadmapSignals.map((item) => (
              <div className="simple-text-row" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
