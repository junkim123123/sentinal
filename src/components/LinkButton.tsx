import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
  onClick?: () => void;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
  onClick,
}: LinkButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();

  if (external || download) {
    return (
      <a
        className={classes}
        download={download}
        href={href}
        onClick={onClick}
        rel="noreferrer"
        target={external ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
