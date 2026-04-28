import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import type { Locale } from "@/lib/i18n/config"

type TaxTopicCardProps = {
  lang: Locale
  readMore: string
  slug: string
  summary: string
  title: string
}

export function TaxTopicCard({
  lang,
  readMore,
  slug,
  summary,
  title,
}: TaxTopicCardProps) {
  return (
    <Link
      href={`/${lang}/taxes/${slug}`}
      className="group flex min-h-44 flex-col justify-between rounded-lg border bg-card p-5 text-card-foreground transition-colors hover:border-primary/40 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span>
        <span className="text-lg font-semibold leading-7">{title}</span>
        <span className="mt-3 block text-sm leading-6 text-muted-foreground">
          {summary}
        </span>
      </span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
        <span>{readMore}</span>
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
