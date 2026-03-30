import { LinkButton } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalChart } from "@/components/SignalChart";
import { dataSources, moleculeExamples, proofPoints, siteConfig } from "@/content/site";

const heroHighlights = [
  {
    label: "Coverage",
    value: "140+ molecules",
    text: "Focused monitoring across agricultural chemicals and intermediates entering the United States.",
  },
  {
    label: "Cadence",
    value: "Monthly delivery",
    text: "A recurring reporting model designed for review, escalation, and team sharing.",
  },
  {
    label: "Output",
    value: "Excel + Tableau",
    text: "Working files that fit analyst, manager, and leadership workflows.",
  },
];

const deliveryColumns = [
  {
    label: "Monitor",
    title: "See supplier movement in context",
    text: "Track who is shipping what across the molecules your team follows most closely.",
    bullets: [
      "Supplier and consignee visibility",
      "Quantity and formulation detail",
      "Recurring watchlists built around the molecules that matter",
    ],
  },
  {
    label: "Interpret",
    title: "Turn raw movement into a usable read",
    text: "Bring landed value, shipment detail, and pattern changes into one monthly brief.",
    bullets: [
      "Import value plus CIF context when available",
      "Signals that are easier to escalate internally",
      "A cleaner narrative for sourcing and market conversations",
    ],
  },
  {
    label: "Investigate",
    title: "Go deeper when the signal changes",
    text: "Expand beyond recurring monitoring when a supplier, competitor, or market question deserves custom work.",
    bullets: [
      "Custom projects and ad hoc analysis",
      "Delivery shaped around the team using the answer",
      "A path from monthly review to sharper decision support",
    ],
  },
];

const stakeholderQuestions = [
  "What changed this month that actually matters?",
  "Which supplier, molecule, or route deserves immediate attention?",
  "Is the movement credible enough to inform a real decision?",
  "What should the team escalate, share, or investigate next?",
];

const stakeholderPanels = [
  {
    role: "Procurement lead",
    title: "Benchmark suppliers before the next negotiation",
    text: "Needs a faster read on supplier movement, landed value, and category pressure before commercial conversations start.",
  },
  {
    role: "Category manager",
    title: "Spot shifts in the molecules that matter most",
    text: "Wants recurring coverage organized around a live watchlist rather than a broad trade-data dump.",
  },
  {
    role: "Trade compliance",
    title: "Keep source review close to shipment context",
    text: "Needs a tighter view of the records behind a change so escalation is easier to document and explain.",
  },
  {
    role: "Market intelligence",
    title: "Translate movement into a market story",
    text: "Uses shipment and supplier changes to frame what happened, where it matters, and what the business should watch next.",
  },
  {
    role: "Finance or leadership",
    title: "Get a brief that reads quickly",
    text: "Needs concise evidence, not a dense system tour, when reviewing implications for margin, risk, or planning.",
  },
  {
    role: "Operations partner",
    title: "Align teams around the same signal",
    text: "Benefits when delivery is easy to share across analysts, managers, and executives without reformatting the work.",
  },
];

const monthlyBriefItems = [
  "Supplier and shipper identity",
  "Consignee, quantity, and formulation detail",
  "Landed-value context and CIF when available",
  "Monthly pivots for analyst review and dashboard delivery",
];

const methodSteps = [
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
    text: "Package recurring monitoring or deeper investigations in formats clients already know how to use.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section home-hero-section home-hero-section-refined">
        <div className="section-inner hero-grid home-hero-grid home-hero-grid-refined">
          <div className="hero-copy home-hero-copy home-hero-copy-refined">
            <span className="eyebrow">U.S. agricultural chemical intelligence</span>
            <h1>Monthly import intelligence that lands like a decision brief.</h1>
            <p className="hero-lead">
              Sentinel turns shipment records, supplier movement, and landed-value
              context into reporting that sourcing, compliance, and market teams can
              actually use.
            </p>
            <p className="home-hero-note">
              Focused coverage, named sources, and workflow-ready delivery instead of
              a generic trade-data portal.
            </p>
            <div className="button-row">
              <LinkButton href={siteConfig.primaryCta.href}>Request a demo</LinkButton>
              <LinkButton href="/product" variant="secondary">
                Explore the product
              </LinkButton>
            </div>
            <div className="home-hero-proof-grid">
              {heroHighlights.map((item) => (
                <article className="home-hero-proof" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="home-command-board">
            <div className="home-command-head">
              <div>
                <span className="small-label">Monthly intelligence brief</span>
                <h2>Signal first. Context close behind.</h2>
              </div>
              <p>
                Give teams a concise read on movement, coverage, and escalation-worthy
                change without forcing them to parse raw manifests.
              </p>
            </div>

            <div className="home-command-chart-grid">
              <SignalChart
                label="Movement signal"
                title="Import activity across the watchlist"
              />
              <SignalChart
                label="Coverage mix"
                title="Representative origin distribution"
                variant="bar"
              />
            </div>

            <div className="home-command-grid">
              <article className="home-command-card">
                <span className="small-label">Included every month</span>
                <strong>What the brief surfaces</strong>
                <ul className="home-command-list">
                  {monthlyBriefItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="home-command-card">
                <span className="small-label">Representative watchlist</span>
                <strong>Current molecule examples</strong>
                <div className="home-command-chip-row">
                  {moleculeExamples.slice(0, 8).map((molecule) => (
                    <span className="chip chip-dark" key={molecule}>
                      {molecule}
                    </span>
                  ))}
                </div>
              </article>

              <article className="home-command-card home-command-card-accent">
                <span className="small-label">Named source stack</span>
                <strong>Trade, customs, and regulatory context in one view</strong>
                <div className="home-command-tag-row">
                  {dataSources.slice(0, 5).map((source) => (
                    <span className="home-command-tag" key={source}>
                      {source}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-evidence home-proof-section">
        <div className="section-inner">
          <div className="home-evidence-band">
            {proofPoints.map((item) => (
              <article className="home-evidence-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-section-tight">
        <div className="section-inner home-value-layout">
          <div>
            <SectionHeading
              description="Sentinel is built around a specific category, a repeatable monthly brief, and a clear path to deeper investigation when the pattern changes."
              eyebrow="What Sentinel delivers"
              title="A tighter offer for teams that need signal, not sprawl"
            />
            <div className="home-question-panel">
              <span className="small-label">
                Across sourcing, compliance, finance, and leadership
              </span>
              <h3>The same four questions keep surfacing</h3>
              <ul className="detail-list home-question-list">
                {stakeholderQuestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="home-value-grid">
            {deliveryColumns.map((item) => (
              <article className="home-value-card" key={item.title}>
                <span className="small-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="detail-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint home-section-tight">
        <div className="section-inner">
          <SectionHeading
            description="Different stakeholders read the same monthly brief through different decision lenses, so relevance and trust have to be visible immediately."
            eyebrow="Decision lenses"
            title="Different roles, one common need for clarity"
          />
          <div className="home-persona-grid">
            {stakeholderPanels.map((item) => (
              <article className="home-persona-panel" key={item.title}>
                <span className="small-label">{item.role}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-section-tight">
        <div className="section-inner">
          <div className="home-method-shell">
            <div className="home-method-top">
              <SectionHeading
                description="Named inputs, molecule-level normalization, and working delivery make the reporting easier to trust and easier to use."
                eyebrow="Method"
                title="A disciplined source-to-brief workflow"
              />
              <div className="home-method-note">
                <span className="small-label">Why it matters</span>
                <p>
                  Confidence comes from pairing narrow category expertise with an
                  output people can actually share, review, and escalate.
                </p>
              </div>
            </div>

            <div className="home-method-grid-refined">
              {methodSteps.map((step) => (
                <article className="home-method-card" key={step.number}>
                  <span className="home-method-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="home-method-source-row">
              {dataSources.map((source) => (
                <span key={source}>{source}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="cta-band cta-band-dark">
            <div>
              <span className="eyebrow">Start with the decision</span>
              <h2>Show Sentinel the monitoring question behind the request.</h2>
              <p>
                Scope recurring monitoring, a sharper investigation, or a delivery
                model that fits the team reviewing the brief.
              </p>
            </div>
            <div className="button-row home-cta-actions">
              <LinkButton href="/demo">Request a demo</LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact Sentinel
              </LinkButton>
              <LinkButton href={siteConfig.loginHref} external variant="ghost">
                Existing client login
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
