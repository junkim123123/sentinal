import type { ReactNode } from "react";

type PageHeroVariant = "home" | "proof" | "method" | "contact";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  visual?: ReactNode;
  variant?: PageHeroVariant;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
  variant = "method",
}: PageHeroProps) {
  const hasVisual = Boolean(visual);

  return (
    <section
      className={`page-hero page-hero-light page-hero-variant-${variant} ${
        hasVisual ? "page-hero-has-visual" : "page-hero-no-visual"
      }`}
    >
      <div className={`section-inner ${hasVisual ? "page-hero-grid" : "page-hero-grid page-hero-grid-placeholder"}`}>
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className="button-row page-hero-actions">{actions}</div> : null}
        </div>
        <div
          aria-hidden={hasVisual ? undefined : true}
          className={`page-hero-visual ${hasVisual ? "" : "page-hero-visual-placeholder"}`.trim()}
        >
          {hasVisual ? (
            visual
          ) : (
            <div className="page-hero-placeholder-shell">
              <span className="page-hero-placeholder-kicker" />
              <span className="page-hero-placeholder-line page-hero-placeholder-line-strong" />
              <span className="page-hero-placeholder-line" />
              <div className="page-hero-placeholder-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
