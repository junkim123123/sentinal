import { LinkButton } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import {
  companyDetailCards,
  ctaDirectory,
  homeCategoryProof,
  verticalIntegrationCards,
} from "@/content/site";

const heroWatchlist = [
  { molecule: "Glyphosate", value: "$1.22 CIF", delta: "+4.2%", direction: "up" },
  { molecule: "Metformin HCl", value: "$3.08 CIF", delta: "+2.7%", direction: "up" },
  { molecule: "Urea", value: "$0.51 CIF", delta: "+6.3%", direction: "up" },
  { molecule: "Imidacloprid", value: "$3.41 CIF", delta: "0.0%", direction: "flat" },
] as const;

const nextMoveCards = [
  {
    label: ctaDirectory.demo.label,
    href: ctaDirectory.demo.href,
    description:
      "Use Demo when the team wants to inspect watchlists, company drill-down, and deliverable depth in one session.",
    variant: "primary" as const,
  },
  {
    label: ctaDirectory.contact.label,
    href: ctaDirectory.contact.href,
    description:
      "Use Contact when the commercial need is real but the right next conversation still needs routing.",
    variant: "secondary" as const,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="sentinel-home-hero">
        <div className="sentinel-home-grid-bg" />
        <div className="sentinel-home-glow" />
        <div className="section-inner sentinel-home-hero-inner">
          <div className="sentinel-home-content">
            <div className="sentinel-home-tag">Private import intelligence</div>
            <h1>
              <em className="sentinel-home-name">Sentinel</em> turns import records into
              buying signals.
            </h1>
            <p className="sentinel-home-desc">
              Start with agrochemical monitoring, then extend into pharma and
              fertilizer when scope expands. Reviewed sources and working-file
              delivery keep the signal usable.
            </p>
            <div className="sentinel-home-quicklist" aria-label="Key trust cues">
              <span className="sentinel-home-quickitem">
                Named sources, analyst review, and working-file delivery
              </span>
            </div>
            <div className="sentinel-home-actions">
              <LinkButton href={ctaDirectory.demo.href}>{ctaDirectory.demo.label}</LinkButton>
              <LinkButton href={ctaDirectory.contact.href} variant="secondary">
                {ctaDirectory.contact.label}
              </LinkButton>
            </div>
          </div>

          <div className="sentinel-home-data">
            <div className="sentinel-data-terminal">
              <div className="sentinel-data-header">
                <span>Illustrative reviewed watchlist - Apr 2026</span>
                <div className="sentinel-terminal-dot" />
              </div>
              {heroWatchlist.map((item) => (
                <div className="sentinel-data-row" key={item.molecule}>
                  <span className="sentinel-molecule-name">{item.molecule}</span>
                  <span className="sentinel-molecule-value">{item.value}</span>
                  <span className={`sentinel-molecule-delta is-${item.direction}`}>
                    {item.delta}
                  </span>
                </div>
              ))}
              <div className="sentinel-data-footer">
                <span>Named-source review</span>
                <span>Company drill-down next</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-evidence home-proof-section sentinel-home-proof-cues">
        <div className="section-inner">
          <SectionHeading
            eyebrow="What Sentinel is"
            title="Reviewed import intelligence for strategic chemical teams"
            description="Lead with agrochemical depth, keep adjacent category coverage credible, and make the trust model visible early."
            measure="wide"
            size="lg"
          />
          <div className="page-panel-grid page-panel-grid-three">
            {homeCategoryProof.map((item) => (
              <article className="page-panel-card" key={item.label}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section home-operating-section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="What teams get"
            title="The product promise is visible in the first read"
            description="Sentinel should feel specific enough that a buyer can see the company view, the signal depth, and the files they would circulate."
            measure="wide"
          />
          <div className="sentinel-company-grid">
            {companyDetailCards.slice(0, 3).map((item) => (
              <article className="sentinel-company-card" key={item.title}>
                {item.label ? <span className="sentinel-card-label">{item.label}</span> : null}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section section-tint home-trust-section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why it is trusted"
            title="The method stays visible from source to delivery"
            description="Trust grows faster when the site shows named inputs, structured review, and client-ready output without turning into a portal pitch."
            measure="wide"
          />
          <div className="sentinel-vertical-grid">
            {verticalIntegrationCards.slice(0, 3).map((item) => (
              <article className="sentinel-vertical-card" key={item.title}>
                {item.label ? <span className="sentinel-card-label">{item.label}</span> : null}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section sentinel-cta-section home-next-section">
        <div className="section-inner sentinel-cta-inner">
          <SectionHeading
            align="center"
            eyebrow="Next move"
            title="Choose the cleanest next step"
            description="Use Demo to validate the workflow. Use Contact when the need is real but the route is still open. Consultation stays contextual when scope judgment matters more than a walkthrough."
            measure="wide"
          />

          <div className="sentinel-access-grid sentinel-access-grid-two">
            {nextMoveCards.map((item) => (
              <article className="sentinel-access-card" key={item.label}>
                <span className="sentinel-card-label">{item.label}</span>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
                <div className="sentinel-access-action">
                  <LinkButton href={item.href} variant={item.variant}>
                    {item.label}
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
