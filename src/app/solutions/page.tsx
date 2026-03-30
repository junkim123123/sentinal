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
    text: "Use recurring monitoring to understand quantity shifts, supplier activity, and landed-value context before negotiation starts.",
  },
  {
    label: "Compliance",
    title: "Keep source review and shipment context closer together",
    text: "Reduce scattered checks and build a cleaner internal trail for escalation, interpretation, and documentation.",
  },
  {
    label: "Strategy",
    title: "Turn trade movement into a working market read",
    text: "See what changed, where a deeper investigation should begin, and how to frame it internally.",
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
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Decision lanes</span>
                <strong>One reporting foundation, several different decisions</strong>
              </div>
              <p>
                The solution story works when buyers can immediately see their own
                workflow reflected in the structure.
              </p>
            </div>
            <div className="page-hero-brief-grid">
              {solutionTracks.map((track) => (
                <article className="page-hero-stat" key={track.label}>
                  <span>{track.label}</span>
                  <strong>{track.title}</strong>
                  <p>{track.text}</p>
                </article>
              ))}
            </div>
          </div>
        }
        title="Organize Sentinel around the team using the signal"
      />

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Each solution track should feel like a clear entry point into the workflow, not just another feature group."
            eyebrow="Solution tracks"
            title="Three ways Sentinel enters the work"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {solutionTracks.map((track) => (
              <article className="page-panel-card" key={track.title}>
                <span className="small-label">{track.label}</span>
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Buyers usually decide faster when the page shows their challenge and their payoff side by side."
            eyebrow="Role lens"
            title="How different teams read the same monthly brief"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {personaCards.map((card) => (
              <article className="page-panel-card page-panel-card-accent" key={card.title}>
                <span className="small-label">{card.role}</span>
                <h3>{card.title}</h3>
                <p>{card.challenge}</p>
                <div className="page-panel-note">
                  <strong>What Sentinel changes</strong>
                  <p>{card.payoff}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="The solution page is stronger when the commercial model reads like a natural next step from the team problem."
            eyebrow="Engagement model"
            title="How Sentinel packages recurring and custom work"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {engagementModels.map((item) => (
              <article className="page-panel-card" key={item.title}>
                <span className="small-label">Engagement</span>
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
