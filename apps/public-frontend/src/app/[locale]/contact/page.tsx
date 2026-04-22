import Link from "next/link";
import { notFound } from "next/navigation";

import { ApiRequestError, getHandbookSectionBySlug } from "../../../lib/api/handbook";
import { routes } from "../../../lib/constants/routes";

function getContactSectionSlug(locale: string) {
  return locale === "rw" ? "twandikire" : "contact";
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  try {
    const section = await getHandbookSectionBySlug(locale, getContactSectionSlug(locale));

    return (
      <div className="page-stack">
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <Link href={`/${locale}`}>Handbook</Link>
          <span className="bc-sep">/</span>
          <span>{section.name}</span>
        </nav>

        <section className="page-intro">
          <span className="section-type">{section.type.replaceAll("_", " ")}</span>
          <h1 className="page-heading">{section.name}</h1>
          <p className="page-subtitle">
            {section.summary || "Find official RRA contact and support information."}
          </p>
        </section>

        {section.topics.length ? (
          <section className="home-grid contact-grid" aria-label="Contact options">
            {section.topics.map((topic) => (
              <article key={topic.id} className="home-card">
                <Link className="home-card-title-row" href={routes.topic(locale, topic.slug)}>
                  <h2 className="home-card-title">{topic.title}</h2>
                  <span className="home-card-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
                <p className="home-card-desc">
                  {topic.summary || "Open this contact page for more details."}
                </p>
                <Link className="home-card-link" href={routes.topic(locale, topic.slug)}>
                  Open contact topic
                </Link>
              </article>
            ))}
          </section>
        ) : (
          <section className="content-panel">
            <h2 className="section-h2">Contact content unavailable</h2>
            <p className="page-subtitle">
              Contact details have not been published yet. Please check again later.
            </p>
          </section>
        )}
      </div>
    );
  } catch (error) {
    if (!(error instanceof ApiRequestError) || error.status === 404) {
      notFound();
    }

    throw error;
  }
}
