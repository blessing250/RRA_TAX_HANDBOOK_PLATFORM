import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { HandbookSection } from "@/components/handbook/handbook-section"
import { PageHero } from "@/components/handbook/page-hero"
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
    <>
      <PageHero title={topic.titleText} summary={topic.summaryText} />
      <Container className="py-8 sm:py-10">
        <div className="mb-8">
          <HandbookBreadcrumb
            items={[
              { label: dict.nav.home, href: `/${locale}` },
              { label: topic.titleText },
            ]}
          />
        </div>

        <HandbookAccordion
          items={topic.sections.map((section) => ({
            value: section.id,
            title: section.titleText,
            content: (
              <HandbookSection id={section.id} paragraphs={section.paragraphs} />
            ),
          }))}
        />
      </Container>
    </>
  )
}
