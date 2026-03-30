import { LinkButton } from "@/components/LinkButton";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="section-inner narrow thanks-panel">
        <span className="eyebrow">Not found</span>
        <h1>This page is not available.</h1>
        <p>
          Use the main site navigation to return to Sentinel&apos;s product,
          methodology, solutions, or contact pages.
        </p>
        <div className="button-row">
          <LinkButton href="/">Back to home</LinkButton>
        </div>
      </div>
    </section>
  );
}
