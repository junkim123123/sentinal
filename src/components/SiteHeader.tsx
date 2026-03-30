"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { LinkButton } from "@/components/LinkButton";
import { navItems, siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="section-inner site-header-inner">
        <Link
          aria-label={siteConfig.name}
          className="brand-lockup"
          href="/"
          onClick={closeMenu}
        >
          <Image
            alt={siteConfig.name}
            className="brand-logo"
            height={56}
            priority
            src="/brand/sentinel-logo-white.png"
            width={210}
          />
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
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
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
            <LinkButton href={siteConfig.primaryCta.href} onClick={closeMenu}>
              Request a demo
            </LinkButton>
            <LinkButton
              className="login-button"
              external
              href={siteConfig.loginHref}
              onClick={closeMenu}
              variant="ghost"
            >
              Client login
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
}
