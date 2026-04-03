import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ctaDirectory,
  engagementModels,
  personaCards,
  solutionWorkflowCards,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "See how Sentinel Imports supports procurement, compliance, and strategy teams with recurring and custom intelligence.",
};

const solutionTracks = [
  {
    label: "Procurement",
    title: "Track supplier movement before sourcing conversations harden.",
    text: "Use recurring monitoring to understand quantity shifts, supplier activity, and landed-value context before negotiation starts.",
  },
  {
    label: "Compliance",
    title: "Keep source review and shipment context closer together.",
    text: "Reduce scattered checks and build a cleaner internal trail for escalation, interpretation, and documentation.",
  },
  {
    label: "Strategy",
    title: "Turn trade movement into a usable market read.",
    text: "See what changed, where a deeper investigation should begin, and how to frame it for leadership.",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <LinkButton href={ctaDirectory.consultation.href}>{ctaDirectory.consultation.label}</LinkButton>
            <LinkButton href={ctaDirectory.demo.href} variant="secondary">
              {ctaDirectory.demo.label}
            </LinkButton>
          </>
        }
        description="Sentinel supports procurement, compliance, and strategy teams differently because each group needs the same underlying signal framed as a different output and a different next action."
        eyebrow="Solutions"
        theme="dark"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Decision lanes</span>
                <strong>One reporting foundation, several different decisions</strong>
              </div>
              <p>
                The page becomes more credible when buyers can see what their team
                actually receives and how it changes the review workflow.
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

      <section className="section page-section-tight sentinel-subpage-emphasis solutions-track-section">
        <div className="section-inner">
          <SectionHeading
            description="Each solution track should feel like a real operating motion rather than a simple persona label."
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

      <section className="section section-tint page-section-tight solutions-output-section">
        <div className="section-inner">
          <SectionHeading
            description="This section closes the gap between role language and contractable output by showing what each team actually gets and what changes in the workflow."
            eyebrow="Outputs by role"
            title="What each team receives and what changes in their workflow"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {solutionWorkflowCards.map((item) => (
              <article className="page-panel-card page-panel-card-accent" key={item.role}>
                <span className="small-label">{item.role}</span>
                <h3>{item.output}</h3>
                <p>{item.change}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section-tight solutions-role-section">
        <div className="section-inner">
          <SectionHeading
            description="Teams usually decide faster when the page shows their challenge and the concrete payoff side by side."
            eyebrow="Role lens"
            title="How different teams read the same monthly brief"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {personaCards.map((card) => (
              <article className="page-panel-card" key={card.title}>
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

      <section className="section section-tint page-section-tight solutions-engagement-section">
        <div className="section-inner">
          <SectionHeading
            description="The solution page reads more credibly when the commercial model follows naturally from the team problem and the expected output."
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
