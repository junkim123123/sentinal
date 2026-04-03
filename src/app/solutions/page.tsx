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
    title: "See supplier movement before the next sourcing call.",
    text: "Use recurring monitoring to read quantity, supplier activity, and landed-value shifts sooner.",
  },
  {
    label: "Compliance",
    title: "Keep review and shipment context in one place.",
    text: "Reduce scattered checks and make escalation notes easier to document and share.",
  },
  {
    label: "Strategy",
    title: "Turn trade motion into a usable market read.",
    text: "Spot what changed and where a deeper investigation should start.",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        family="marketing"
        headingMeasure="balanced"
        surfaceTone="soft"
        actions={
          <>
            <LinkButton href={ctaDirectory.consultation.href}>{ctaDirectory.consultation.label}</LinkButton>
            <LinkButton href={ctaDirectory.demo.href} variant="secondary">
              {ctaDirectory.demo.label}
            </LinkButton>
          </>
        }
        description="Sentinel supports procurement, compliance, and strategy teams differently because the same signal has to arrive as a different output and next action."
        eyebrow="Solutions"
        theme="light"
        visual={
          <div className="page-hero-brief page-hero-brief-dark page-hero-brief-hero">
            <div className="page-hero-brief-head">
              <div>
                <span className="small-label">Decision lanes</span>
                <strong>One reporting spine, three lanes</strong>
              </div>
              <p>
                The page gets stronger when buyers can see what their team
                receives and how it changes the workflow.
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
        title="One reporting spine, different team outputs"
      />

      <section className="section section-tint page-section-tight subpage-shorthead solutions-output-section">
        <div className="section-inner">
          <SectionHeading
            description="This section closes the gap between role language and contractable output."
            eyebrow="Outputs by role"
            title="What each team gets"
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

      <section className="section page-section-tight subpage-shorthead solutions-role-section">
        <div className="section-inner">
          <SectionHeading
            description="Different functions need a different payoff from the same monthly file."
            eyebrow="Role lens"
            title="How teams read the same brief"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {personaCards.map((card) => (
              <article className="page-panel-card" key={card.title}>
                <span className="small-label">{card.role}</span>
                <h3>{card.title}</h3>
                <p>{card.challenge}</p>
                <div className="page-panel-note">
                  <strong>Workflow shift</strong>
                  <p>{card.payoff}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight subpage-shorthead solutions-engagement-section">
        <div className="section-inner">
          <SectionHeading
            description="The commercial model should follow the team problem and the expected output."
            eyebrow="Engagement model"
            title="Which relationship shape fits best"
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
