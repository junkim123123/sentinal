import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { engagementModels, personaCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "See how Sentinel Imports supports procurement, compliance, and strategy teams with recurring and custom agricultural chemical intelligence.",
};

const solutionTracks = [
  {
    label: "Procurement",
    title: "Track supplier movement before sourcing conversations",
    text: "Use recurring monitoring to understand quantity shifts, supplier activity, and landed-value context.",
  },
  {
    label: "Compliance",
    title: "Keep source review and shipment context closer together",
    text: "Reduce scattered checks and build a cleaner internal trail for escalation and review.",
  },
  {
    label: "Strategy",
    title: "Turn trade movement into a working market read",
    text: "See what changed, where a custom investigation should begin, and how to frame it internally.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href="/consultation">Start a conversation</LinkButton>
            <LinkButton href="/methodology" variant="secondary">
              See the methodology
            </LinkButton>
          </>
        }
        description="Sentinel supports procurement, compliance, and strategy teams differently because each group needs the same signal framed around a different decision."
        eyebrow="Solutions"
        theme="light"
        title="Organize Sentinel around the team using it"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Choose the entry point that best matches the decision your team needs to make."
            eyebrow="Solution tracks"
            title="Three ways Sentinel enters the workflow"
          />
          <div className="line-column-grid">
            {solutionTracks.map((track) => (
              <article className="line-column" key={track.title}>
                <span className="small-label">{track.label}</span>
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner page-story-grid">
          <div>
          <SectionHeading
            description="The same reporting can support procurement, compliance, and market strategy without changing the underlying data discipline."
            eyebrow="Buyer routes"
            title="How the same reporting is used differently"
          />
            <div className="simple-text-list">
              {personaCards.map((card) => (
                <div className="simple-text-row" key={card.title}>
                  <strong>{card.role}</strong>
                  <p>{card.payoff}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stack-panel">
            <div className="stack-panel-top">
              <div>
                <span className="small-label">Engagement model</span>
                <h3>How Sentinel packages recurring and custom work</h3>
              </div>
            </div>
            <div className="stack-panel-grid">
              {engagementModels.map((item) => (
                <div className="stack-panel-row" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
