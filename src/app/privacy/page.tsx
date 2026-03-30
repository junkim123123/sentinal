import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Sentinel Imports website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        description="This placeholder privacy page gives the footer a real legal destination and can be expanded with client-approved policy text."
        eyebrow="Privacy"
        title="Privacy information for website visitors and contact requests"
      />
      <section className="section">
        <div className="section-inner narrow">
          <div className="stacked-copy">
            <p className="statement">
              Website forms are used to collect contact information required to
              respond to inquiries, scope projects, and share updates when users
              explicitly ask for them.
            </p>
            <p className="statement">
              Sentinel can replace this placeholder with approved legal language
              whenever a final privacy policy is available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
