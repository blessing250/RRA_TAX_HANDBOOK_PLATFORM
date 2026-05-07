import {
  localTaxLastUpdated,
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
      "Immovable Property Tax is a tax levied on the market value of a building and the surface of a plot of land. The land and buildings are referred to as immovable property.",
      "To facilitate taxpayers, the market value of the building only needs to be assessed every five years, unless major changes in the building and structures occur.",
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
        en: [
          "Immovable Property Tax is declared and paid by the owner, usufructuary, or any other person considered to be the owner.",
          "It may also be declared and paid by the proxy of an owner who lives abroad.",
          "The tax liability on immovable property is not terminated or deferred if the owner has disappeared without leaving a proxy or another person to manage the property.",
          "If land or property is owned by more than one co-owner, the co-owners appoint and authorize one owner or another person as a proxy to represent them collectively.",
        ],
      },
    },
    {
      id: "tax-base-of-the-immovable-property-tax",
      title: { en: "Tax base of the Immovable Property Tax", fr: "Base imposable", rw: "Ishingiro ry'umusoro" },
      content: {
        en: [
          "The tax base of immovable property is:",
          "<ul><li>The market value of a building and related plot.</li><li>The surface of land designated for construction but without construction, or land not designated for residential use.</li><li>The surface of a plot of land with a building exempted from Immovable Property Tax.</li></ul>",
          "If the immovable property consists of a plot of land, a building, and its improvements, the tax is calculated on the market value of both the building and the related plot of land if both are subject to tax.",
        ],
      },
    },
    {
      id: "taxable-value-of-the-immovable-property",
      title: { en: "Taxable value of the Immovable Property", fr: "Valeur imposable", rw: "Agaciro gasoreshwa" },
      content: {
        en: [
          "If there is no building on a plot of land, tax is calculated on each square metre of the whole surface of the plot.",
          "If there is a building on a plot of land, tax is calculated on each square metre of the whole surface of the plot and on the market value of the building.",
        ],
      },
    },
    {
      id: "valuation-of-the-building",
      title: { en: "Valuation of the building", fr: "Evaluation du batiment", rw: "Kugena agaciro k'inyubako" },
      content: {
        en: [
          "The valuation of a building and its improvements must be carried out by a certified valuer of the Institute of Real Property Valuers in Rwanda (IRPV) or by a computerized mass valuation system.",
          "If the taxpayer presents supporting documents to RRA, the acquisition value or construction value of a building can be used until valuation by a certified valuer or computerized mass valuation system is effective.",
          "The purchase price is considered the market value if the property was bought within the previous five years in the free market, the property value has not changed by more than 20% since acquisition, and the acquisition contract is presented to RRA.",
        ],
      },
    },
    {
      id: "when-is-the-immovable-property-valued",
      title: { en: "When is the Immovable Property valued", fr: "Quand le bien est evalue", rw: "Igihe umutungo utimukanwa uhabwa agaciro" },
      content: {
        en: [
          "The market value of each immovable property is valued on a five-year cycle. The first valuation is 1 January of the first taxable year.",
          "Unless significant changes occur, no subsequent valuations are required within the five-year assessment cycle. At the beginning of each five-year cycle, the market value of the building is revised.",
          "Declaration and payment must be made every year even though valuation generally takes place once in the five-year assessment cycle.",
          "If major changes increase or decrease the property value by more than 20% within an assessment cycle, the five-year cycle can be disturbed.",
          "If RRA believes the taxpayer's self-assessment is undervalued, it may proceed to a counter-valuation. The counter-valuation is considered final only if the difference is more than 20%.",
        ],
      },
    },
    {
      id: "exemptions-for-immovable-property-tax",
      title: { en: "Exemptions for Immovable Property Tax", fr: "Exonerations", rw: "Ibisonewe" },
      content: {
        en: [
          "The following immovable properties are exempt from Immovable Property Tax:",
          "<ul><li>One building intended by the owner to be occupied as their dwelling and its annex buildings located in a residential plot for one family.</li><li>Immovable property determined by the district council or Council of the City of Kigali as owned by vulnerable persons.</li><li>Immovable property owned by the State, decentralized entities, and public institutions, unless used for profit-making activities or leasing.</li><li>Immovable property belonging to foreign diplomatic missions in Rwanda if their countries do not levy tax on immovable property of Rwanda's diplomatic missions.</li><li>Land used for agricultural, livestock, or forestry activities whose area is equal to or less than two hectares.</li><li>Land reserved for construction of residential houses where no basic infrastructure has been erected.</li><li>Plot of land on which a condominium is built or meant for construction of a condominium.</li></ul>",
        ],
      },
    },
    {
      id: "tax-rates-on-immovable-property",
      title: { en: "Tax rates on immovable property", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
          "The tax rate on immovable property is determined as follows:",
          {
            type: "table",
            headers: ["Property type or base", "Rate"],
            rows: [
              ["Surface of land", "FRW 0 - FRW 80 per square metre"],
              ["Residential building and related plot", "0.5% of market value"],
              ["Commercial building and related plot", "0.3% of market value"],
              ["Industrial building and plot, or micro/small business building and plot", "0.1% of market value"],
              ["Residential building of three floors", "0.25% of market value"],
              ["Residential building with more than three floors", "0.1% of market value"],
            ],
          },
          "In determining the taxable value of a commercial or industrial building, machinery and other equipment attached to the building are not considered.",
        ],
      },
    },
    {
      id: "how-the-land-component-is-valued",
      title: { en: "How the land component is valued", fr: "Evaluation de la composante fonciere", rw: "Uko ubutaka buhabwa agaciro" },
      content: {
        en: [
          "The tax rate on the surface of a plot of land is determined by the location and use of the land. It ranges from FRW 0 to FRW 80 per square metre per year, as set by the District Council.",
          "The first 20,000 square metres are exempt if the land is used for agriculture or livestock activities.",
          "<blockquote><p><strong>Example</strong>: Amahoro owns a coffee farm of 30,000m2. Because the land is used for agriculture, the first 20,000m2 are exempt.</p><p>If the District Council set the rate at FRW 0.4 per square metre, tax due is (30,000m2 - 20,000m2) * FRW 0.4 = FRW 4,000.</p></blockquote>",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "Immovable Property Tax is declared and paid annually for each immovable property. The tax period is the calendar year, from 1 January to 31 December.",
          "The deadline to declare and pay Immovable Property Tax is 31 December of the same year.",
          "If the property value changes by more than 20% within an assessment cycle, the taxpayer must submit a new tax declaration reflecting the changes and pay it within one month.",
        ],
      },
    },
    {
      id: "ownership-change-during-tax-period",
      title: { en: "When Immovable Property changes ownership during the tax period", fr: "Changement de proprietaire pendant la periode fiscale", rw: "Iyo umutungo uhinduye nyirawo mu gihe cy'umusoro" },
      content: {
        en: [
          "If immovable property is purchased in a given tax period, the old owner must declare and pay the amount including the month of ownership transfer. The new owner declares and pays Immovable Property Tax for the remaining months.",
          "No transfer of ownership of immovable property can take place without all due taxes having been paid to RRA.",
          "<blockquote><p><strong>Example</strong>: Rukundo's annual Immovable Property Tax is FRW 60,000. He sells his plot to Amahoro in August 2023.</p><p>Rukundo pays for eight months: FRW 60,000 * 8/12 = FRW 40,000. Amahoro pays for the remaining four months: FRW 60,000 * 4/12 = FRW 20,000.</p></blockquote>",
        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
