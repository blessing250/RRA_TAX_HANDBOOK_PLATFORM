import { notFound } from "next/navigation"

import { SiteShell } from "@/components/layout/site-shell"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { isLocale, locales, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const dict = getDictionary(lang)

  return (
    <SiteShell dict={dict} lang={lang as Locale}>
      {children}
    </SiteShell>
  )
}
