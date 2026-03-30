import Image from "next/image";

type HeroPhotoCardProps = {
  alt: string;
  src: string;
  label: string;
  title: string;
  note: string;
  priority?: boolean;
};

export function HeroPhotoCard({
  alt,
  src,
  label,
  title,
  note,
  priority = false,
}: HeroPhotoCardProps) {
  return (
    <div className="page-hero-figure page-hero-figure-compact page-hero-figure-photo">
      <Image alt={alt} fill priority={priority} sizes="(max-width: 1100px) 100vw, 34vw" src={src} />
      <div className="page-hero-figure-card page-hero-photo-card">
        <span className="small-label">{label}</span>
        <strong>{title}</strong>
        <p>{note}</p>
      </div>
    </div>
  );
}
