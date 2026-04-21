import Link from "next/link"
import { notFound } from "next/navigation"

import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { Container } from "@/components/layout/container"
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
    <Container className="py-12 sm:py-16 lg:max-w-4xl">
      <article className="mx-auto max-w-2xl">
        <div className="mb-10">
          <HandbookBreadcrumb
            items={[
              { label: dict.nav.home, href: `/${locale}` },
              { label: dict.nav.taxes, href: `/${locale}/taxes` },
              { label: localizedText(domesticTaxesPage.title, locale) },
            ]}
          />
        </div>

        <h1 className="text-balance text-3xl font-bold tracking-normal text-rra-black sm:text-4xl">
          {localizedText(domesticTaxesPage.title, locale)}
        </h1>

        <div className="mt-10 max-w-xl space-y-4 text-sm leading-8 text-rra-black">
          {localizedParagraphs(domesticTaxesPage.summary, locale).map(
            (paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            )
          )}
        </div>

        <h2 className="mt-8 text-2xl font-bold tracking-normal text-rra-black sm:text-3xl">
          {localizedText(domesticTaxesPage.sectionTitle, locale)}
        </h2>

        <div className="mt-8 max-w-xl">
          <HandbookAccordion
            variant="minimal"
            items={domesticTaxSections.map((section) => ({
              value: section.id,
              title: localizedText(section.title, locale),
              content:
                section.id === "central-government-taxes" ? (
                  <p
                    id={section.id}
                    className="scroll-mt-28 text-sm leading-7 text-rra-black sm:text-base"
                  >
                    {localizedText(section.text, locale)}{" "}
                    {centralGovernmentTaxLinks.map((topic, index) => (
                      <span key={topic.slug}>
                        <Link
                          href={`/${locale}/taxes/${topic.slug}`}
                          className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                        >
                          {topic.titleText}
                        </Link>
                        {index < centralGovernmentTaxLinks.length - 1
                          ? ", "
                          : "."}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p
                    id={section.id}
                    className="scroll-mt-28 text-sm leading-7 text-rra-black sm:text-base"
                  >
                    {localizedText(section.text, locale)}{" "}
                    <Link
                      href={`/${locale}/taxes/local-government-taxes`}
                      className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                    >
                      {localizedText(domesticTaxesPage.detailsLinkLabel, locale)}
                    </Link>
                    .
                  </p>
                ),
            }))}
          />
        </div>

        <p className="mt-20 text-sm text-rra-black">
          {localizedText(domesticTaxesPage.lastUpdated, locale)}
        </p>
      </article>
    </Container>
  )
}
