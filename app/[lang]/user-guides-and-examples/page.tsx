import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { PageHero } from "@/components/handbook/page-hero"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"

export default async function UserGuidesPage({
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
        title="User guides and examples"
        summary="Find practical guidance, examples, and step-by-step support for common tax processes."
      />
      <Container className="py-8 sm:py-10">
        <HandbookBreadcrumb
          items={[
            { label: dict.nav.home, href: `/${locale}` },
            { label: "User guides and examples" },
          ]}
        />
      </Container>
    </>
  )
}
