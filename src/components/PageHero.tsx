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
  return (
    <section
      className={`page-hero page-hero-light page-hero-variant-${variant} ${
        visual ? "page-hero-has-visual" : "page-hero-no-visual"
      }`}
    >
      <div className={`section-inner ${visual ? "page-hero-grid" : "page-hero-grid-single"}`}>
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className="button-row page-hero-actions">{actions}</div> : null}
        </div>
        {visual ? <div className="page-hero-visual">{visual}</div> : null}
      </div>
    </section>
  );
}
