import Link from "next/link"
import { notFound } from "next/navigation"

import { Container } from "@/components/layout/container"
import { HandbookAccordion } from "@/components/handbook/handbook-accordion"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { HandbookSection } from "@/components/handbook/handbook-section"
import { PageHero } from "@/components/handbook/page-hero"
import { RelatedTopics } from "@/components/handbook/related-topics"
import { TableOfContents } from "@/components/handbook/table-of-contents"
import {
  localizedParagraphs,
  localizedText,
  getLocalizedTopic,
  getLocalizedTopics,
} from "@/lib/content/handbook"
import { centralGovernmentTaxesPage } from "@/lib/content/taxes/central-government-taxes"
import { taxTopics } from "@/lib/content/taxes"
import { getCentralTaxDetailPage } from "@/lib/content/taxes/central-tax-details/index"
import {
  centralGovernmentTaxSlugs,
  domesticTaxesPage,
} from "@/lib/content/taxes/domestic-taxes"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, locales, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    taxTopics
      .filter(
        (topic) => topic.slug !== "domestic-taxes"
      )
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
  const centralTaxDetailPage = getCentralTaxDetailPage(slug)

  if (slug === "central-government-taxes") {
    const taxItems = centralGovernmentTaxSlugs
      .map((itemSlug) => getLocalizedTopic(itemSlug, locale))
      .filter((item) => item !== undefined)

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
              items={taxItems.map((item) => ({
                value: item.slug,
                title: item.titleText,
                content: (
                  <div
                    id={item.slug}
                    className="scroll-mt-28 space-y-4 text-sm leading-7 text-rra-black sm:text-base"
                  >
                    <p>
                      {item.summaryText}{" "}
                      <Link
                        href={`/${locale}/taxes/${item.slug}`}
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

  if (centralTaxDetailPage) {
    const title = localizedText(centralTaxDetailPage.title, locale)

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
                {
                  label: localizedText(
                    {
                      en: "Central Government Taxes",
                      fr: "Impots du gouvernement central",
                      rw: "Imisoro ya leta",
                    },
                    locale
                  ),
                  href: `/${locale}/taxes/central-government-taxes`,
                },
                { label: title },
              ]}
            />
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-normal text-rra-black sm:text-4xl">
            {title}
          </h1>

          <div className="mt-10 max-w-xl space-y-4 text-sm leading-8 text-rra-black">
            {centralTaxDetailPage.intro[locale]?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            )) ??
              centralTaxDetailPage.intro.en?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </div>

          <div className="mt-12 max-w-xl">
            <HandbookAccordion
              variant="minimal"
              items={centralTaxDetailPage.sections.map((section) => ({
                value: section.id,
                title: localizedText(section.title, locale),
                content: (
                  <HandbookSection
                    id={section.id}
                    paragraphs={
                      section.content?.[locale] ?? section.content?.en ?? []
                    }
                  />
                ),
              }))}
            />
          </div>

          <p className="mt-20 text-sm text-rra-black">
            {localizedText(centralTaxDetailPage.lastUpdated, locale)}
          </p>
        </article>
      </Container>
    )
  }

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
