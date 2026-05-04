import {
  centralTaxLastUpdated,
  section,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const payeDetail: CentralTaxDetailPage = {
  slug: "pay-as-you-earn",
  title: {
    en: "Pay As You Earn (PAYE)",
    fr: "Pay As You Earn (PAYE)",
    rw: "Pay As You Earn (PAYE)",
  },
  intro: {
    en: [
      "PAYE is tax on employment income. It is withheld by employers on behalf of their employees for efficient collection.",
    ],
  },
  sections: [
    section("registration", "Registration"),
    section("taxable-employment-income", "Taxable employment income"),
    section("exempted-employment-income", "Exempted employment income"),
    section("types-of-employees", "Types of employees"),
    section("types-of-employees-2", "Types of employees"),
    section("paye-calculation", "PAYE calculation"),
    section("paye-declaration", "PAYE declaration"),
    section("paye-payment", "PAYE Payment"),
  ],
  lastUpdated: centralTaxLastUpdated,
}
