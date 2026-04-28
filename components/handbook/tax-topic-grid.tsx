import { TaxTopicCard } from "@/components/handbook/tax-topic-card"
import type { Locale } from "@/lib/i18n/config"

type TaxTopicGridProps = {
  lang: Locale
  readMore: string
  topics: {
    slug: string
    summaryText: string
    titleText: string
  }[]
}

export function TaxTopicGrid({ lang, readMore, topics }: TaxTopicGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {topics.map((topic) => (
        <TaxTopicCard
          key={topic.slug}
          lang={lang}
          readMore={readMore}
          slug={topic.slug}
          summary={topic.summaryText}
          title={topic.titleText}
        />
      ))}
    </div>
  )
}
