import type { LocalizedText } from "@/lib/types/handbook"

type LocalGovernmentSection = {
  id: string
  title: LocalizedText
}

type LocalizedParagraphs = Partial<Record<"en" | "fr" | "rw", string[]>>

export const localGovernmentTaxSlugs = [
  "immovable-property-tax",
  "tax-on-sale-of-immovable-property",
  "trading-license",
  "rental-income-tax",
] as const

export const localGovernmentSupportSlugs = [
  "fees-levied-by-decentralized-entities",
  "domestic-tax-penalties-and-fines",
  "domestic-tax-centers",
] as const

export const localGovernmentTaxesPage = {
  slug: "local-government-taxes",
  title: {
    en: "Local Government Taxes (LGT)",
    fr: "Impots des administrations locales (LGT)",
    rw: "Imisoro y'inzego z'ibanze (LGT)",
  },
  intro: {
    en: [
    `Taxes and fees levied by decentralised entities commonly known as Local Government Taxes (LGT) and fees are revenues collected by RRA on behalf of the district authorities. `,
    `The mandate for collecting taxes and fees levied by decentralised entities was transferred from the district authorities themselves to RRA in 2014. Within RRA, taxes and fees levied by decentralised entities are administered by the Provincial and Decentralized Revenues Division. `,
    `The mandate was changed because of the greater experience and capacity of RRA in collecting revenues, facilitating taxpayers and modernising processes, which means that taxes and fees levied by decentralised entities can be collected more fairly and efficiently by RRA than by the districts themselves. The collected revenues are directly paid to the corresponding Districts bank account.`,
    `Decentralised entities ensure that landowners, landlords and business owners contribute towards the good governance and improvement of their local communities. In addition, decentralised entities ensure that taxpayers occupying public areas, or taxpayers requiring certain services, pay fair and consistent fees wherever they are in the country.`,
    `Combined, taxes and fees levied by decentralised entities provide revenues for local governments to deliver valuable community development and social protection projects.`,

    ],
  } satisfies LocalizedParagraphs,
  lastUpdated: {
    en: "This page was last updated on: 05/03/2026",
    fr: "Cette page a ete mise a jour le : 05/03/2026",
    rw: "Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026",
  },
  detailsLinkLabel: {
    en: "Find details here.",
    fr: "Trouvez les details ici.",
    rw: "Reba ibisobanuro hano.",
  },
}

export const localGovernmentTaxSections: LocalGovernmentSection[] = [
  {
    id: "types-of-taxes-levied-by-decentralised-entities",
    title: {
      en: "Types of taxes levied by decentralised entities",
      fr: "Types d'impots preleves par les entites decentralisees",
      rw: "Ubwoko bw'imisoro y'inzego zegerejwe abaturage",
    },
  },
  {
    id: "registration",
    title: {
      en: "Registration",
      fr: "Enregistrement",
      rw: "Kwiyandikisha",
    },
  },
  {
    id: "related-fees-and-taxpayer-support",
    title: {
      en: "Related fees and taxpayer support",
      fr: "Frais connexes et assistance aux contribuables",
      rw: "Amahoro ajyanye n'ubufasha ku basora",
    },
  },
  {
    id: "declaration-system",
    title: {
      en: "Declaration system",
      fr: "Systeme de declaration",
      rw: "Uburyo bwo kumenyekanisha",
    },
  },
]
