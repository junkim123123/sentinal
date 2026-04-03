"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { LinkButton } from "@/components/LinkButton";
import { ctaDirectory, navItems, siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="section-inner site-header-inner">
        <Link
          aria-label={siteConfig.name}
          className="sentinel-header-logo"
          href="/"
          onClick={closeMenu}
        >
          {siteConfig.shortName}
          <span>.</span>
        </Link>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="nav-toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>

        <div className={`site-nav-menu ${open ? "is-open" : ""}`}>
          <nav aria-label="Primary" className="site-nav">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`site-nav-link ${isActive ? "is-active" : ""}`}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header-actions">
            <LinkButton className="site-header-cta" href={ctaDirectory.contact.href} onClick={closeMenu}>
              {ctaDirectory.contact.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
}
