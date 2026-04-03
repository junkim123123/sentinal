import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms information for the Sentinel Imports website.",
};

const termsPoints = [
  {
    label: "Website content",
    title: "Public content is informational",
    text: "The site is designed to explain Sentinel's current offer and start a scoped commercial conversation.",
  },
  {
    label: "Commercial scope",
    title: "Final delivery is defined directly with clients",
    text: "Project scope, reporting format, access, and custom work are confirmed during direct engagement.",
  },
  {
    label: "Future update",
    title: "Approved terms can replace this placeholder",
    text: "This page gives the site a real legal destination while the final version is still pending.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        actions={
          <LinkButton href="/consultation" variant="secondary">
            Start a consultation
          </LinkButton>
        }
        description="This terms page explains how public website information relates to Sentinel's commercial offer until final contract language is published."
        eyebrow="Terms"
        theme="light"
        visual={
          <div className="page-hero-brief page-hero-brief-dark">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Current terms posture</span>
                <strong>Website information starts the conversation, not the final scope</strong>
              </div>
              <p>
                Sentinel uses the public site to frame the offer clearly while final
                obligations remain part of direct client engagement.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {termsPoints.map((item) => (
                <article className="page-hero-stat" key={item.title}>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="Website terms and information notices"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Like the privacy page, this placeholder should communicate the current posture clearly without pretending to be a final legal document."
            eyebrow="Current position"
            title="What the placeholder terms page is meant to cover"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {termsPoints.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
