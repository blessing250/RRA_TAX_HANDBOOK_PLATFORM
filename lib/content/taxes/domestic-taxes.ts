import type { LocalizedText } from "@/lib/types/handbook"

type DomesticTaxAccordionItem = {
  id: string
  text: Partial<Record<"en" | "fr" | "rw", string>>
  title: LocalizedText
}

export const centralGovernmentTaxSlugs = [
  "income-tax",
  "pay-as-you-earn",
  "value-added-tax",
  "excise-duty",
  "withholding-taxes",
  "gaming-taxes",
  "capital-gains-tax",
  "mining-royalty-tax",
  "road-maintenance-levy",
  "tourism-tax",
] as const

export const domesticTaxesPage = {
  slug: "domestic-taxes",
  title: {
    en: "Domestic Taxes",
    fr: "Impots domestiques",
    rw: "Imisoro y'imbere mu gihugu",
  },
  summary: {
    en: [
      "Domestic taxes specifically refer to all taxes and fees administered by the RRA's Domestic Tax Department (DTD) which are levied on income, goods, services, and property within Rwanda. These include central and local government taxes.",
    ],
    fr: [
      "Les impots domestiques designent les impots et frais administres par le Departement des impots domestiques de la RRA, preleves sur les revenus, les biens, les services et les proprietes au Rwanda. Ils comprennent les impots du gouvernement central et des administrations locales.",
    ],
    rw: [
      "Imisoro y'imbere mu gihugu ni imisoro n'amahoro bicungwa n'Ishami ry'Imisoro y'Imbere mu Gihugu rya RRA, yakwa ku nyungu, ibicuruzwa, serivisi n'imitungo iri mu Rwanda. Ikubiyemo imisoro ya leta n'imisoro y'inzego z'ibanze.",
    ],
  },
  sectionTitle: {
    en: "Types of Domestic taxes",
    fr: "Types d'impots domestiques",
    rw: "Ubwoko bw'imisoro y'imbere mu gihugu",
  },
  lastUpdated: {
    en: "This page was last updated on: 05/03/2026",
    fr: "Cette page a ete mise a jour le : 05/03/2026",
    rw: "Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026",
  },
}

export const domesticTaxSections: DomesticTaxAccordionItem[] = [
  {
    id: "central-government-taxes",
    title: {
      en: "Central government taxes",
      fr: "Impots du gouvernement central",
      rw: "Imisoro ya leta",
    },
    text: {
      en: "These are the revenues that the RRA collects, and accounts for on behalf of the government. They include",
      fr: "Ce sont les recettes que la RRA collecte et comptabilise pour le compte du gouvernement. Elles comprennent",
      rw: "Iyi ni imisoro RRA ikusanya ikanayibarira leta. Ikubiyemo",
    },
  },
  {
    id: "decentralized-entities-taxes",
    title: {
      en: "Taxes and fees levied by decentralised entities",
      fr: "Impots et frais preleves par les entites decentralisees",
      rw: "Imisoro n'amahoro byakwa n'inzego zegerejwe abaturage",
    },
    text: {
      en: "Taxes and fees levied by decentralised entities commonly known as Local Government Taxes (LGT) and fees are revenues collected by RRA on behalf of the district authorities.",
      fr: "Les impots et frais preleves par les entites decentralisees, communement appeles impots locaux (LGT), sont des recettes collectees par la RRA pour le compte des autorites de district.",
      rw: "Imisoro n'amahoro byakwa n'inzego zegerejwe abaturage, bizwi nk'imisoro y'inzego z'ibanze (LGT), ni amafaranga akusanywa na RRA mu izina ry'ubuyobozi bw'uturere.",
    },
  },
]
