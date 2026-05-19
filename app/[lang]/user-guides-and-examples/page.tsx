import { notFound } from "next/navigation"

import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookPageLayout } from "@/components/handbook/handbook-page-layout"
import { HandbookSection } from "@/components/handbook/handbook-section"
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
    <HandbookPageLayout
      title={localizedText(userGuidesPage.title, locale)}
      summary={localizedText(userGuidesPage.summary, locale)}
      breadcrumbs={[
        { label: dict.nav.home, href: `/${locale}` },
        { label: localizedText(userGuidesPage.title, locale) },
      ]}
      lastUpdated={localizedText(userGuidesPage.lastUpdated, locale)}
    >
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
    </HandbookPageLayout>
  )
}
