import { LinkButton } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import {
  companyDetailCards,
  homeCategoryProof,
  verticalIntegrationCards,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="sentinel-home-hero">
        <div className="sentinel-home-grid-bg" />
        <div className="sentinel-home-glow" />
        <div className="section-inner sentinel-home-hero-inner">
          <div className="sentinel-home-content">
            <div className="sentinel-home-tag">Private import intelligence</div>
            <h1>Reviewed import intelligence for buying teams.</h1>
            <p className="sentinel-home-desc">
              Start with agrochemical monitoring. Extend into adjacent chemical lanes only
              when the scope is real and the signal has to travel.
            </p>
            <div className="sentinel-home-actions">
              <LinkButton href="/contact">Contact</LinkButton>
              <LinkButton href="/product" variant="secondary">
                View Product
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-evidence home-proof-section sentinel-home-proof-cues">
        <div className="section-inner">
          <SectionHeading
            eyebrow="What it is"
            title="Reviewed import intelligence for strategic chemical teams"
            description="Sentinel stays narrow enough to be usable while still showing where adjacent category coverage fits."
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

      <section className="sentinel-section section-tint home-trust-section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why trust it"
            title="The method stays visible from source to delivery"
            description="Named inputs, visible review, and client-ready output make the trust model easy to inspect."
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

      <section className="sentinel-section home-operating-section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="What the product looks like"
            title="The deliverable is visible early"
            description="The site should show company detail, signal depth, and working files without making buyers imagine the output."
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
          <div className="button-row page-button-row home-proof-action">
            <LinkButton href="/product" variant="secondary">
              Review product proof
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
