import { LinkButton } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import {
  companyDetailCards,
  ctaDirectory,
  dataSources,
  homeCategoryProof,
  moleculeCategoryGroups,
  pricingBuckets,
  proofPoints,
  verticalIntegrationCards,
} from "@/content/site";

const heroWatchlist = [
  { molecule: "Glyphosate", value: "$1.22 CIF", delta: "+4.2%", direction: "up" },
  { molecule: "Metformin HCl", value: "$3.08 CIF", delta: "+2.7%", direction: "up" },
  { molecule: "Urea", value: "$0.51 CIF", delta: "+6.3%", direction: "up" },
  { molecule: "Imidacloprid", value: "$3.41 CIF", delta: "0.0%", direction: "flat" },
] as const;

const deliveryCards = [
  {
    number: "01",
    title: "Company and supplier drill-down",
    text: "Move from a watchlist signal into importer, supplier, route, and landed-value context without rebuilding the question from scratch.",
  },
  {
    number: "02",
    title: "Named-source signal with human review",
    text: "Sentinel combines named trade and regulatory inputs with analyst review so the output feels closer to a working brief than a raw data portal.",
  },
  {
    number: "03",
    title: "Files built for real circulation",
    text: "Excel, Tableau, and briefing-ready delivery help commercial, compliance, and strategy teams work from the same reviewed signal.",
  },
] as const;

const priorityPathCards = [
  {
    label: ctaDirectory.demo.label,
    href: ctaDirectory.demo.href,
    description: "Best when the team wants to validate workflow, sample depth, and what Sentinel will actually show in a session.",
  },
  {
    label: ctaDirectory.contact.label,
    href: ctaDirectory.contact.href,
    description: "Best when the commercial need is clear but the right next motion still needs to be routed.",
  },
  {
    label: ctaDirectory.consultation.label,
    href: ctaDirectory.consultation.href,
    description: "Best when leadership framing, stakeholder alignment, or advisory scope matters more than a product tour.",
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
              <em className="sentinel-home-name">Sentinel</em> gives buying teams a reviewed
              view of strategic chemical imports.
            </h1>
            <p className="sentinel-home-desc">
              Start with agrochemical monitoring, then extend the same molecule-first
              discipline into pharma and fertilizer lanes when the category surface
              matters. Sentinel combines named sources, analyst review, and
              working-file delivery so teams can move from raw movement to a usable
              commercial signal faster.
            </p>
            <div className="sentinel-home-quicklist" aria-label="Key trust cues">
              <span className="sentinel-home-quickitem">Named sources + analyst review</span>
              <span className="sentinel-home-quickitem">Company and supplier drill-down</span>
              <span className="sentinel-home-quickitem">Excel, Tableau, and briefing delivery</span>
            </div>
            <div className="sentinel-home-actions">
              <LinkButton href={ctaDirectory.demo.href}>{ctaDirectory.demo.label}</LinkButton>
              <LinkButton href={ctaDirectory.contact.href} variant="secondary">
                {ctaDirectory.contact.label}
              </LinkButton>
              <LinkButton href={ctaDirectory.consultation.href} variant="ghost">
                {ctaDirectory.consultation.label}
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

      <section className="sentinel-section" id="company-detail">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Operating view</span>
            <h2 className="sentinel-section-title">
              See what companies are doing, what they are dealing with, and what to
              escalate next.
            </h2>
            <p className="sentinel-section-desc">
              The product promise is clearest when buyers can see company drill-down,
              molecule depth, workflow-ready output, and direct follow-through in the
              same pass.
            </p>
          </div>

          <div className="sentinel-company-grid">
            {companyDetailCards.map((item) => (
              <article className="sentinel-company-card" key={item.title}>
                {item.label ? <span className="sentinel-card-label">{item.label}</span> : null}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section sentinel-section-dark" id="product">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Trust model</span>
            <h2 className="sentinel-section-title">
              Source records become a reviewed operating signal before they reach the team.
            </h2>
            <p className="sentinel-section-desc">
              Sentinel feels stronger when the site makes its method visible: named
              inputs, analyst review, and files designed for actual circulation.
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

      <section className="sentinel-section" id="molecules">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Category coverage</span>
            <h2 className="sentinel-section-title">
              Keep agrochemical depth while showing where adjacent category coverage can fit.
            </h2>
            <p className="sentinel-section-desc">
              Buyers should be able to see that agrochemical remains the deepest lane,
              while pharma and fertilizer are treated as credible adjacent category
              surfaces inside the same molecule-first structure.
            </p>
          </div>

          <div className="sentinel-molecule-grid">
            {moleculeCategoryGroups.map((group) => (
              <article className="sentinel-molecule-card" key={group.title}>
                <span className="sentinel-card-label">Category view</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="sentinel-molecule-scroll" role="list" aria-label={group.title}>
                  {group.bullets.map((item) => (
                    <span className="sentinel-molecule-chip" key={item} role="listitem">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sentinel-section sentinel-section-dark" id="vertical-integration">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Method and delivery</span>
            <h2 className="sentinel-section-title">
              Sentinel connects source records to working files, briefings, and direct follow-up.
            </h2>
            <p className="sentinel-section-desc">
              The story is stronger when buyers can see the chain clearly: source,
              normalize, deliver, and stay close when a signal turns into a bigger
              question.
            </p>
          </div>

          <div className="sentinel-vertical-grid">
            {verticalIntegrationCards.map((item) => (
              <article className="sentinel-vertical-card" key={item.title}>
                {item.label ? <span className="sentinel-card-label">{item.label}</span> : null}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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

      <section className="sentinel-section sentinel-engagement-section" id="pricing-model">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Engagement models</span>
            <h2 className="sentinel-section-title">Scope grows with category breadth, cadence, and stakeholder complexity.</h2>
            <p className="sentinel-section-desc">
              Sentinel prices around molecule breadth, investigative depth, delivery
              cadence, and how many people need to trust and circulate the output.
            </p>
          </div>

          <div className="sentinel-tier-row">
            {pricingBuckets.map((item, index) => (
              <article
                className={`sentinel-tier-card ${index === 1 ? "is-featured" : ""}`}
                key={item.name}
              >
                <h3 className="sentinel-tier-name">{item.name}</h3>
                <p className="sentinel-tier-fit">{item.fit}</p>
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
          <SectionHeading
            align="center"
            eyebrow="Choose the next move"
            title="Use the path that matches what your team is trying to decide right now"
            description="Sentinel keeps demo, commercial contact, and consultation separate so the website can route product validation, intake, and strategic scoping more cleanly."
          />

          <div className="sentinel-access-grid">
            {priorityPathCards.map((item, index) => (
              <article
                className={`sentinel-access-card ${index === 0 ? "is-featured" : ""}`}
                key={item.label}
              >
                <span className="sentinel-card-label">{item.label}</span>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
                <div className="sentinel-access-action">
                  <LinkButton href={item.href} variant={index === 0 ? "primary" : "secondary"}>
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
