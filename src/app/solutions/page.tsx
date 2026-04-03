import type { Metadata } from "next";

import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ctaDirectory, solutionWorkflowCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "See how Sentinel Imports supports procurement, compliance, and strategy teams with recurring and custom intelligence.",
};

const bridgeCards = [
  {
    label: "Product",
    title: "See the actual output and proof surfaces",
    description:
      "Use Product first when the team needs to inspect the dashboard, report structure, and working deliverable.",
    href: "/product",
    action: "Review product",
  },
  {
    label: "Engagement",
    title: "Use scope language instead of role marketing",
    description:
      "Use Engagement when the main question is how the work should be shaped around cadence, depth, and stakeholder surface.",
    href: "/pricing",
    action: "Review engagement",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        variant="method"
        actions={
          <LinkButton href={ctaDirectory.contact.href} variant="secondary">
            {ctaDirectory.contact.label}
          </LinkButton>
        }
        description="This page is a bridge. Product shows the proof, Engagement shows the commercial shape, and Contact routes the next step."
        eyebrow="Solutions"
        title="A simple bridge by team need"
      />

      <section className="section page-section-tight subpage-shorthead">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Where to go next"
            title="Start with the page that answers the real question"
            description="Do not make a role page do the job of product proof or scope definition."
          />
          <div className="page-panel-grid page-panel-grid-two">
            {bridgeCards.map((item) => (
              <article className="page-panel-card" key={item.href}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="button-row page-button-row">
                  <LinkButton href={item.href} variant="secondary">
                    {item.action}
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint page-section-tight subpage-shorthead">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Outputs by role"
            title="What each team usually needs"
            description="Keep the role framing tied to output and workflow change instead of broad solution marketing."
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
    </>
  );
}
