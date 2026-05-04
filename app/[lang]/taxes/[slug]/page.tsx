import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import { Container } from '@/components/layout/container';
import { HandbookAccordion } from '@/components/handbook/handbook-accordion';
import { HandbookBreadcrumb } from '@/components/handbook/handbook-breadcrumb';
import { HandbookSection } from '@/components/handbook/handbook-section';
import { PageHero } from '@/components/handbook/page-hero';
import { RelatedTopics } from '@/components/handbook/related-topics';
import { TableOfContents } from '@/components/handbook/table-of-contents';
import {
  localizedParagraphs,
  localizedText,
  getLocalizedTopic,
  getLocalizedTopics,
} from '@/lib/content/handbook';
import { centralGovernmentTaxesPage } from '@/lib/content/taxes/central-government-taxes';
import { taxTopics } from '@/lib/content/taxes';
import { getCentralTaxDetailPage } from '@/lib/content/taxes/central-tax-details/index';
import { getLocalTaxDetailPage } from '@/lib/content/taxes/local-tax-details/index';
import { centralGovernmentTaxSlugs, domesticTaxesPage } from '@/lib/content/taxes/domestic-taxes';
import {
  localGovernmentTaxSections,
  localGovernmentSupportSlugs,
  localGovernmentTaxSlugs,
  localGovernmentTaxesPage,
} from '@/lib/content/taxes/local-government-taxes';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    taxTopics
      .filter((topic) => topic.slug !== 'domestic-taxes')
      .map((topic) => ({
        lang,
        slug: topic.slug,
      })),
  );
}

export default async function TaxTopicPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  if (slug === 'domestic-taxes') {
    notFound();
  }

  const topic = getLocalizedTopic(slug, locale);

  if (!topic) {
    notFound();
  }

  const allTopics = getLocalizedTopics(locale);
  const relatedTopics = allTopics.filter((item) => topic.relatedSlugs?.includes(item.slug));
  const isDomesticTaxChild =
    centralGovernmentTaxSlugs.some((itemSlug) => itemSlug === slug) ||
    slug === 'local-government-taxes' ||
    localGovernmentTaxSlugs.some((itemSlug) => itemSlug === slug);
  const centralTaxDetailPage = getCentralTaxDetailPage(slug);
  const localTaxDetailPage = getLocalTaxDetailPage(slug);

  if (slug === 'central-government-taxes') {
    const taxItems = centralGovernmentTaxSlugs
      .map((itemSlug) => getLocalizedTopic(itemSlug, locale))
      .filter((item) => item !== undefined);

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
            {localizedParagraphs(centralGovernmentTaxesPage.summary, locale).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
                      {item.summaryText}{' '}
                      <Link
                        href={`/${locale}/taxes/${item.slug}`}
                        className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                      >
                        {localizedText(centralGovernmentTaxesPage.readMoreLabel, locale)}
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
    );
  }

  if (centralTaxDetailPage) {
    const title = localizedText(centralTaxDetailPage.title, locale);

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
                      en: 'Central Government Taxes',
                      fr: 'Impots du gouvernement central',
                      rw: 'Imisoro ya leta',
                    },
                    locale,
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
              centralTaxDetailPage.intro.en?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
                    paragraphs={section.content?.[locale] ?? section.content?.en ?? []}
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
    );
  }

  if (slug === 'local-government-taxes') {
    const localGovernmentIntro = localGovernmentTaxesPage.intro as Partial<
      Record<Locale, string[]>
    >;
    const localTaxItems = localGovernmentTaxSlugs
      .map((itemSlug) => getLocalizedTopic(itemSlug, locale))
      .filter((item) => item !== undefined);
    const localSupportItems = localGovernmentSupportSlugs
      .map((itemSlug) => getLocalizedTopic(itemSlug, locale))
      .filter((item) => item !== undefined);

    const localSectionContent: Record<string, ReactNode> = {
      'types-of-taxes-levied-by-decentralised-entities': (
        <div className="scroll-mt-28 space-y-4 text-sm leading-7 text-rra-black sm:text-base">
          <p>{localizedText({ en: 'Taxes levied by decentralised entities include:' }, locale)}</p>
          <ul className="list-disc space-y-1 pl-6">
            {localTaxItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/taxes/${item.slug}`}
                  className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                >
                  {item.titleText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
      registration: (
        <HandbookSection
          id="registration"
          paragraphs={[
            'Each of the Decentralised Entities Taxes listed above, and many of the Decentralised Entities fees, must be declared using the Local Government Taxes (LGT) system.',
            'The LGT system is an online portal designed to make it easier for taxpayers to declare Decentralised Entities Taxes and fees.',
            'This can be done online, or with assistance from a RRA officer. To register, taxpayers must visit any RRA offices with either a Rwandan ID or Passport. The system is accessed via the link <a href="https://localgov.rra.gov.rw">https://localgov.rra.gov.rw</a>',
            "If a taxpayer does not know their password, it can be reset by clicking 'Forgot Password' on the LGT system login and receiving a new password by SMS or email.",
          ]}
        />
      ),
      'related-fees-and-taxpayer-support': (
        <div className="scroll-mt-28 space-y-4 text-sm leading-7 text-rra-black sm:text-base">
          <p>
            {localizedText(
              {
                en: 'Use these pages for decentralized entity fees, penalties, and taxpayer support references:',
                fr: "Utilisez ces pages pour les frais des entites decentralisees, les penalites et les references d'assistance aux contribuables :",
                rw: "Koresha aya mapaji ku mahoro y'inzego zegerejwe abaturage, ibihano, n'ubufasha ku basora:",
              },
              locale,
            )}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            {localSupportItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/taxes/${item.slug}`}
                  className="text-rra-light-blue underline underline-offset-2 hover:text-rra-blue"
                >
                  {item.titleText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
      'declaration-system': (
        <HandbookSection
          id="declaration-system"
          paragraphs={[
            'Taxpayers must declare taxes and fees levied by decentralised entities using the Rwanda Automated Local Government Taxes Management System, referred to as the LGT system. They can also use M-declaration.',
            'The LGT system has been designed with taxpayers in mind to make it as easy as possible to declare the required taxes and fees.',
            '<ul><li>Declare taxes anytime, from anywhere.</li><li>Avoid travel costs of visiting RRA offices.</li><li>Avoid queuing times at RRA offices.</li></ul>',
          ]}
        />
      ),
    };

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
                { label: localizedText(localGovernmentTaxesPage.title, locale) },
              ]}
            />
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-normal text-rra-black sm:text-4xl">
            {localizedText(localGovernmentTaxesPage.title, locale)}
          </h1>

          <div className="mt-10 max-w-xl space-y-6 text-sm leading-8 text-rra-black">
            {(localGovernmentIntro[locale] ?? localGovernmentIntro.en ?? []).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 max-w-xl">
            <HandbookAccordion
              variant="minimal"
              items={localGovernmentTaxSections.map((section) => ({
                value: section.id,
                title: localizedText(section.title, locale),
                content: localSectionContent[section.id],
              }))}
            />
          </div>

          <p className="mt-20 text-sm text-rra-black">
            {localizedText(localGovernmentTaxesPage.lastUpdated, locale)}
          </p>
        </article>
      </Container>
    );
  }

  if (localTaxDetailPage) {
    const title = localizedText(localTaxDetailPage.title, locale);
    const isCustomsTaxPage = localTaxDetailPage.slug === 'customs-taxes';

    return (
      <Container className="py-12 sm:py-16 lg:max-w-4xl">
        <article className="mx-auto max-w-2xl">
          <div className="mb-10">
            <HandbookBreadcrumb
              items={[
                { label: dict.nav.home, href: `/${locale}` },
                { label: dict.nav.taxes, href: `/${locale}/taxes` },
                ...(!isCustomsTaxPage
                  ? [
                      {
                        label: localizedText(domesticTaxesPage.title, locale),
                        href: `/${locale}/taxes/domestic-taxes`,
                      },
                      {
                        label: localizedText(localGovernmentTaxesPage.title, locale),
                        href: `/${locale}/taxes/local-government-taxes`,
                      },
                    ]
                  : []),
                { label: title },
              ]}
            />
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-normal text-rra-black sm:text-4xl">
            {title}
          </h1>

          <div className="mt-10 max-w-xl space-y-4 text-sm leading-8 text-rra-black">
            {(localTaxDetailPage.intro[locale] ?? localTaxDetailPage.intro.en ?? []).map(
              (paragraph) => (
                <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ),
            )}
          </div>

          {localTaxDetailPage.sections.length > 0 ? (
            <div className="mt-12 max-w-xl">
              <HandbookAccordion
                variant="minimal"
                items={localTaxDetailPage.sections.map((section) => ({
                  value: section.id,
                  title: localizedText(section.title, locale),
                  content: (
                    <HandbookSection
                      id={section.id}
                      paragraphs={section.content?.[locale] ?? section.content?.en ?? []}
                    />
                  ),
                }))}
              />
            </div>
          ) : null}

          <p className="mt-20 text-sm text-rra-black">
            {localizedText(localTaxDetailPage.lastUpdated, locale)}
          </p>
        </article>
      </Container>
    );
  }

  return (
    <>
      <PageHero title={topic.titleText} summary={topic.summaryText} />
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
                content: <HandbookSection id={section.id} paragraphs={section.paragraphs} />,
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
  );
}
