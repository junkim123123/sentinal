type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  measure?: "narrow" | "balanced" | "wide";
  spacing?: "tight" | "normal" | "roomy";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  measure = "balanced",
  spacing = "normal",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading-${align} section-heading-size-${size} section-heading-measure-${measure} section-heading-spacing-${spacing}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
