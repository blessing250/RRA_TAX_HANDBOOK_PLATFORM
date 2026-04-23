import Link from "next/link";

import { getArticles } from "../../../lib/api/articles";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const articles = await getArticles(locale).catch(() => []);

  return (
    <div className="page-stack">
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Handbook</Link>
        <span className="bc-sep">/</span>
        <span>Articles</span>
      </nav>

      <section className="page-intro">
        <span className="section-type">Reference content</span>
        <h1 className="page-heading">Articles</h1>
        <p className="page-subtitle">
          Published articles from the content database will appear here.
        </p>
      </section>

      {articles.length ? (
        <section className="topic-list" aria-label="Published articles">
          {articles.map((article) => (
            <article key={article.id} className="topic-row">
              <div>
                <strong>{article.title}</strong>
                <p>Status: {article.status}</p>
              </div>
              <span>{article.language}</span>
            </article>
          ))}
        </section>
      ) : (
        <section className="content-panel">
          <h2 className="section-h2">No published articles yet</h2>
          <p className="page-subtitle">Create and publish articles in the CMS to feed this page.</p>
        </section>
      )}
    </div>
  );
}
