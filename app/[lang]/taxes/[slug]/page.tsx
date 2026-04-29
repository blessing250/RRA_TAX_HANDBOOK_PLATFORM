import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { HandbookSection } from "@/components/handbook/handbook-section"
import { PageHero } from "@/components/handbook/page-hero"
import { RelatedTopics } from "@/components/handbook/related-topics"
import { TableOfContents } from "@/components/handbook/table-of-contents"
import {
  localizedText,
  getLocalizedTopic,
  getLocalizedTopics,
} from "@/lib/content/handbook"
import { taxTopics } from "@/lib/content/taxes"
import {
  centralGovernmentTaxSlugs,
  domesticTaxesPage,
} from "@/lib/content/taxes/domestic-taxes"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, locales, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    taxTopics
      .filter((topic) => topic.slug !== "domestic-taxes")
      .map((topic) => ({
        lang,
        slug: topic.slug,
      }))
  )
}

export default async function TaxTopicPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const locale = lang as Locale
  const dict = getDictionary(locale)

  if (slug === "domestic-taxes") {
    notFound()
  }

  const topic = getLocalizedTopic(slug, locale)

  if (!topic) {
    notFound()
  }

  const allTopics = getLocalizedTopics(locale)
  const relatedTopics = allTopics.filter((item) =>
    topic.relatedSlugs?.includes(item.slug)
  )
  const isDomesticTaxChild =
    centralGovernmentTaxSlugs.some((itemSlug) => itemSlug === slug) ||
    slug === "local-government-taxes"

  return (
    <>
      <PageHero
        title={topic.titleText}
        summary={topic.summaryText}
      />
      <Container className="py-8 sm:py-10">
        <div className="mb-8">
          <HandbookBreadcrumb
            items={[
              { label: dict.nav.home, href: `/${locale}` },
              { label: dict.nav.taxes, href: `/${locale}/taxes` },
              ...(isDomesticTaxChild
                ? [
                    {
                      label: localizedText(domesticTaxesPage.title, locale),
                      href: `/${locale}/taxes/domestic-taxes`,
                    },
                  ]
                : []),
              { label: topic.titleText },
            ]}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <article className="min-w-0">
            <HandbookAccordion
              defaultValue={topic.sections[0]?.id}
              items={topic.sections.map((section) => ({
                value: section.id,
                title: section.titleText,
                content: (
                  <HandbookSection
                    id={section.id}
                    paragraphs={section.paragraphs}
                  />
                ),
              }))}
            />
          </article>

          <div className="lg:sticky lg:top-24">
            <TableOfContents
              heading={dict.common.tableOfContents}
              items={topic.sections.map((section) => ({
                id: section.id,
                title: section.titleText,
              }))}
            />
          </div>
        </div>

        <div className="mt-10">
          <RelatedTopics
            heading={dict.common.relatedTopics}
            lang={locale}
            readMore={dict.common.readMore}
            topics={relatedTopics}
          />
        </div>
      </Container>
    </>
  )
}
