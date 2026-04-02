import { LinkButton } from "@/components/LinkButton";
import {
  accessPathCards,
  companyDetailCards,
  dataSources,
  moleculeCategoryGroups,
  pricingBuckets,
  proofPoints,
  siteConfig,
  verticalIntegrationCards,
} from "@/content/site";

const sampleDataHref = "/samples/sentinel-molecule-depth-sample.csv";

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
    title: "Company activity",
    text: "See what companies are importing, sourcing, and routing across the molecules your team follows.",
  },
  {
    number: "02",
    title: "Molecule depth",
    text: "Inspect formulation, quantity, landed value, freight, insurance, and CIF context in one working view.",
  },
  {
    number: "03",
    title: "Direct follow-through",
    text: "Move from recurring monitoring into custom investigation when a supplier, competitor, or route needs a deeper read.",
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
              <em className="sentinel-home-name">Sentinel</em> makes molecule-level import
              intelligence usable.
            </h1>
            <p className="sentinel-home-desc">
              Track what companies are doing, what they are dealing with, and how
              supplier, route, and landed-value pressure is changing across
              agrochemical, pharma, and fertilizer portfolios.
            </p>
            <div className="sentinel-home-quicklist" aria-label="Key highlights">
              <span className="sentinel-home-quickitem">Company drill-down</span>
              <span className="sentinel-home-quickitem">Downloadable sample depth</span>
              <span className="sentinel-home-quickitem">Direct team access</span>
            </div>
            <div className="sentinel-home-actions">
              <LinkButton href={siteConfig.primaryCta.href}>Request a private demo</LinkButton>
              <LinkButton download href={sampleDataHref} variant="ghost">
                Download free sample
              </LinkButton>
              <LinkButton href="/contact" variant="ghost">
                Contact the team
              </LinkButton>
            </div>
          </div>

          <div className="sentinel-home-data">
            <div className="sentinel-data-terminal">
              <div className="sentinel-data-header">
                <span>Illustrative molecule depth - Apr 2026</span>
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
                <span>Sample CSV available</span>
                <span>Drill down by molecule</span>
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

      <section className="sentinel-section" id="company-detail">
        <div className="section-inner">
          <div className="sentinel-section-intro">
            <span className="sentinel-section-tag">Company detail</span>
            <h2 className="sentinel-section-title">
              See what companies are doing and what they are dealing with.
            </h2>
            <p className="sentinel-section-desc">
              The site now makes the core buyer promise clearer: company detail,
              molecule depth, downloadable working data, and direct access to the
              Sentinel team.
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
            <span className="sentinel-section-tag">Product</span>
            <h2 className="sentinel-section-title">
              What Sentinel Imports delivers at the company and molecule level.
            </h2>
            <p className="sentinel-section-desc">
              Built around real import records, a cleaner operating model, and output
              that feels closer to a working file than a generic trade-data platform.
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
            <span className="sentinel-section-tag">Molecule groups</span>
            <h2 className="sentinel-section-title">
              Group molecules by agrochemical, pharma, and fertilizers.
            </h2>
            <p className="sentinel-section-desc">
              Category views can be configured into focused watchlists so clients can
              scroll through the molecules that matter most without digging through a
              generic data dump.
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
            <span className="sentinel-section-tag">Vertical integration</span>
            <h2 className="sentinel-section-title">
              Sentinel Imports connects source records to decision-ready delivery.
            </h2>
            <p className="sentinel-section-desc">
              The vertical integration story is simple: source the records, normalize
              the entities, integrate the output into working files, and stay close to
              the client when the signal changes.
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
            <span className="sentinel-section-tag">Pricing model</span>
            <h2 className="sentinel-section-title">Scope-based pricing, not a public rate card.</h2>
            <p className="sentinel-section-desc">
              Sentinel prices around molecule coverage, investigative depth, delivery
              expectations, and the level of direct support required by the team.
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
          <span className="sentinel-section-tag">Start here</span>
          <h2 className="sentinel-section-title">
            Request a demo, download a free sample, or contact the team directly.
          </h2>
          <p className="sentinel-section-desc">
            Buyers expect to see the workflow, inspect sample depth, and reach a real
            person before committing to a broader intelligence scope.
          </p>

          <div className="sentinel-access-grid">
            {accessPathCards.map((item) => (
              <article
                className={`sentinel-access-card ${
                  item.label === "Free sample" ? "is-featured" : ""
                }`}
                key={item.title}
              >
                {item.label ? <span className="sentinel-card-label">{item.label}</span> : null}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="sentinel-access-action">
                  {item.label === "Request a demo" ? (
                    <LinkButton href="/demo">Request a private demo</LinkButton>
                  ) : null}
                  {item.label === "Free sample" ? (
                    <LinkButton download href={sampleDataHref}>
                      Download free sample
                    </LinkButton>
                  ) : null}
                  {item.label === "Direct contact" ? (
                    <LinkButton href="/contact">Contact the team</LinkButton>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
