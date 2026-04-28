import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config"
import en from "@/lib/i18n/dictionaries/en"
import fr from "@/lib/i18n/dictionaries/fr"
import rw from "@/lib/i18n/dictionaries/rw"

const dictionaries = {
  en,
  fr,
  rw,
}

export type Dictionary = typeof en

function mergeDictionary(base: Dictionary, partial: Partial<Dictionary>): Dictionary {
  return {
    ...base,
    ...partial,
    nav: { ...base.nav, ...partial.nav },
    common: { ...base.common, ...partial.common },
    home: { ...base.home, ...partial.home },
    taxes: { ...base.taxes, ...partial.taxes },
  }
}

export function getDictionary(lang: string): Dictionary {
  const locale: Locale = isLocale(lang) ? lang : defaultLocale

  if (locale === defaultLocale) {
    return dictionaries.en
  }

  return mergeDictionary(dictionaries.en, dictionaries[locale])
}
