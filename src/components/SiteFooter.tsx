import Link from "next/link";

import { siteConfig } from "@/content/site";

const footerLinks = [
  { label: "Product", href: "/product" },
  { label: "Method", href: "/methodology" },
  { label: "Engagement", href: "/pricing" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer sentinel-site-footer">
      <div className="section-inner sentinel-site-footer-inner">
        <div className="sentinel-site-footer-left">
          <Link aria-label={siteConfig.name} className="sentinel-site-footer-logo" href="/">
            {siteConfig.shortName}
            <span>.</span>
          </Link>
          <nav aria-label="Footer" className="sentinel-site-footer-links">
            {footerLinks.map((item) => (
              <Link className="footer-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="footer-link" href={siteConfig.dashboardPreviewHref}>
              Dashboard Preview
            </Link>
            <Link className="footer-link" href={siteConfig.reportsPreviewHref}>
              Reports Preview
            </Link>
          </nav>
        </div>

        <div className="sentinel-site-footer-right">{`© ${year} ${siteConfig.name}`}</div>
      </div>
    </footer>
  );
}
