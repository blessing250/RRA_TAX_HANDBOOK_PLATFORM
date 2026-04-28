import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { PageHero } from "@/components/handbook/page-hero"
import { TaxTopicGrid } from "@/components/handbook/tax-topic-grid"
import { getLocalizedTopics } from "@/lib/content/handbook"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"

export default async function TaxesPage({
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
  const topics = getLocalizedTopics(locale)

  return (
    <>
      <PageHero title={dict.taxes.title} summary={dict.taxes.summary} />
      <Container className="py-8 sm:py-10">
        <div className="mb-6">
          <HandbookBreadcrumb
            items={[
              { label: dict.nav.home, href: `/${locale}` },
              { label: dict.nav.taxes },
            ]}
          />
        </div>
        <TaxTopicGrid
          lang={locale}
          readMore={dict.common.readMore}
          topics={topics}
        />
      </Container>
    </>
  )
}
