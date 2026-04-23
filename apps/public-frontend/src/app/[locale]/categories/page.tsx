import Link from "next/link";

import { getCategories } from "../../../lib/api/categories";

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const categories = await getCategories(locale).catch(() => []);

  return (
    <div className="page-stack">
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Handbook</Link>
        <span className="bc-sep">/</span>
        <span>Categories</span>
      </nav>

      <section className="page-intro">
        <span className="section-type">Reference content</span>
        <h1 className="page-heading">Categories</h1>
        <p className="page-subtitle">
          Public categories are loaded from database-backed category records.
        </p>
      </section>

      {categories.length ? (
        <section className="topic-list" aria-label="Categories">
          {categories.map((category) => (
            <article key={category.id} className="topic-row">
              <div>
                <strong>{category.name}</strong>
                <p>Slug: {category.slug}</p>
              </div>
              <span>{category.language}</span>
            </article>
          ))}
        </section>
      ) : (
        <section className="content-panel">
          <h2 className="section-h2">No categories yet</h2>
          <p className="page-subtitle">Create categories in the CMS to feed this page.</p>
        </section>
      )}
    </div>
  );
}
