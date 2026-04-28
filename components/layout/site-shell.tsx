import type { ReactNode } from "react"

import type { Dictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

type SiteShellProps = {
  children: ReactNode
  dict: Dictionary
  lang: Locale
}

export function SiteShell({ children, dict, lang }: SiteShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader dict={dict} lang={lang} />
      <main className="flex-1">{children}</main>
        <SiteFooter lang={lang} />
    </div>
  )
}
