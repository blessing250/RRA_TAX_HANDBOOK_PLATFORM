import { notFound } from "next/navigation";

import { TopicDetailPage } from "../../../../components/handbook/TopicDetailPage";
import { ApiRequestError, getHandbookTopicBySlug } from "../../../../lib/api/handbook";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  try {
    const topic = await getHandbookTopicBySlug(locale, slug);

    return <TopicDetailPage locale={locale} topic={topic} />;
  } catch (error) {
    if (!(error instanceof ApiRequestError) || error.status === 404) {
      notFound();
    }

    notFound();
  }
}
