import Link from "next/link"
import { notFound } from "next/navigation"

import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { Container } from "@/components/layout/container"
import {
  getLocalizedTopic,
  localizedParagraphs,
  localizedText,
} from "@/lib/content/handbook"
import { centralGovernmentTaxesPage } from "@/lib/content/taxes/central-government-taxes"
import {
  centralGovernmentTaxSlugs,
  domesticTaxesPage,
} from "@/lib/content/taxes/domestic-taxes"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"

export default async function CentralGovernmentTaxesPage({
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
  const taxItems = centralGovernmentTaxSlugs
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
              {
                label: localizedText(domesticTaxesPage.title, locale),
                href: `/${locale}/taxes/domestic-taxes`,
              },
              { label: localizedText(centralGovernmentTaxesPage.title, locale) },
            ]}
          />
        </div>

        <h1 className="text-balance text-3xl font-bold tracking-normal text-rra-black sm:text-4xl">
          {localizedText(centralGovernmentTaxesPage.title, locale)}
        </h1>

        <div className="mt-10 max-w-xl space-y-4 text-sm leading-8 text-rra-black">
          {localizedParagraphs(centralGovernmentTaxesPage.summary, locale).map(
            (paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            )
          )}
        </div>

        <div className="mt-16 max-w-xl">
          <HandbookAccordion
            variant="minimal"
            items={taxItems.map((topic) => ({
              value: topic.slug,
              title: topic.titleText,
              content: (
                <div
                  id={topic.slug}
                  className="scroll-mt-28 space-y-4 text-sm leading-7 text-rra-black sm:text-base"
                >
                  <p>
                    {topic.summaryText}{" "}
                    <Link
                      href={`/${locale}/taxes/${topic.slug}`}
                      className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                    >
                      {localizedText(
                        centralGovernmentTaxesPage.readMoreLabel,
                        locale
                      )}
                    </Link>
                    .
                  </p>
                </div>
              ),
            }))}
          />
        </div>

        <p className="mt-20 text-sm text-rra-black">
          {localizedText(centralGovernmentTaxesPage.lastUpdated, locale)}
        </p>
      </article>
    </Container>
  )
}
