import type { ReactNode } from "react";

type PageHeroFamily = "marketing" | "conversion" | "proof";
type PageHeroDensity = "tight" | "regular" | "spacious";
type PageHeroHeadingMeasure = "narrow" | "balanced" | "wide";
type PageHeroActionsMode = "buttons" | "compact";
type PageHeroSurfaceTone = "base" | "soft" | "proof";
type PageHeroVisualStyle = "single" | "paired" | "intake";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  visual?: ReactNode;
  theme?: "light" | "dark";
  visualMode?: PageHeroVisualStyle;
  family?: PageHeroFamily;
  density?: PageHeroDensity;
  headingMeasure?: PageHeroHeadingMeasure;
  actionsMode?: PageHeroActionsMode;
  surfaceTone?: PageHeroSurfaceTone;
  visualStyle?: PageHeroVisualStyle;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
  theme = "light",
  visualMode = "single",
  family = "marketing",
  density = "regular",
  headingMeasure = "balanced",
  actionsMode = "buttons",
  surfaceTone = "base",
  visualStyle,
}: PageHeroProps) {
  const resolvedVisualStyle = visualStyle ?? visualMode;

  return (
    <section
      className={`page-hero page-hero-${theme} page-hero-family-${family} page-hero-density-${density} page-hero-measure-${headingMeasure} page-hero-actions-${actionsMode} page-hero-surface-${surfaceTone}`}
    >
      <div className={`section-inner ${visual ? "page-hero-grid" : "narrow"}`}>
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? (
            <div className={`button-row page-hero-actions page-hero-actions-${actionsMode}`}>
              {actions}
            </div>
          ) : null}
        </div>
        {visual ? (
          <div
            className={`page-hero-visual page-hero-visual-${resolvedVisualStyle} page-hero-visual-family-${family}`}
          >
            {visual}
          </div>
        ) : null}
      </div>
    </section>
  );
}
