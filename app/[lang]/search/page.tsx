import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { PageHero } from "@/components/handbook/page-hero"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"

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

  return (
    <>
      <PageHero
        title={dict.common.search}
        summary="Search will be added as a static client-side index after the handbook content is migrated."
      />
      <Container className="py-8 sm:py-10">
        <HandbookBreadcrumb
          items={[
            { label: dict.nav.home, href: `/${locale}` },
            { label: dict.common.search },
          ]}
        />
      </Container>
    </>
  )
}
