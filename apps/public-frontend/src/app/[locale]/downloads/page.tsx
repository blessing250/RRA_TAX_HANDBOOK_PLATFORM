import Link from "next/link";

import { getDocuments } from "../../../lib/api/documents";

export default async function DownloadsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const documents = await getDocuments().catch(() => []);

  return (
    <div className="page-stack">
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Handbook</Link>
        <span className="bc-sep">/</span>
        <span>Downloads</span>
      </nav>

      <section className="page-intro">
        <span className="section-type">Documents</span>
        <h1 className="page-heading">Downloads</h1>
        <p className="page-subtitle">Published files and handbook documents come from the database.</p>
      </section>

      {documents.length ? (
        <section className="topic-list" aria-label="Downloads">
          {documents.map((document) => (
            <a key={document.id} className="topic-row" href={document.fileUrl}>
              <div>
                <strong>{document.title}</strong>
                <p>{document.fileName}</p>
              </div>
              <span>Download</span>
            </a>
          ))}
        </section>
      ) : (
        <section className="content-panel">
          <h2 className="section-h2">No downloads yet</h2>
          <p className="page-subtitle">Create document records in the CMS to feed this page.</p>
        </section>
      )}
    </div>
  );
}
