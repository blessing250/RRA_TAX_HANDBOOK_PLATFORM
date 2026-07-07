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
     ` Immovable Property Tax is a tax levied on the market value of a building and the surface of a plot of land. The land and buildings are referred to as the ‘Immovable Property’. In order to facilitate taxpayers, the market value of the building only needs to be assessed every five years, unless major changes in the building and structures occur.`,
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
             `The immovable property tax is declared and paid by:`,
             `<ul>`,
              `• The owner, the usufructuary or any other person considered to be the owner.`,
              `• The proxy of an owner who lives abroad.`,
              `</ul>`,
             ` The tax liability on immovable property is not terminated or deferred if the owner of immovable property has disappeared without leaving behind a proxy or other person to manage the immovable property on his or her behalf. `,
              `If any land or property is owned by more than one co-owner, the co-owners shall appoint and authorise one owner or any other person as a proxy to represent them collectively as a group of taxpayers.`,
              `If co-owners of immovable property did not appoint a co-owner or a proxy to represent them collectively as a group of taxpayers, the tax obligations related to the immovable property are settled in accordance with laws regulating co-owned property.`,
        ],
      },
    },
    {
      id: "tax-base-of-the-immovable-property-tax",
      title: { en: "Tax base of the Immovable Property Tax", fr: "Base imposable", rw: "Ishingiro ry'umusoro" },
      content: {
        en: [
             `The tax base of the immovable property is:`,
             `<ul>`,
          `• The market value of a building and related plot`,
          `• The surface of land designated for construction but without any construction; the surface of land not designated for residential use.`,
          `• The surface of a plot of land with a building exempted from immovable property tax.`,
           `</ul>`,
          `However, if the immovable property consists of a plot of land, a building and its improvements, the tax on immovable property is calculated on the market value of both the building and the related plot of land if the two are subject to tax.`,

        ],
      },
    },
    {
      id: "taxable-value-of-the-immovable-property",
      title: { en: "Taxable value of the Immovable Property", fr: "Valeur imposable", rw: "Agaciro gasoreshwa" },
      content: {
        en: [
         `If there is no building on a plot of land, the tax is calculated on each square metre of the whole surface of the plot of land. If there is a building on a plot of land, the tax is calculated on each square metre of the whole surface of the plot of land and the market value of the building.`,
        ],
      },
    },
    {
      id: "valuation-of-the-building",
      title: { en: "Valuation of the building", fr: "Evaluation du batiment", rw: "Kugena agaciro k'inyubako" },
      content: {
        en: [
          `The valuation of a building and its improvements must be carried out by a certified valuer of the <a href="https://irpv.rw/" target="_blank" rel="noopener noreferrer"> IRPV</a> Institute of Real Property Valuers in Rwanda</a> (IRPV) or by a computerised mass valuation system. `,          
            `  However, if the taxpayer presents supporting documents to the RRA, the acquisition value or the construction value of a building can be used until valuation by a certified valuer or by computerised mass valuation system is effective. `,
             ` The purchase price is considered to be the market value if all of the following three conditions are fulfilled:`,
              `<ul>`,
              `• The immovable property was bought within the previous five years in the free market.`,
              `• The property value has not changed by more than twenty percent (20%) since the acquisition.`,
              `• The acquisition contract is presented to the RRA.`,
             ` </ul>`,

        ],
      },
    },
    {
      id: "when-is-the-immovable-property-valued",
      title: { en: "When is the Immovable Property valued", fr: "Quand le bien est evalue", rw: "Igihe umutungo utimukanwa uhabwa agaciro" },
      content: {
        en: [
              `The market value of each immovable property is required to be valued on the basis of a five-year cycle.`,
              `The first valuation of the immovable property is 1st January of the first taxable year. Unless significant changes to the value of the property occur, no subsequent valuations are required within the five-year assessment cycle. At the beginning of each five-year assessment cycle, the market value of the building is revised.`,
              `Although valuation generally only takes place once in the five-year assessment cycle, declaration and payment must be made every year.`,
              `This five-year cycle can be disturbed if, due to major changes in the building and structures, the value of the immovable property increases or decreases by more than 20% within an assessment cycle.`,
              `If the RRA believes that a taxpayer’s self-assessment on the value of the building is undervalued, it will proceed to a counter-valuation. The value from the counter-valuation will be considered as the final market value only if the difference between the taxpayer’s self-assessment and RRA’s counter-valuation is more than 20%.`,

        ],
      },
    },
    {
      id: "exemptions-for-immovable-property-tax",
      title: { en: "Exemptions for Immovable Property Tax", fr: "Exonerations", rw: "Ibisonewe" },
      content: {
        en: [
                 `   The following immovable properties are exempted from the immovable property tax:`,
                     `<ul>`,
                      `• One building intended by the owner to be occupied as his or her dwelling and its annex buildings located in a residential plot for one family. That building remains considered as his or her dwelling even when he/she does not occupy it for various reasons.`,
                      `• Immovable property determined by the district Council or the Council of the City of Kigali as owned by vulnerable persons.`,
                      `• Immovable property owned by the State, decentralized entities and public institutions, except if they are used for profit-making activities or for leasing.`,
                      `• Immovable property belonging to foreign diplomatic missions in Rwanda if their countries do not levy tax on immovable property of Rwanda’s diplomatic missions.`,
                      `• Land used for agricultural, livestock or forestry activities whose area is equal to or less than two hectares.`,
                      `• Land reserved for construction of residential houses but where no basic infrastructure has been erected.`,
                      `• Plot of land on which a condominium is built or meant for construction of a condominium. `,
                      `<ul>`,
                      `<blockquote>
                     <strong> Example</strong>
                         <p> Amahoro is a farmer and lives in a small house on her 30,000m2 farm. As the land usage is agricultural, the first 20,000m2 of land is exempted. Therefore, Amahoro is only required to pay the Immovable Property Tax on the remaining 10,000m2 of land.</p>
                         </blockquote>`,
                         `<blockquote>
                         <strong> Example</strong>
                        <p> As Musafiri intends to live with his family on his residential property, the building component is not subject to property tax. Therefore, Musafiri is only required to pay tax for the plot of land.</p>
                          </blockquote>`,
        ],
      },
    },
    {
      id: "tax-rates-on-immovable-property",
      title: { en: "Tax rates on immovable property", fr: "Taux d'imposition", rw: "Ibipimo by'umusoro" },
      content: {
        en: [
                          ` The tax rate on immovable property is determined as follows:`,
                          `<ul>`,
                          `• Zero to FRW 80 per square meter of the surface of land.`,
                         `• 0.5% of the market value of both the building and related plot of land for residential use.`,
                          `• 0.3% of the market value of both building and related plot of land for commercial use.`,
                          `• 0.1% of the market value of both the building and related plot of land for industrial use, building and plot belonging to micro-enterprises and small businesses.`,
                         ` However, special consideration is given to the following:`,
                          `• A plot and a building for residential use of three floors are taxed at the rate of 0.25% of their market value.`,
                          `• Plot and a building for residential use with more than three floors are taxed at the rate of 0.1% of their market value.`,
                          `• In determining the taxable value of a commercial or industrial building, machinery and other equipment attached to the building are not considered. `,
                         `</ul>`,
                         `<blockquote>
                        <strong> Example </strong>
                          <p>In 2024, Amahoro owns two residential buildings. Both buildings are located in Isange village where the land tax rate is FRW 80 per square meter. Each building is valued at FRW 10,000,000 and constructed on a plot of 400 Square meters. Each plot is valued at FRW 3,000,000. Amahoro and his family occupy the first house.<p>
                          <p>Using information above mentioned, let’s us compute the tax to be paid by Amahoro. Since the first house is exempted as the dwelling of the family, Immovable Property Tax is: FRW 80*400=FRW 32,000. For the second owned property, the Immovable Property Tax is: (FRW 10,000,000 + FRW 3,000,000) * 0.5%=FRW 65,000 The total Immovable Property Tax to be paid by Amahoro in 2024 is: FRW 32,000 + FRW 65,000=FRW 97,000. Suppose the second property is a commercial building. Amahoro would pay: FRW 32,000 + (FRW 10,000,000 + FRW 3,000,000) * 0.3%=FRW 71,000</p>
                          </blockquote>`,
                          `<blockquote>
                        <strong>Example</strong></strong>
                         <p> Amahoro owns a residential building with three floors plus a basement floor. The building is valued at FRW 10,000,000. As Amahoro does not intend occupying the house with her family and the building has four floors, the tax due on the building in 2019 is: FRW 10,000,000 * 0.25% * 50% (reduction) = FRW 12,500.</p>
                          </blockquote>`,
        ],
      },
    },
    {
      id: "how-the-land-component-is-valued",
      title: { en: "How the land component is valued", fr: "Evaluation de la composante fonciere", rw: "Uko ubutaka buhabwa agaciro" },
      content: {
        en: [
          `The tax rate on the surface of plot of land is determined by the location of the land and the land use:`,
          `<ul`,
        `• FRW 0 – FRW 80 per square metre per year (set by the District Council).`,
        `• First 20,000 square metres are exempt if the land is used for agriculture or livestock activities. `,
          `</ul>`,
          `<blockquote>
           <strong>  Example </strong>
           <p> Amahoro owns a coffee farm, which is 30,000m2 in size. As her land is used for agriculture, the first 20,000m2 of land are exempted from Immovable Property Tax. Therefore, Amahoro is only required to pay the Immovable Property Tax on the remaining 10,000m2 of land. </p>
            <p>As the District Council set the rate on agriculture at FRW 0.4 per square metre at her location, the tax due is on land is: (30,000m2 farm - 20,000m2 exempted) * FRW 0.4 = 10,000m2 taxable farm land * FRW 0.4 = FRW 4,000.</p>
          </blockquote>`,

        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
              `Immovable Property Tax is declared and paid on an annual basis, for each immovable property. The tax period is the calendar year, from 1st January until 31st December. `,
            `The deadline to declare and pay Immovable Property Tax is 31st December of the same year. However, in the event of changes in the value of the immovable property by more than 20% within an assessment cycle, the taxpayer must submit a new tax declaration reflecting these value changes and pay it within one month. `,
            `<blockquote>
            <strong>  Example </strong>
           <p> Nshuti owns a house with land liable to Immovable Property Tax. He must declare and pay his Immovable Property Tax for the tax period in 2023 – from 1st January 2023 until 31st December 2023 – by the deadline of 31st December 2023. Given that there will be no substantial change in the value of his immovable property, his declaration of the year 2023 will also determine the tax to be paid on the building in the following year – which is in the same tax assessment cycle.</p>
           </blockquote>`,

         ],
      },
    },
    {
      id: "ownership-change-during-tax-period",
      title: { en: "When Immovable Property changes ownership during the tax period", fr: "Changement de proprietaire pendant la periode fiscale", rw: "Iyo umutungo uhinduye nyirawo mu gihe cy'umusoro" },
      content: {
        en: [
          `If Immovable Property is purchased in a given tax period, the old owner must declare and pay the amount including the month of the ownership transfer. The new owner must declare and pay Immovable Property Tax for the remaining months.`,
           `No transfer of ownership of an immovable property can take place without all due taxes having been paid to RRA. `,
           `<blockquote>
          <strong>  Example </strong>
          <p> The most recent valuation of Rukundo’s immovable property implied that the Immovable Property Tax to be paid is FRW 60,000 per year. As Rukundo sells his plot to Amahoro in August 2023, Rukundo needs to pay the Immovable Property Tax for eight months of 2023 before he can transfer the plot. Amahoro needs to pay the Immovable Property Tax for the remaining four months. </p>
               <p> The tax due in 2023 is as follows: Tax due of Rukundo: FRW 60,000 * 8/12 = FRW 40,000 Tax due of Amahoro: FRW 60,000 * 4/12 = FRW 20,000.</p>
          </blockquote>`,


        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
