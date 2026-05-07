import {
  getLocalizedGeneralInformation,
  getLocalizedTopics,
  localizedParagraphs,
  localizedText,
} from "@/lib/content/handbook"
import { otherServicesPage, otherServiceSections } from "@/lib/content/other-services"
import { userGuideSections, userGuidesPage } from "@/lib/content/user-guides"
import type { Locale } from "@/lib/i18n/config"
import type { HandbookContentBlock } from "@/lib/types/handbook"

export type HandbookSearchItem = {
  body: string
  category: string
  href: string
  id: string
  keywords: string
  summary: string
  title: string
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function blockToText(block: HandbookContentBlock) {
  if (typeof block === "string") {
    return stripHtml(block)
  }

  return [
    block.caption,
    ...block.headers,
    ...block.rows.flatMap((row) => row),
  ]
    .filter(Boolean)
    .join(" ")
}

function topicHref(slug: string, lang: Locale) {
  if (slug === "general-information") {
    return `/${lang}/general-information`
  }

  if (slug === "domestic-taxes") {
    return `/${lang}/taxes/domestic-taxes`
  }

  return `/${lang}/taxes/${slug}`
}

function categoryLabel(category: string) {
  switch (category) {
    case "central-government":
      return "Central government taxes"
    case "local-government":
      return "Local government taxes"
    case "domestic":
      return "Taxes administered in Rwanda"
    case "general":
      return "General information"
    default:
      return "Handbook"
  }
}

export function getHandbookSearchIndex(lang: Locale): HandbookSearchItem[] {
  const generalTopic = getLocalizedGeneralInformation(lang)
  const taxTopics = getLocalizedTopics(lang)
  const topics = generalTopic ? [generalTopic, ...taxTopics] : taxTopics
  const otherServicesSectionText = otherServiceSections
    .flatMap((section) => [
      localizedText(section.title, lang),
      ...localizedParagraphs(section.content, lang).map(blockToText),
    ])
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
  const userGuideSectionText = userGuideSections
    .flatMap((section) => [
      localizedText(section.title, lang),
      ...localizedParagraphs(section.content, lang).map(blockToText),
    ])
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()

  const topicItems = topics.map((topic) => {
    const sectionText = topic.sections
      .flatMap((section) => [
        section.titleText,
        ...section.paragraphs.map(blockToText),
      ])
      .join(" ")
      .replace(/\s+/g, " ")
      .trim()

    const keywords = [
      topic.titleText,
      topic.summaryText,
      categoryLabel(topic.category),
      sectionText,
    ]
      .join(" ")
      .toLowerCase()

    return {
      id: topic.slug,
      title: topic.titleText,
      summary: topic.summaryText,
      body: sectionText,
      category: categoryLabel(topic.category),
      href: topicHref(topic.slug, lang),
      keywords,
    }
  })

  const otherServicesTitle = localizedText(otherServicesPage.title, lang)
  const otherServicesSummary = localizedText(otherServicesPage.summary, lang)
  const userGuidesTitle = localizedText(userGuidesPage.title, lang)
  const userGuidesSummary = localizedText(userGuidesPage.summary, lang)

  return [
    ...topicItems,
    {
      id: otherServicesPage.slug,
      title: otherServicesTitle,
      summary: otherServicesSummary,
      body: otherServicesSectionText,
      category: "Other services",
      href: `/${lang}/other-services`,
      keywords: [
        otherServicesTitle,
        otherServicesSummary,
        "Other services",
        otherServicesSectionText,
      ]
        .join(" ")
        .toLowerCase(),
    },
    {
      id: userGuidesPage.slug,
      title: userGuidesTitle,
      summary: userGuidesSummary,
      body: userGuideSectionText,
      category: "User guides and examples",
      href: `/${lang}/user-guides-and-examples`,
      keywords: [
        userGuidesTitle,
        userGuidesSummary,
        "User guides and examples",
        userGuideSectionText,
      ]
        .join(" ")
        .toLowerCase(),
    },
  ]
}
