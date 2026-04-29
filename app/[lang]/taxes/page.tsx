import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRightIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { HandbookBreadcrumb } from "@/components/handbook/handbook-breadcrumb"
import { localizedText } from "@/lib/content/handbook"
import { taxLandingCards, taxesLanding } from "@/lib/content/taxes/landing"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, type Locale } from "@/lib/i18n/config"

export default async function TaxesPage({
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
    <Container className="py-10 sm:py-14 lg:max-w-5xl">
      <div className="mb-10">
        <HandbookBreadcrumb
          items={[
            { label: dict.nav.home, href: `/${locale}` },
            { label: dict.nav.taxes },
          ]}
        />
      </div>

      <section className="mx-auto max-w-4xl">
        <h1 className="text-balance text-3xl font-bold tracking-normal text-rra-black sm:text-4xl">
          {localizedText(taxesLanding.title, locale)}
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-8 text-rra-black">
          {localizedText(taxesLanding.summary, locale)}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {taxLandingCards.map((card) => {
            const isExternal = card.href(locale).startsWith("http")

            return (
              <Link
                key={card.id}
                href={card.href(locale)}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group border-b-2 border-rra-light-blue pb-5 transition-colors hover:border-rra-blue focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <span className="flex items-center justify-between gap-4 text-xl font-bold text-rra-light-blue">
                  <span>{localizedText(card.title, locale)}</span>
                  <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-3 block max-w-sm text-sm leading-6 text-rra-black">
                  {localizedText(card.summary, locale)}
                </span>
              </Link>
            )
          })}
        </div>

        <p className="mt-24 text-sm text-rra-black">
          {localizedText(taxesLanding.lastUpdated, locale)}
        </p>
      </section>
    </Container>
  )
}
