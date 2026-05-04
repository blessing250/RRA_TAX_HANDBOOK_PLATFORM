import { generalInformation } from "@/lib/content/general-information"
import { taxTopics } from "@/lib/content/taxes"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import type { HandbookContentBlock, LocalizedText } from "@/lib/types/handbook"

export function localizedText(value: LocalizedText, lang: Locale) {
  return value[lang] ?? value[defaultLocale] ?? ""
}

export function localizedParagraphs(
  value: Partial<Record<Locale, HandbookContentBlock[]>>,
  lang: Locale
) {
  return value[lang] ?? value[defaultLocale] ?? []
}

export function getLocalizedTopic(slug: string, lang: Locale) {
  const topic =
    slug === generalInformation.slug
      ? generalInformation
      : taxTopics.find((item) => item.slug === slug)

  if (!topic) {
    return undefined
  }

  return {
    ...topic,
    titleText: localizedText(topic.title, lang),
    summaryText: localizedText(topic.summary, lang),
    sections: topic.sections.map((section) => ({
      ...section,
      titleText: localizedText(section.title, lang),
      paragraphs: localizedParagraphs(section.content, lang),
    })),
  }
}

export function getLocalizedTopics(lang: Locale) {
  return taxTopics.map((topic) => getLocalizedTopic(topic.slug, lang)!)
}

export function getLocalizedGeneralInformation(lang: Locale) {
  return getLocalizedTopic(generalInformation.slug, lang)
}
