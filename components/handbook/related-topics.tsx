import { TaxTopicGrid } from "@/components/handbook/tax-topic-grid"
import type { Locale } from "@/lib/i18n/config"

type RelatedTopicsProps = {
  heading: string
  lang: Locale
  readMore: string
  topics: {
    slug: string
    summaryText: string
    titleText: string
  }[]
}

export function RelatedTopics({
  heading,
  lang,
  readMore,
  topics,
}: RelatedTopicsProps) {
  if (topics.length === 0) {
    return null
  }

  return (
    <section className="border-t pt-8">
      <h2 className="mb-4 text-xl font-semibold">{heading}</h2>
      <TaxTopicGrid lang={lang} readMore={readMore} topics={topics} />
    </section>
  )
}
