import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const miningRoyaltyTaxDetail: CentralTaxDetailPage = {
  slug: "mining-royalty-tax",
  title: {
    en: "Mining Royalty Tax",
    fr: "Redevance miniere",
    rw: "Umusoro ku bucukuzi bw'amabuye y'agaciro",
  },
  intro: {
    en: [
      `Mining Royalty Tax is a tax withheld from local mining operators by either a domestic mineral processing facility or an individual/entity exporting minerals from Rwanda. Tax on Minerals ensures that all Rwandans share in the benefits from the country’s natural resources when these are taken out of Rwanda.`,
      `Mining Royalty Tax is a type of withholding tax but cannot be claimed back in Income Tax declarations.`,

    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
        `Any taxpayer who qualifies to be a local mineral processing facility or a person who exports minerals from Rwanda must register for Mining Royalty Tax. However, if the miner and the exporter constitute the same operator, this person pays both the Mining Royalty Tax and Export Tax at the time of export.`,
        `It is important to note that all mining companies operating in Rwanda are required to have valid issued by Rwanda Mines, Petroleum and Gas Board (RMB).`,
      `A taxpayer who buys minerals domestically within Rwanda has to pay Mining Royalty Tax.`,

        ],
      },
    },
    {
      id: "valuation-method-of-mining-royalty-tax",
      title: {
        en: "Valuation method of Mining Royalty Tax",
        fr: "Methode d'evaluation de la redevance miniere",
        rw: "Uburyo bwo kugena agaciro k'umusoro ku bucukuzi",
      },
      content: {
        en: [
       ` There are two types of valuation method for Mining Royalty Tax: norm value and gross value.`,
        `Norm value means the value of minerals on the international market as at the date of grant to the dealer in minerals of a certificate for the sale of such minerals, excluding processing costs approved by the competent authority.`,
         `Gross Value means the value of minerals before deducting expenses associated with the processing thereof in a local mineral processing facility.`,

        ],
      },
    },
    {
      id: "tax-rates-per-minerals-category",
      title: {
        en: "Tax rates per minerals category",
        fr: "Taux par categorie de minerais",
        rw: "Ibipimo by'umusoro hakurikijwe ubwoko bw'amabuye",
      },
      content: {
        en: [
       `The rates of Mining Royalty Tax depend upon the type of minerals. RRA considers six different types of minerals:`,
       `<ul>`, 
     `•  3% of the norm value for the mineral category of base metals.`,
      `  •   2% of the gross value for the category of gemstones.`,
       `•    2% of the norm value for the category of platinum group metals.`,
        ` •  2% of the norm value for the category of rare earth elements.`,
        `•  3% of the norm value for the category of energy minerals.`,
        `•   0.5% of the norm value for the category of gold. `,
        `</ul>`,
       `<i><strong>Example</strong></i>`,
            `<i>     ABC Mining Ltd exported 340kg of a product falling in base metals. The value of minerals on the international market is equivalent to FRW 16,000 per kg. Therefore, the norm value is: 340 kg * FRW 16,000 per kg = FRW 5,440,000 The tax rate for base metals is 3% of the norm value. Therefore, the Mining Royalty Tax due is: FRW 5,440,000 * 3% = FRW 163,200.</i>`,
           `<i><strong>Example</strong></i>`,
             `<i>  XYZ Mining Ltd is selling 50kg of a product falling in the gemstones category on the local market. The gross value is calculated at FRW 4,200,000. The tax rate for the gemstones category is 2% of the gross value. Therefore, the Mining Royalty Tax Due is: FRW 4,200,000 * 2% = FRW 84,000 </i>`,

      ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
         ` Mining Royalty Tax are declared and paid on a monthly basis. A taxpayer declares and pays any mining royalty tax that he or she has withheld within 15 days following the month in which the tax was withheld.`,
         `The declaration process for Mining Royalty Tax is similar to other domestic taxes.`,
         `<strong>a)  Annexures</strong>`,
         ` The next step requires the taxpayer to download WOP Mining Royalty Annexure from Withholding menu in E-Tax, see page 96 for more detail on downloading annexures.`,
         `The WOP Mining Royalty Annexure file has one tab that must be completed, validated and saved. See page 98 if the taxpayer has any problems when validating annexures.`,
         `<strong>b)     WOP Mining Royalty Annexure Tab</strong>`,
       `  The ‘WOP Mining Royalty Annexure’ tab has 6 columns. Each row is for a separate type of mineral, and should contain all the aggregated data for that type of mineral during the tax period. For each type of mineral, enter details on:`,
       `<ul>`,
       ` • Product of MINERALS – Select mineral category.`,
          `   •    Quantity Purchased (in kg) – Enter the total mass of that type of mineral being purchased, in kilograms.`,
           `   •   Gross Value – Enter the total gross value of the mineral being purchased. This column is only required for the gemstones category.`,
            `  •    Norm Value – Enter the total norm value of the mineral being purchased. This column is only required for other categories excluding gemstones.`,
             `  •   Tax rate – Enter the tax rate corresponding to the specified mineral category.`,
              `  • Tax Due – Enter the amount of Mining Royalty Tax to be paid. This should equal ‘Gross Value’ or ‘Norm Value’ multiplied by the completed ‘Tax Rate’ column, depending upon the type of mineral being purchased.`,
            `</ul>`,
       `<strong>c)  Declaration submission</strong>`,
          `  After the applicable WOP Mining Royalty Annexure has been completed, validated and saved in the folder C:/RRA in the user’s local machine, the taxpayer can return to E-Tax to complete the Mining Royalty Tax declaration.`,
           `The declaration form requires similar data to the WOP Mining Royalty Tax annexure that has previously been completed. Once all relevant white boxes have been entered, click ‘save’ to calculate the grey boxes automatically.`,
       `<strong> Example 52 </strong>    An example of Mining Royalty Tax declaration form is entered below. The tax due for this taxpayer in this tax period is FRW 135,000.`,
                    ` After saving the declaration form, upload the WOP Mining Royalty Tax annexure and then compare with the declaration form. Example 53 Continuing the example of the Mining Royalty Tax declaration form above, the comparison between this declaration form and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted.`,
                    `  Once all the annexures and declaration values are equal, correct and certified, click to ‘Submit’ the declaration. After successfully submitting, this screen will load.`,
                    `  Click ‘View Acknowledgement Receipt’ to view the RRA reference number and the total tax due that are required for payment. See page 415 for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.`,

        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
