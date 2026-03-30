import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}: LinkButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        rel="noreferrer"
        target="_blank"
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
