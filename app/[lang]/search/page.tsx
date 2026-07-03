import { notFound } from "next/navigation"

import { HandbookPageLayout } from "@/components/handbook/handbook-page-layout"
import { HandbookSearch } from "@/components/handbook/handbook-search"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"
import { getHandbookSearchIndex } from "@/lib/search/handbook-search"

export default async function SearchPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const locale = lang as Locale
  const dict = getDictionary(locale)
  const searchIndex = getHandbookSearchIndex(locale)

  return (
    <>
      <PageHero
        title={dict.common.search}
        summary="Search handbook topics, tax types, declaration guidance, rates, penalties, and taxpayer support references."
        breadcrumb={
          <HandbookBreadcrumb
            items={[
              { label: dict.nav.home, href: `/${locale}` },
              { label: dict.common.search },
            ]}
          />
        }
      />
      <Container className="py-8 sm:py-10">
        <HandbookSearch
          items={searchIndex}
          labels={{
            search: dict.common.search,
            placeholder: dict.common.search,
            noResults: "No matching handbook topics were found.",
            resultCountSingular: "1 result found",
            resultCountPlural: "results found",
          }}
        />
      </Container>
    </>
  )
}
