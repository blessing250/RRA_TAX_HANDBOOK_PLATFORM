import type { Locale } from "@/lib/types/i18n"

export type LocalizedText = Partial<Record<Locale, string>>

export type TranslationStatus = "complete" | "draft" | "missing"

export type HandbookTableBlock = {
  caption?: string
  headers: string[]
  rows: string[][]
  type: "table"
}

export type HandbookContentBlock = string | HandbookTableBlock

export type HandbookSection = {
  id: string
  title: LocalizedText
  content: Partial<Record<Locale, HandbookContentBlock[]>>
}

export type HandbookTopic = {
  slug: string
  category: "general" | "central-government" | "local-government" | "domestic"
  title: LocalizedText
  summary: LocalizedText
  sections: HandbookSection[]
  relatedSlugs?: string[]
  translationStatus?: Partial<Record<Locale, TranslationStatus>>
}
