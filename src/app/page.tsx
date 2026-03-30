import { LinkButton } from "@/components/LinkButton";
import { dataSources, pricingBuckets, proofPoints, siteConfig } from "@/content/site";

const heroWatchlist = [
  { molecule: "Glyphosate", value: "$1.22 CIF", delta: "+4.2%", direction: "up" },
  { molecule: "Dicamba", value: "$1.09 CIF", delta: "-2.1%", direction: "down" },
  { molecule: "2,4-D", value: "$0.87 CIF", delta: "+7.8%", direction: "up" },
  { molecule: "Imidacloprid", value: "$3.41 CIF", delta: "0.0%", direction: "flat" },
  { molecule: "Clothianidin", value: "$4.18 CIF", delta: "+1.5%", direction: "up" },
  { molecule: "Trifluralin", value: "$1.56 CIF", delta: "-3.4%", direction: "down" },
] as const;

const deliveryCards = [
  {
    number: "01",
    title: "Monitor",
    text: "Track supplier movement across the molecules your team follows with configured watchlists, recurring cadence, and analyst-ready files.",
  },
  {
    number: "02",
    title: "Interpret",
    text: "Turn raw shipment records into a usable read with landed value, movement context, and signals that are easier to escalate internally.",
  },
  {
    number: "03",
    title: "Investigate",
    text: "Go deeper when the signal changes through custom projects, ad hoc analysis, and delivery shaped around the team using the answer.",
  },
] as const;

const workflowSteps = [
  {
    number: "01",
    title: "Source",
    text: "Pull from named trade, customs, regulatory, and crop-data systems relevant to Sentinel's current coverage.",
  },
  {
    number: "02",
    title: "Normalize",
    text: "Translate raw records into cleaner molecule, supplier, and shipment views that teams can interpret quickly.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "Package recurring monitoring or deeper investigations in formats clients already use.",
  },
  {
    number: "04",
    title: "Act",
    text: "Support teams with information that is easier to review, share, and escalate.",
  },
] as const;

const roleCards = [
  {
    code: "PR",
    title: "Procurement Lead",
    text: "Faster read on supplier movement, landed value, and category pressure before negotiations.",
  },
  {
    code: "CM",
    title: "Category Manager",
    text: "Recurring coverage organized around a live watchlist instead of a broad data dump.",
  },
  {
    code: "TC",
    title: "Trade Compliance",
    text: "Tighter visibility into the records behind a change, making documentation and escalation easier.",
  },
  {
    code: "MI",
    title: "Market Intelligence",
    text: "Translate shipment and supplier changes into a market story the business can use.",
  },
  {
    code: "FN",
    title: "Finance and Leadership",
    text: "Concise evidence for margin, risk, and planning decisions rather than a platform tour.",
  },
  {
    code: "OP",
    title: "Operations",
    text: "Delivery that is easy to share across analysts, managers, and executives without reformatting.",
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
            <div className="sentinel-home-tag">Private client intelligence</div>
            <h1>
              <em>Import intelligence</em> for high-consequence teams.
            </h1>
            <p className="sentinel-home-desc">
              Sentinel delivers discreet monthly briefings and scoped investigations
              for teams tracking agricultural chemical flows into the United States.
            </p>
            <div className="sentinel-home-actions">
              <LinkButton href={siteConfig.primaryCta.href}>
                Request a private briefing
              </LinkButton>
              <LinkButton href="/product" variant="ghost">
                Review the service
              </LinkButton>
            </div>
          </div>

          <div className="sentinel-home-data">
            <div className="sentinel-data-terminal">
              <div className="sentinel-data-header">
                <span>Illustrative watchlist - Mar 2026</span>
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
                <span>6 of 140+ molecules</span>
                <span>Monthly delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sentinel-metrics-bar">
        <div className="section-inner sentinel-metrics-grid">
          {proofPoints.slice(0, 4).map((item) => (
            <article className="sentinel-metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>

      <section className="sentinel-section sentinel-section-dark" id="product">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">What Sentinel delivers</span>
            <h2 className="sentinel-section-title">Signal, not sprawl.</h2>
            <p className="sentinel-section-desc">
              A tighter operating model for teams that need molecule-level clarity
              without the noise of a generic trade-data platform.
            </p>
          </div>

          <div className="sentinel-deliver-grid">
            {deliveryCards.map((item) => (
              <article className="sentinel-deliver-card" key={item.number}>
                <span className="sentinel-deliver-num">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section" id="method">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Methodology</span>
            <h2 className="sentinel-section-title">Source to brief, disciplined.</h2>
            <p className="sentinel-section-desc">
              Named inputs, molecule-level normalization, and working delivery that is
              easier to trust and share.
            </p>
          </div>

          <div className="sentinel-workflow-track">
            {workflowSteps.map((item) => (
              <article className="sentinel-workflow-step" key={item.number}>
                <span className="sentinel-step-num">{item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sentinel-source-row">
            {dataSources.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section sentinel-section-dark">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Decision lenses</span>
            <h2 className="sentinel-section-title">Different roles, one need for clarity.</h2>
            <p className="sentinel-section-desc">
              The same monthly brief serves procurement, compliance, market
              intelligence, and leadership, each through a different lens.
            </p>
          </div>

          <div className="sentinel-roles-grid">
            {roleCards.map((item) => (
              <article className="sentinel-role-card" key={item.code}>
                <div className="sentinel-role-icon">{item.code}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section sentinel-engagement-section" id="engagement">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Engagement models</span>
            <h2 className="sentinel-section-title">Three levels that clarify scope.</h2>
            <p className="sentinel-section-desc">
              Final pricing is handled through conversation. These models help teams
              picture where their monitoring needs fit.
            </p>
          </div>

          <div className="sentinel-tier-row">
            {pricingBuckets.map((item, index) => (
              <article
                className={`sentinel-tier-card ${index === 1 ? "is-featured" : ""}`}
                key={item.name}
              >
                <h3 className="sentinel-tier-name">{item.name}</h3>
                <p className="sentinel-tier-desc">{item.description}</p>
                <ul className="sentinel-tier-list">
                  {item.inclusions.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section sentinel-cta-section">
        <div className="section-inner sentinel-cta-inner">
          <span className="sentinel-section-tag">Start here</span>
          <h2 className="sentinel-section-title">
            Show us the monitoring question behind the request.
          </h2>
          <p className="sentinel-section-desc">
            Scope recurring monitoring, a sharper investigation, or a delivery model
            that fits the team reviewing the brief.
          </p>
          <div className="sentinel-cta-actions">
            <LinkButton href="/demo">Request a private briefing</LinkButton>
            <LinkButton href="/contact" variant="ghost">
              Contact Sentinel
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
