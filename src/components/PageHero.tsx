import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  visual?: ReactNode;
  theme?: "light" | "dark";
  visualMode?: "single" | "paired" | "intake";
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
  theme = "light",
  visualMode = "single",
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${theme}`}>
      <div className={`section-inner ${visual ? "page-hero-grid" : "narrow"}`}>
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className="button-row">{actions}</div> : null}
        </div>
        {visual ? (
          <div className={`page-hero-visual page-hero-visual-${visualMode}`}>
            {visual}
          </div>
        ) : null}
      </div>
    </section>
  );
}
