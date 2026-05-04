import {
  localTaxLastUpdated,
  section,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const rentalIncomeTaxDetail: LocalTaxDetailPage = {
  slug: "rental-income-tax",
  title: {
    en: "Rental Income Tax",
    fr: "Impot sur les revenus locatifs",
    rw: "Umusoro ku bukode",
  },
  intro: {
    en: [
      "Rental Income Tax is a tax levied on the income generated from rented land and buildings. The land and buildings are referred to as the 'Immovable Property' and Rental Income Tax must be declared and paid on rented immovable properties in addition to Immovable Property Tax.",
    ],
  },
  sections: [
    section("registration", "Registration"),
    section("taxable-income-for-rental-income-tax", "Taxable income for Rental Income Tax"),
    section("rental-income-tax-rates", "Rental Income Tax rates"),
    section("declaration", "Declaration"),
    section("rental-contracts", "Rental contracts"),
  ],
  lastUpdated: localTaxLastUpdated,
}
