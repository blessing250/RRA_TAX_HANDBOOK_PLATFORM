import {
  localTaxLastUpdated,
  section,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const immovablePropertyTaxDetail: LocalTaxDetailPage = {
  slug: "immovable-property-tax",
  title: {
    en: "Immovable Property Tax",
    fr: "Impot sur les biens immobiliers",
    rw: "Umusoro ku mutungo utimukanwa",
  },
  intro: {
    en: [
      "Immovable Property Tax is a tax levied on the market value of a building and the surface of a plot of land. The land and buildings are referred to as the 'Immovable Property'. In order to facilitate taxpayers, the market value of the building only needs to be assessed every five years, unless major changes in the building and structures occur.",
    ],
  },
  sections: [
    {
      id: "taxpayers-subject-to-immovable-property-tax",
      title: {
        en: "Taxpayers subject to the Immovable Property Tax",
        fr: "Contribuables soumis a l'impot sur les biens immobiliers",
        rw: "Abasora umusoro ku mutungo utimukanwa",
      },
      content: {
        // Example for Prince: replace these paragraphs with the final handbook text.
        // Add each paragraph as one string. Omit fr/rw until translated so they fall back to English.
        en: [
          "Taxpayers subject to Immovable Property Tax include owners of taxable land and buildings.",
          "This example shows where detailed content for this accordion section should be added.",
        ],
      },
    },
    section("tax-base-of-the-immovable-property-tax", "Tax base of the Immovable Property Tax"),
    section("taxable-value-of-the-immovable-property", "Taxable value of the Immovable Property"),
    section("valuation-of-the-building", "Valuation of the building"),
    section("when-is-the-immovable-property-valued", "When is the Immovable Property is valued"),
    section("exemptions-for-immovable-property-tax", "Exemptions for Immovable Property Tax"),
    section("tax-rates-on-immovable-property", "Tax rates on immovable property"),
    section("how-the-land-component-is-valued", "How the land component is valued"),
    section("declaration", "Declaration"),
    section("ownership-change-during-tax-period", "When Immovable Property changes ownership during the tax period"),
  ],
  lastUpdated: localTaxLastUpdated,
}
