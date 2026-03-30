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
        actions={
          <>
            <LinkButton href="/support-request">Contact support</LinkButton>
            <LinkButton href="/product" variant="secondary">
              Review product coverage
            </LinkButton>
          </>
        }
        description="Support gives clients direct access to the team behind the reporting, with clear paths for delivery issues, interpretation, and advanced questions."
        eyebrow="Support"
        theme="light"
        title="Support built around expert access"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Choose the support path that matches the issue, urgency, and level of review required."
            eyebrow="Support paths"
            title="Three ways Sentinel supports clients"
          />
          <div className="line-column-grid">
            {supportChannels.map((item) => (
              <article className="line-column" key={item.title}>
                <span className="small-label">{item.label ?? "Support"}</span>
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
              description="Routing matters because support questions do not all deserve the same path."
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

          <div className="stack-panel">
            <div className="stack-panel-top">
              <div>
                <span className="small-label">Help center direction</span>
                <h3>Guides, workflow review, and escalation support</h3>
              </div>
            </div>
            <div className="stack-panel-grid">
              {supportResources.map((item) => (
                <div className="stack-panel-row" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="These are the questions clients ask most often once reporting is in motion."
            eyebrow="Support FAQ"
            title="What clients usually need to know"
          />
          <div className="simple-text-list">
            {supportFaqs.map((item) => (
              <div className="simple-text-row" key={item.question}>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
