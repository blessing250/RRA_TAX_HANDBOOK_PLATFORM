import Link from "next/link";

import { getFaqs } from "../../../lib/api/faqs";

export default async function FaqsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const faqs = await getFaqs(locale).catch(() => []);

  return (
    <div className="page-stack">
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Handbook</Link>
        <span className="bc-sep">/</span>
        <span>FAQs</span>
      </nav>

      <section className="page-intro">
        <span className="section-type">Reference content</span>
        <h1 className="page-heading">FAQs</h1>
        <p className="page-subtitle">Frequently asked questions are loaded from the CMS database.</p>
      </section>

      {faqs.length ? (
        <section className="content-panel faq-list" aria-label="Frequently asked questions">
          {faqs.map((faq) => (
            <article key={faq.id} className="faq-item">
              <h2 className="section-h2">{faq.question}</h2>
              <p className="page-subtitle">{faq.answer}</p>
            </article>
          ))}
        </section>
      ) : (
        <section className="content-panel">
          <h2 className="section-h2">No FAQs yet</h2>
          <p className="page-subtitle">Create FAQ records in the CMS to feed this page.</p>
        </section>
      )}
    </div>
  );
}
