import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";

const primaryLinks = [
  { label: "Product", href: "/product" },
  { label: "Engagement", href: "/pricing" },
  { label: "Method", href: "/methodology" },
  { label: "Contact", href: "/contact" },
] as const;

const supportingLinks = [
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "AI Roadmap", href: "/ai-roadmap" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

const proofLinks = [
  { label: "Dashboard Preview", href: siteConfig.dashboardPreviewHref },
  { label: "Reports Preview", href: siteConfig.reportsPreviewHref },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer sentinel-site-footer">
      <div className="section-inner sentinel-site-footer-inner">
        <div className="sentinel-site-footer-left">
          <Link
            aria-label={siteConfig.name}
            className="brand-lockup footer-brand-lockup sentinel-site-footer-logo"
            href="/"
          >
            <Image
              alt=""
              aria-hidden="true"
              className="brand-logo footer-brand-logo"
              height={siteConfig.logo.height}
              sizes="(max-width: 700px) 132px, 168px"
              src={siteConfig.logo.src}
              width={siteConfig.logo.width}
            />
          </Link>

          <div className="sentinel-site-footer-groups">
            <nav aria-label="Primary footer" className="sentinel-site-footer-links">
              <span className="small-label">Main flow</span>
              {primaryLinks.map((item) => (
                <Link className="footer-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Supporting footer" className="sentinel-site-footer-links">
              <span className="small-label">Supporting</span>
              {supportingLinks.map((item) => (
                <Link className="footer-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Proof footer" className="sentinel-site-footer-links">
              <span className="small-label">Product proof</span>
              {proofLinks.map((item) => (
                <Link className="footer-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="sentinel-site-footer-right">{`© ${year} ${siteConfig.name}`}</div>
      </div>
    </footer>
  );
}
