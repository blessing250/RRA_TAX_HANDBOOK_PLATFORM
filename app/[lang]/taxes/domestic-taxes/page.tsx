import Link from "next/link"
import { notFound } from "next/navigation"

import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookPageLayout } from "@/components/handbook/handbook-page-layout"
import { HandbookSection } from "@/components/handbook/handbook-section"
import {
  localizedParagraphs,
  localizedText,
  getLocalizedTopic,
} from "@/lib/content/handbook"
import {
  centralGovernmentTaxSlugs,
  domesticTaxesPage,
  domesticTaxSections,
} from "@/lib/content/taxes/domestic-taxes"
import { localGovernmentTaxesPage } from "@/lib/content/taxes/local-government-taxes"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"

export default async function DomesticTaxesPage({
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
  const centralGovernmentTaxLinks = centralGovernmentTaxSlugs
    .map((slug) => getLocalizedTopic(slug, locale))
    .filter((topic) => topic !== undefined)

  return (
    <HandbookPageLayout
      title={localizedText(domesticTaxesPage.title, locale)}
      summary={<HandbookSection paragraphs={localizedParagraphs(domesticTaxesPage.summary, locale)} />}
      breadcrumbs={[
        { label: dict.nav.home, href: `/${locale}` },
        { label: dict.nav.taxes, href: `/${locale}/taxes` },
        { label: localizedText(domesticTaxesPage.title, locale) },
      ]}
      lastUpdated={localizedText(domesticTaxesPage.lastUpdated, locale)}
    >
      <h2 className="text-2xl font-bold tracking-normal text-rra-black sm:text-3xl">
        {localizedText(domesticTaxesPage.sectionTitle, locale)}
      </h2>

      <div className="mt-8">
        <HandbookAccordion
          variant="minimal"
          items={domesticTaxSections.map((section) => ({
            value: section.id,
            title: localizedText(section.title, locale),
            content:
              section.id === "central-government-taxes" ? (
                <div
                  id={section.id}
                  className="scroll-mt-28 space-y-3 text-sm leading-7 text-rra-black sm:text-base"
                >
                  <p>
                    {localizedText(section.text, locale)}{" "}
                    {centralGovernmentTaxLinks.map((topic, index) => (
                      <span key={topic.slug}>
                        <Link
                          href={`/${locale}/taxes/${topic.slug}`}
                          className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                        >
                          {topic.titleText}
                        </Link>
                        {index < centralGovernmentTaxLinks.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </p>
                </div>
              ) : (
                <div
                  id={section.id}
                  className="scroll-mt-28 space-y-3 text-sm leading-7 text-rra-black sm:text-base"
                >
                  <p>
                    {localizedText(section.text, locale)}{" "}
                    <Link
                      href={`/${locale}/taxes/local-government-taxes`}
                      className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                    >
                      {localizedText(localGovernmentTaxesPage.title, locale)}
                    </Link>
                    .
                  </p>
                </div>
              ),
          }))}
        />
      </div>
    </HandbookPageLayout>
  )
}
