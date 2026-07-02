import { TaxTopicCard } from "@/components/handbook/tax-topic-card"
import type { Locale } from "@/lib/i18n/config"

type TaxTopicGridProps = {
  lang: Locale
  topics: {
    slug: string
    summaryText: string
    titleText: string
  }[]
}

export function TaxTopicGrid({ lang, topics }: TaxTopicGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {topics.map((topic) => (
        <TaxTopicCard
          key={topic.slug}
          lang={lang}
          slug={topic.slug}
          summary={topic.summaryText}
          title={topic.titleText}
        />
      ))}
    </div>
  )
}
