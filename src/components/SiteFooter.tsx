import Image from "next/image";
import Link from "next/link";

import { NewsletterForm } from "@/components/NewsletterForm";
import { navItems, proofPoints, siteConfig } from "@/content/site";

export function SiteFooter() {
  const exploreLinks = navItems.filter((item) =>
    ["/product", "/solutions", "/pricing", "/methodology"].includes(item.href),
  );
  const startLinks = [
    { label: "Demo", href: "/demo" },
    { label: "Consultation", href: "/consultation" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <Link aria-label={siteConfig.name} className="brand-lockup" href="/">
            <Image
              alt={siteConfig.name}
              className="brand-logo"
              height={52}
              src="/brand/sentinel-logo-white.png"
              width={190}
            />
          </Link>
          <p>{siteConfig.description}</p>
          <span className="footer-value">
            Focused trade intelligence for teams that need usable reporting, not
            noisy data access.
          </span>
        </div>
        <div className="footer-column">
          <span className="footer-title">Explore</span>
          {exploreLinks.map((item) => (
            <Link className="footer-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-title">Start here</span>
          {startLinks.map((item) => (
            <Link className="footer-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-title">Product at a glance</span>
          {proofPoints.slice(0, 3).map((item) => (
            <p className="footer-proof" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </p>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-title">Contact and access</span>
          <a
            className="footer-link"
            href={siteConfig.loginHref}
            rel="noreferrer"
            target="_blank"
          >
            Log in to ShareFile
          </a>
          <Link className="footer-link" href="/support">
            Customer support
          </Link>
          <Link className="footer-link" href="/support-request">
            Request support
          </Link>
          <Link className="footer-link" href="/ai-roadmap">
            AI roadmap
          </Link>
        </div>
        <div className="footer-column">
          <span className="footer-title">Legal</span>
          <Link className="footer-link" href="/privacy">
            Privacy
          </Link>
          <Link className="footer-link" href="/terms">
            Terms
          </Link>
        </div>
        <div className="footer-column footer-newsletter">
          <span className="footer-title">Newsletter</span>
          <p className="footer-news-note">
            Occasional product, support, and market updates from Sentinel.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}
