import type { HandbookContentBlock, LocalizedText } from "@/lib/types/handbook"

export type LocalTaxDetailSection = {
  id: string
  title: LocalizedText
  content?: Partial<Record<"en" | "fr" | "rw", HandbookContentBlock[]>>
}

export type LocalTaxDetailPage = {
  intro: Partial<Record<"en" | "fr" | "rw", HandbookContentBlock[]>>
  lastUpdated: LocalizedText
  sections: LocalTaxDetailSection[]
  slug: string
  title: LocalizedText
}

export const localTaxLastUpdated = {
  en: "This page was last updated on: 05/03/2026",
  fr: "Cette page a ete mise a jour le : 05/03/2026",
  rw: "Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026",
}

export function section(id: string, title: string): LocalTaxDetailSection {
  return {
    id,
    title: {
      en: title,
      fr: title,
      rw: title,
    },
    content: {
      en: [
        "Detailed guidance for this topic will be migrated from the edited handbook document.",
      ],
      fr: [
        "Les informations detaillees de cette rubrique seront migrees depuis le document du guide fiscal edite.",
      ],
      rw: [
        "Ibisobanuro birambuye kuri iyi ngingo bizavanwa mu nyandiko ivuguruye y'igitabo cy'imisoro.",
      ],
    },
  }
}
