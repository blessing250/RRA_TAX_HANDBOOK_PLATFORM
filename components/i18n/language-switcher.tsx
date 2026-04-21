"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { localeLabels, locales, type Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  label: string
  lang: Locale
}

function localizedPath(pathname: string, nextLang: Locale) {
  const parts = pathname.split("/")

  if (locales.includes(parts[1] as Locale)) {
    parts[1] = nextLang
    return parts.join("/") || `/${nextLang}`
  }

  return `/${nextLang}${pathname === "/" ? "" : pathname}`
}

const localeFlags: Record<Locale, string> = {
  en: "fi fi-gb",
  fr: "fi fi-fr",
  rw: "fi fi-rw",
}

const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  rw: "KIN",
}

export function LanguageSwitcher({ label, lang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const [hash, setHash] = useState("")

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)

    updateHash()
    window.addEventListener("hashchange", updateHash)
    window.addEventListener("popstate", updateHash)
    window.addEventListener("focus", updateHash)

    return () => {
      window.removeEventListener("hashchange", updateHash)
      window.removeEventListener("popstate", updateHash)
      window.removeEventListener("focus", updateHash)
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="h-auto gap-1 p-0 text-sm font-semibold text-rra-white underline underline-offset-4 hover:text-rra-orange"
          aria-label={label}
        >
          <span aria-hidden="true" className={localeFlags[lang]} />
          <span>{localeShortLabels[lang]}</span>
          <ChevronDownIcon className="size-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={`${localizedPath(pathname, locale)}${hash}`}
              aria-current={locale === lang ? "page" : undefined}
              title={localeLabels[locale]}
              className={cn(locale === lang && "font-semibold text-rra-blue")}
            >
              <span aria-hidden="true" className={localeFlags[locale]} />
              <span>{localeLabels[locale]}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
