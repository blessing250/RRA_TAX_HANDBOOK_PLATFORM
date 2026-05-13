import {
  localTaxLastUpdated,
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
        `Rental Income Tax is a tax levied on the income generated from rented land and buildings. The land and buildings are referred to as the ‘Immovable Property’ and Rental Income Tax must be declared and paid on rented immovable properties in addition to Immovable Property Tax.`,

    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
   ` Any person or business who is not subject to corporate income tax and who receives income from a rented immovable property located in Rwanda, is required to register for Rental Income Tax.`,
   ],
      },
    },
    {
      id: "taxable-income-for-rental-income-tax",
      title: { en: "Taxable income for Rental Income Tax", fr: "Revenu locatif imposable", rw: "Inyungu y'ubukode isoreshwa" },
      content: {
        en: [
           ` Rental Income Tax is not charged on the total (gross) rental income. Rental Income Tax allows for exemptions for expenses. This is intended to encourage landlords to provide high quality and well-maintained properties for their tenants.`,
            `There are two different methods of calculating taxable income for Rental Income Tax, depending upon whether the taxpayer has taken out bank loans to fund the construction / purchase, or has no loan of the rented immovable property.`,
            `Firstly, if the taxpayer has no loans relating to the immovable property, the taxable income is calculated by:Taxable Income = gross rental income * 50%.`,
            `Secondly, if the taxpayer does have loans relating to the immovable property, in addition to the deduction of 50%, he or she can deduct the actual bank interest payments within the tax period. From the tax period 2019 onwards, the taxable income is calculated by:`,
            `Taxable Income = gross rental income * 50% – interest paid.`,

        
        ],
      },
    },
    {
      id: "rental-income-tax-rates",
      title: { en: "Rental Income Tax rates", fr: "Taux de l'impot locatif", rw: "Ibipimo by'umusoro ku bukode" },
      content: {
        en: [
          ` Rental Income Tax is a progressive tax. This means that there are different tax rates depending on the taxpayer's taxable income, as described above. The groupings of taxable rental income are called tax brackets. The tax rates for each tax bracket are:`,
          {
            type: "table",
            headers: ["Annual taxable income", "Marginal tax rate"],
            rows: [
              ["Below FRW 180,000", "0%"],
              ["Between FRW 180,001 to 	FRW 1,000,000", "20%"],
              ["Above FRW 1,000,001", "30%"],
            ],
          },
         `It is important to note that these tax rates are marginal. This means that for each taxpayer in each year: the first FRW 180,000 that the taxpayer earns is taxed at 0%, the next FRW 820,000 earned is taxed at 20% and any remaining income is taxed at 30%. This means that no taxpayer is made worse off by receiving income in a higher tax bracket.`,
            `<blockquote>
            <strong>Example</strong>, 
              <p>Lucie rents a house to tenants in the year 2019. She receives gross rental income of FRW 4,800,000 during the tax year. She does not have a bank loan for that house. Her taxable income in 2019 is therefore:</p>
              <p>FRW 4,800,000 * 50% = FRW 2,400,000.</p>
             <p> Based on her taxable rental income of FRW 2.4 million, the Rental Income Tax due can be calculated as:</p>
             <p> (FRW 180,000 * 0%) + (FRW 820,000 * 20%) + (FRW 1,400,000 * 30%) = FRW 0 + FRW 164,000 + FRW 420,000 = FRW 584,000.</p>
              </blockquote>`,
              `<blockquote>
              <strong>Example</strong>
              <p>Rukundo rents a house to tenants in the year 2019. He receives gross rental income of FRW 4,800,000 during the tax year. He has a bank loan for that house, and paid FRW 400,000 interest in the year 2019.</p>
               <p>His taxable rental income in 2019 is:</p>
               <p>FRW 4,800,000 * 50% – FRW 400,000 = FRW 2,000,000.</p>
                <p> Based on his taxable rental income of FRW 2 million, the Rental Income Tax due can be calculated as:</p>
                <p> (FRW 180,000 * 0%) + (FRW 820,000 * 20%) + (FRW 1,000,000 * 30%) = FRW 0 + FRW 164,000 + FRW 300,000 = FRW 464,000.</p>
                </blockquote>`,
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
            `Rental Income Tax is required to be declared and paid on an annual basis. The tax period is the calendar year, from 1st January until 31st December. Thus, the deadline to declare and pay Rental Income Tax is 31st January of the following year.`,
            `<blockquote>
            <strong>Example</strong>
             <p>Lucie must declare and pay her annual Rental Income Tax declaration for the 2019 tax period, from 1st January 2019 until 31st December 2019, by the deadline of 31st January 2020.</p>
          </blockquote>`,
             ],
      },
    },
    {
      id: "rental-contracts",
      title: { en: "Rental contracts", fr: "Contrats de location", rw: "Amasezerano y'ubukode" },
      content: {
        en: [
             `Rental contracts must be submitted to RRA by the taxpayer. `,
             `The taxpayer is required to submit the rental contract, signed by the taxpayer and the tenant, to RRA within fifteen (15) days of the date the contract was signed.`,
              `In the event of any amendment or termination of the rental contract, the taxpayer is required to notify RRA within 15 days, and submit the amended rental contract.`,
              `There is no obligation of the tenant to submit the rental contract. However, tenants can help to ensure the tax compliance of their landlords by submitting their rental contracts to RRA at any time. Rental contracts can be submitted by the tenant to any RRA office or tax centre.`,

        ],
      },
    },
  ],
  lastUpdated: localTaxLastUpdated,
}
