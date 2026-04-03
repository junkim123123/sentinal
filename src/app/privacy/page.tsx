import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Sentinel Imports website.",
};

const privacyPoints = [
  {
    label: "Collection",
    title: "Contact details provided through forms",
    text: "Sentinel collects the information needed to respond to inquiries, scope work, and follow up on requested conversations.",
  },
  {
    label: "Use",
    title: "Routing, response, and client communication",
    text: "Information is used to direct the request to the right team member and support the conversation the visitor initiated.",
  },
  {
    label: "Next step",
    title: "Approved legal language can replace this page",
    text: "This page is a placeholder structure and can be updated as soon as a final policy is available.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        actions={
          <LinkButton href="/contact" variant="secondary">
            Contact Sentinel
          </LinkButton>
        }
        description="This privacy page outlines how website inquiry information is used today and provides a clear legal destination until approved policy language is finalized."
        eyebrow="Privacy"
        theme="light"
        visual={
          <div className="page-hero-brief page-hero-brief-dark">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Current policy posture</span>
                <strong>Website form data is used to route and respond to requests</strong>
              </div>
              <p>
                The structure is ready for approved legal language while still giving
                visitors a clear explanation of current handling.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {privacyPoints.map((item) => (
                <article className="page-hero-stat" key={item.title}>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="Privacy information for website visitors and inquiry forms"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="This page should stay simple, clear, and easy to replace with final legal text later."
            eyebrow="Current handling"
            title="What this placeholder privacy page is intended to communicate"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {privacyPoints.map((item) => (
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
