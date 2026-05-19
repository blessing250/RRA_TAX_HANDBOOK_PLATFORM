import { notFound } from "next/navigation"

import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookPageLayout } from "@/components/handbook/handbook-page-layout"
import { HandbookSection } from "@/components/handbook/handbook-section"
import { getLocalizedGeneralInformation } from "@/lib/content/handbook"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"

export default async function GeneralInformationPage({
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
  const topic = getLocalizedGeneralInformation(locale)

  if (!topic) {
    notFound()
  }

  return (
    <HandbookPageLayout
      title={topic.titleText}
      summary={topic.summaryText}
      breadcrumbs={[
        { label: dict.nav.home, href: `/${locale}` },
        { label: topic.titleText },
      ]}
    >
      <HandbookAccordion
        items={topic.sections.map((section) => ({
          value: section.id,
          title: section.titleText,
          content: <HandbookSection id={section.id} paragraphs={section.paragraphs} />,
        }))}
      />
    </HandbookPageLayout>
  )
}
