import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

const routes = [
  "",
  "/about",
  "/ai-roadmap",
  "/consultation",
  "/contact",
  "/dashboard",
  "/demo",
  "/methodology",
  "/privacy",
  "/pricing",
  "/product",
  "/reports",
  "/solutions",
  "/support",
  "/support-request",
  "/terms",
  "/thanks",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
