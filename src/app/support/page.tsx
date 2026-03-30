import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { supportAccessPoints, supportChannels, supportFaqs, supportResources } from "@/content/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Explore Sentinel Imports support channels, expert access, FAQs, and help-center style resources.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        actions={<LinkButton href="/support-request">Contact support desk</LinkButton>}
        description="Support gives clients direct access to the team behind the reporting, with clear paths for delivery issues, interpretation, and advanced questions."
        eyebrow="Support"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Support model</span>
                <strong>Expert access, guided review, and escalation when needed</strong>
              </div>
              <p>
                The support page should feel as direct and accountable as the service
                itself.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {supportChannels.map((item) => (
                <article className="page-hero-stat" key={item.title}>
                  <span>{item.label ?? "Support"}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="Support built around direct access to the team behind the reporting"
      />

      <section className="section page-section-tight sentinel-subpage-emphasis support-paths-section">
        <div className="section-inner">
          <SectionHeading
            description="The support story is stronger when clients can immediately see what kind of help they can expect."
            eyebrow="Support paths"
            title="Three ways Sentinel supports clients"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {supportChannels.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">{item.label ?? "Support"}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight support-flow-section">
        <div className="section-inner page-story-grid">
          <div>
            <SectionHeading
              description="Routing matters because delivery issues, interpretation questions, and deeper custom requests should not all travel the same path."
              eyebrow="How support works"
              title="A clear path from question to expert review"
            />
            <div className="compact-step-grid">
              {supportAccessPoints.map((item, index) => (
                <article className="compact-step" key={item.title}>
                  <span className="home-method-number">{`0${index + 1}`}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="page-panel-grid">
            {supportResources.map((item) => (
              <article className="page-panel-card page-panel-card-accent" key={item.title}>
                <span className="small-label">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight support-faq-section">
        <div className="section-inner">
          <SectionHeading
            description="A support page reads more confidently when common client questions are answered directly instead of hidden deep in the flow."
            eyebrow="Support FAQ"
            title="What clients usually need to know"
          />
          <div className="page-panel-grid page-panel-grid-two">
            {supportFaqs.map((item) => (
              <article className="page-panel-card" key={item.question}>
                <span className="small-label">FAQ</span>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
