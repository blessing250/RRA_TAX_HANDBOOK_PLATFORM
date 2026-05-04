import { centralGovernmentTaxesPage } from "@/lib/content/taxes/central-government-taxes"
import { centralTaxDetailPages } from "@/lib/content/taxes/central-tax-details"
import {
  centralGovernmentTaxSlugs,
  domesticTaxesPage,
} from "@/lib/content/taxes/domestic-taxes"
import { localTaxDetailPages } from "@/lib/content/taxes/local-tax-details"
import {
  localGovernmentSupportSlugs,
  localGovernmentTaxSlugs,
  localGovernmentTaxesPage,
} from "@/lib/content/taxes/local-government-taxes"
import type {
  HandbookContentBlock,
  HandbookSection,
  HandbookTopic,
  LocalizedText,
} from "@/lib/types/handbook"

type DetailPage = {
  intro: HandbookTopic["sections"][number]["content"]
  sections: Array<{
    content?: HandbookTopic["sections"][number]["content"]
    id: string
    title: HandbookTopic["sections"][number]["title"]
  }>
  slug: string
  title: HandbookTopic["title"]
}

const overviewTitle = {
  en: "Overview",
  fr: "Apercu",
  rw: "Incamake",
}

const localTaxRelatedSlugs: Record<string, string[]> = {
  "immovable-property-tax": ["tax-on-sale-of-immovable-property", "local-government-taxes"],
  "tax-on-sale-of-immovable-property": ["immovable-property-tax", "local-government-taxes"],
  "trading-license": ["local-government-taxes"],
  "rental-income-tax": ["immovable-property-tax", "local-government-taxes"],
  "fees-levied-by-decentralized-entities": [
    "local-government-taxes",
    "domestic-tax-penalties-and-fines",
  ],
  "domestic-tax-penalties-and-fines": [
    "fees-levied-by-decentralized-entities",
    "local-government-taxes",
  ],
  "domestic-tax-centers": ["local-government-taxes"],
  "customs-taxes": ["domestic-taxes"],
}

const centralTaxRelatedSlugs: Record<string, string[]> = {
  "income-tax": ["pay-as-you-earn", "withholding-taxes", "capital-gains-tax"],
  "pay-as-you-earn": ["income-tax", "withholding-taxes"],
  "value-added-tax": ["excise-duty", "withholding-taxes"],
  "excise-duty": ["value-added-tax", "customs-taxes"],
  "withholding-taxes": ["income-tax", "pay-as-you-earn", "gaming-taxes"],
  "gaming-taxes": ["withholding-taxes"],
  "capital-gains-tax": ["income-tax", "tax-on-sale-of-immovable-property"],
  "mining-royalty-tax": ["withholding-taxes"],
  "road-maintenance-levy": ["customs-taxes"],
  "tourism-tax": ["value-added-tax"],
}

function asContent(value: Partial<Record<"en" | "fr" | "rw", HandbookContentBlock[]>>) {
  return value
}

function firstParagraph(value: Partial<Record<"en" | "fr" | "rw", HandbookContentBlock[]>>) {
  const en = value.en?.find((item) => typeof item === "string")
  const fr = value.fr?.find((item) => typeof item === "string")
  const rw = value.rw?.find((item) => typeof item === "string")

  return {
    ...(typeof en === "string" ? { en } : {}),
    ...(typeof fr === "string" ? { fr } : {}),
    ...(typeof rw === "string" ? { rw } : {}),
  }
}

function detailToTopic(
  detail: DetailPage,
  category: HandbookTopic["category"],
  relatedSlugs: string[] = []
): HandbookTopic {
  return {
    slug: detail.slug,
    category,
    title: detail.title,
    summary: firstParagraph(detail.intro),
    sections: [
      {
        id: "overview",
        title: overviewTitle,
        content: asContent(detail.intro),
      },
      ...detail.sections.map<HandbookSection>((section) => ({
        id: section.id,
        title: section.title,
        content: section.content ?? { en: [] },
      })),
    ],
    relatedSlugs,
  }
}

const centralTaxTopics = centralGovernmentTaxSlugs.map((slug) =>
  detailToTopic(
    centralTaxDetailPages[slug],
    "central-government",
    centralTaxRelatedSlugs[slug] ?? ["central-government-taxes"]
  )
)

const localGovernmentTopics = [
  ...localGovernmentTaxSlugs,
  ...localGovernmentSupportSlugs,
].map((slug) =>
  detailToTopic(
    localTaxDetailPages[slug],
    "local-government",
    localTaxRelatedSlugs[slug] ?? ["local-government-taxes"]
  )
)

const customsTopic = detailToTopic(localTaxDetailPages["customs-taxes"], "domestic", [
  "domestic-taxes",
])

const localGovernmentIntro = localGovernmentTaxesPage.intro as Partial<
  Record<"en" | "fr" | "rw", HandbookContentBlock[]>
>

const localGovernmentSummary: LocalizedText = {
  en: localGovernmentIntro.en?.[0] as string,
  fr: localGovernmentIntro.fr?.[0] as string | undefined,
  rw: localGovernmentIntro.rw?.[0] as string | undefined,
}

export const taxTopics: HandbookTopic[] = [
  {
    slug: "domestic-taxes",
    category: "domestic",
    title: domesticTaxesPage.title,
    summary: {
      en: domesticTaxesPage.summary.en[0],
      fr: domesticTaxesPage.summary.fr[0],
      rw: domesticTaxesPage.summary.rw[0],
    },
    sections: [
      {
        id: "overview",
        title: overviewTitle,
        content: domesticTaxesPage.summary,
      },
    ],
    relatedSlugs: ["central-government-taxes", "local-government-taxes", "customs-taxes"],
  },
  {
    slug: "central-government-taxes",
    category: "central-government",
    title: centralGovernmentTaxesPage.title,
    summary: {
      en: centralGovernmentTaxesPage.summary.en[0],
      fr: centralGovernmentTaxesPage.summary.fr[0],
      rw: centralGovernmentTaxesPage.summary.rw[0],
    },
    sections: [
      {
        id: "overview",
        title: overviewTitle,
        content: centralGovernmentTaxesPage.summary,
      },
    ],
    relatedSlugs: [...centralGovernmentTaxSlugs],
  },
  ...centralTaxTopics,
  {
    slug: "local-government-taxes",
    category: "local-government",
    title: localGovernmentTaxesPage.title,
    summary: localGovernmentSummary,
    sections: [
      {
        id: "overview",
        title: overviewTitle,
        content: localGovernmentIntro,
      },
    ],
    relatedSlugs: [...localGovernmentTaxSlugs, ...localGovernmentSupportSlugs],
  },
  ...localGovernmentTopics,
  customsTopic,
]
