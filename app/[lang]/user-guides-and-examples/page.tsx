import { notFound } from "next/navigation"

import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { Container } from "@/components/layout/container"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { HandbookSection } from "@/components/handbook/handbook-section"
import { PageHero } from "@/components/handbook/page-hero"
import { localizedParagraphs, localizedText } from "@/lib/content/handbook"
import { userGuideSections, userGuidesPage } from "@/lib/content/user-guides"
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
        title={localizedText(userGuidesPage.title, locale)}
        summary={localizedText(userGuidesPage.summary, locale)}
      />
      <Container className="py-8 sm:py-10 lg:max-w-5xl">
        <article className="mx-auto max-w-3xl">
          <div className="mb-10">
            <HandbookBreadcrumb
              items={[
                { label: dict.nav.home, href: `/${locale}` },
                { label: localizedText(userGuidesPage.title, locale) },
              ]}
            />
          </div>

          <HandbookAccordion
            variant="minimal"
            items={userGuideSections.map((section) => ({
              value: section.id,
              title: localizedText(section.title, locale),
              content: (
                <HandbookSection
                  id={section.id}
                  paragraphs={localizedParagraphs(section.content, locale)}
                />
              ),
            }))}
          />

          <p className="mt-16 text-sm text-rra-black">
            {localizedText(userGuidesPage.lastUpdated, locale)}
          </p>
        </article>
      </Container>
    </>
  )
}
