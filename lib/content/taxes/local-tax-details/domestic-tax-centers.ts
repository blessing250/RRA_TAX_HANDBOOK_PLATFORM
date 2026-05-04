import {
  localTaxLastUpdated,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const domesticTaxCentersDetail: LocalTaxDetailPage = {
  slug: "domestic-tax-centers",
  title: {
    en: "Domestic Tax Centers",
    fr: "Centres des impots domestiques",
    rw: "Ibigo by'imisoro y'imbere mu gihugu",
  },
  intro: {
    en: [
      "Domestic Tax Centres can be used to register and declare both domestic taxes and local government taxes and fees. In addition, domestic tax offices are available to help with a wide range of issues facing taxpayers.",
      "There is at least one Domestic Tax Centre in every District. The opening hours of each domestic tax centre is 09:00 to 17:00 on Monday to Friday, excluding national holidays.",
    ],
  },
  sections: [],
  lastUpdated: localTaxLastUpdated,
}
