import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const exciseDutyDetail: CentralTaxDetailPage = {
  slug: "excise-duty",
  title: {
    en: "Excise Duty",
    fr: "Droits d'accise",
    rw: "Amahoro ku bicuruzwa byihariye",
  },
  intro: {
    en: [
   `Excise Duty is a tax applied to specific products. This means that it is able to discourage consumption with negative social impacts. This can reduce the costs of healthcare and policing, whilst raising significant revenues for further government spending. As Excise Duties are charged on the consumption of certain products, it is also referred to as a ‘excise tax’.`,
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
      `Any manufacturer or importer of a product that is subject to Excise Duty by the law is required to declare and pay Excise Duty. There is no threshold on company size for Excise Duty. A taxpayer who manufactures taxable products must declare and pay Excise Duty regardless of the size of the business.`,
        ],
      },
    },
    {
      id: "obligations-of-taxpayers-registered-for-excise-duty",
      title: {
        en: "Obligations of taxpayers registered for Excise Duty",
        fr: "Obligations des contribuables enregistres a l'accise",
        rw: "Inshingano z'abasora amahoro ku bicuruzwa byihariye",
      },
      content: {
        en: [
              `The obligations of Excise Duty registered taxpayers are detailed in Chapter 2, section one of the Law Nº 011/2025 Of 27/05/2025 Establishing the Excise Duty. Excise Duty registered taxpayers must:`,
            `<ul>`,
              `<li>Keeping registers</li>`,
            `<li>Affixing a tax stamp on a taxable product</li>`,
            `<li>Submission to the Tax Administration of a reconciliation statement on the usage of tax stamps</li>`,
              `<li>Keeping books of accounts </li>`,
              `</ul>`,
        ],
      },
    },
    {
      id: "who-pays-excise-duty",
      title: { en: "Who pays Excise Duty", fr: "Qui paie les droits d'accise", rw: "Uwishyura amahoro ku bicuruzwa byihariye" },
      content: {
        en: [
            `Excise Duty is paid by the manufacturer or importer of the taxable products. However, it is expected that these costs will be passed onto consumers in the form of higher selling prices.`,
        ],
      },
    },
    {
      id: "valuation-methods-of-excise-duty",
      title: {
        en: "Valuation methods of Excise Duty",
        fr: "Methodes d'evaluation des droits d'accise",
        rw: "Uburyo bwo kugena amahoro ku bicuruzwa byihariye",
      },
      content: {
        en: [
      `The rates of excise duties can be charged on a ‘specific’, ‘ad valorem’ or ‘mixed’ basis as follows: `,
      `<ul>`,
          `<li>A specific Excise Duty charges a certain amount of tax per unit of the product. For example, Excise Duty is charged on premium oil in Rwanda at a rate of FRW 183 per litre. </li>`,
            `<li>An ad valorem Excise Duty charges a percentage of the taxable value of the product. For example, Excise Duty is charged on beer in Rwanda at 65% of the taxable value. </li>`,
           `<li>A mixed Excise Duty charges both a certain amount of tax per unit and as a percentage of the taxable value of the product. For example, Excise Duty is charged on cigarettes in Rwanda at a rate of 36% of the retail price in addition to FRW 230 per pack of 20 individual cigarettes.</li>`,
        ],
      },
    },
    {
      id: "taxable-products-and-rates",
      title: { en: "Taxable products and rates", fr: "Produits taxables et taux", rw: "Ibicuruzwa bisoreshwa n'ibipimo" },
      content: {
        en: [
          `The tax rates for Excise Duty vary depending upon the product. The taxable products and tax rates are:`,
           `The taxable base for ad valorem Excise Duty on locally manufactured products is calculated according to the selling price, excluding all other taxes.`,
            ` The rates of Excise Duty are the same for both domestic and imported products. Find duty the rates <a href=\"https://www.rra.gov.rw/en/domestic-tax-services/excise-duty/declare-your-excise-duty">here.</a>.`,
                  `<blockquote>
           <strong>  Example </strong>
                       <p> Amahoro produces fruit juice. In one tax period she manufactures and sells 10,000 small bottles for a pre-tax selling price of FRW 400 each for a total taxable sale during that tax period of FRW 4,000,000. Amahoro must pay ad valorem Excise Duty of:</p>
                      <p>  FRW 4,000,000 * 10% = FRW 400,000.</p>
                      </blockquote>`,
                      `<blockquote>
                  <strong>      Example </strong>
                       <p> Ubumwe produces cigarettes. In one tax period he manufactures and sells 400 packs (of 20 cigarettes) for a pre-tax selling price of FRW 300 each for a total taxable sale during that tax period of FRW 120,000. Ubumwe must pay mixed Excise Duty of:</p>
                       <p>  (FRW 120,000 * 36%) + (400 * FRW 230) = FRW 135,200.</p>
                      </blockquote>`,
                      `<blockquote>
                      <strong> Example </strong>
                        <p>Lucie produces banana wine using ingredients sourced in Rwanda. In one tax period she manufactures and sells 200 bottles for a pre-tax selling price of FRW 850 each for a total taxable sale during that period of FRW 170,000. Lucie must pay ad valorem Excise Duty of:</p>
                       <p> FRW 170,000 * 40% = FRW 68,000. </p>
                      </blockquote>`,

        ],
      },
    },
    {
      id: "exemptions-for-excise-duty",
      title: { en: "Exemptions for Excise Duty", fr: "Exonerations des droits d'accise", rw: "Ibisonewe amahoro ku bicuruzwa byihariye" },
      content: {
        en: [
             "The following goods are exempt from Excise Duty:",
          `<ul>`,
          `<li>Goods for charitable organizations.</li>`,
          `<li>Vehicles assembled in Rwanda.</li>`,
          `<li>One personal vehicle of a returning Rwandan diplomat.</li>`,
          `<li>One vehicle of a Rwandan returnee or other person returning from a foreign country who fulfils exemption conditions set under customs law.</li>`,
          `<li>Minibuses and buses that carry not less than 14 persons, lorries, single cabin pickups manufactured to carry goods, refrigerating vehicles, tourist vehicles, ambulances, and vehicles designed for persons with disabilities.</li>`,
          `<li>Products specifically manufactured for export.</li>`,
         ` <li>Products which are sold to duty free shops and other specific persons legally determined</li>`,
          `</ul>`
        ],
      },
    },
    {
      id: "tax-stamps",
      title: { en: "Tax stamps", fr: "Timbres fiscaux", rw: "Kashe z'umusoro" },
      content: {
        en: [
        ` A tax stamp is a sign affixed on some products subject to Excise Duty to show retailers and consumers that excise duty has been paid. The products requiring tax stamps are cigarettes (each pack of 20 cigarettes), wines and liquors (each bottle). Tax stamps can be purchased (at cost price) from RRA. Call 3004 for details on purchasing tax stamps.`,
        ],
      },
    },
    {
      id: "annexures",
      title: { en: "Annexures", fr: "Annexes", rw: "Imigereka" },
      content: {
        en: [
        `Firstly, download the Excise Duty Annexures from the E-Tax website.The Excise Annexure file has two tabs. `,
          `<strong>1) Raw Materials tab</strong>`,
          `This tab is applicable for all taxpayers to record their register of raw materials used in the manufacturing of taxable products during the tax period.`,
         ` Each raw material used for production of each product on each date is required to have its own row in the annex. For example, if two raw materials are used to produce two separate products on eight days of production, then (2 * 2 * 8 = 32) 32 rows are required in the annexure.`,
         `<ul>`,
            `<li>Product Name – Enter the type or brand of product that is being produced. This does not have to specify amounts or unit sizes. </li>`,
             `<li>Production Date – Enter the date of production, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>`,
             `<li>Name of the Raw Materials Used – Enter the name of the manufactured product.</li>`,
              `<li>Opening Stock – Enter the opening stock (in given units) of the raw material at the beginning of that day’s production.</li>`,
               `<strong>Note:</strong> The units that are used can be chosen by the taxpayer, i.e., grams, kilograms or tonnes, but should remain consistent for that raw material. The units that are used are not written in the annexure, only numbers.</li>`,
              `<li>Quantity of Raw materials locally purchased – Enter the units of raw material used purchased locally.</li>`,
               `<li>Quantity of Raw materials imported - Enter the units of raw material used purchased abroad.</li>`,
               `<li>Quantities Used for Production – Enter the amount of stock (in given units) of the raw material during that day’s production.</li>`,
               `<li>Quantities Spoiled – Enter the amount of stock (in given units) of the raw material that was spoiled during that day’s production.</li>`,
               `<li>Closing Stock – Enter the amount of stock (in given units) of the raw material remaining at the end of that day’s production. This should equal Opening Stock – Quantities Used for Production – Quantities Spoiled. </li>`,
          `<strong>2. Excise tab</strong>`,
             `This tab is applicable for all taxpayers to record their sales of taxable products sold during the tax period. There are different Excise tabs for cigarette, telephone and for other excisable products. The information to complete in each tab is almost similar. In this Tax Handbook the tab ‘Excise others’ is explained.`,
             `Each product type sold on each date for each specific unit price is required to have its own row in the annex. For example, if two different sized products of the same brand are sold on the same day, these are required to have two separate rows.`,
             `<ul>`,
           `<li>Date of Delivery – Enter the exit date</li>`,
            `<li>Item Name – Enter excisable product name</li>`,
             ` <li>Container Type – Select the type of the container</li>`,
             `<li>Quantity per container produced(ml/gr) – Enter the number of units in a single container in millilitre or in gram depending on the nature of the product.</li>`,
              `<li>Unit of measurement - Select either (ml) for mil-litter or (gr) for milligram depending on the nature of the product.</li>`,
                `<li>Package type – Select one of the listed package types</li>`,
              `<li>Quantity in the package – Enter the number of units of the product in a package as per package type</li>`,
               `<li>Total Packages in Stores – Enter the number of units of package produced in the store</li>`,
              `<li>Total Package Out of Factory – Enter the number of the package to be sold</li>`,
              `<li>Quantity Out of Factory – Convert the number of units to be sold into Kilograms or litres </li>`,
             `<li>Total Adjustment – Enter converted number of units to be sold into litres or kilograms</li>`,
              `<li>Total Export – Enter converted number of units to be sold outside the country into litres or kilograms</li>`,
               `<li>Total Taxable Units – Enter the number of units to be sold (in Kg/lt) minus the number of units to be sold outside the country (manufactured for exported)</li>`,
            `<li>Unit price – Enter the value of recorded units</li>`,
             `<li>Total Taxable Value – Enter the product of unit price times total taxable units (column M*N)</li>`,
            `<li>Tax Due – Enter the total tax due of all units sold (including exports). This should equal Total Taxable Value multiplied by the excise tax rate for that product.</li>`,
            `<li>Package in KG/Liter remaining in Stock – Enter the number of units that are not yet sold and remain in the factory. </li>`,
               `<ul>`,
        ],
      },
    },
    {
      id: "declaration-and-payment",
      title: { en: "Declaration and payment", fr: "Declaration et paiement", rw: "Kumenyekanisha no kwishyura" },
      content: {
        en: [
       ` Excise Duty is declared on a monthly basis and must be declared and paid within five days after the end of each tax period. `,
          `The declaration process for Excise Duty is similar to other domestic taxes.`,
        `  Once all the Excise Duty annexures have been completed, validated and saved in the folder C:/RRA in the user’s local machine, the taxpayer can return to E-Tax to complete the Excise Duty declaration, see page 102 for more detail on selecting the relevant declaration.`,
         `  The Excise Duty declaration requires similar data to the Excise Duty Annexures that have previously been completed. The important distinction is that in the Excise Duty declaration, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click ‘save’ to calculate the grey boxes automatically. `,
         `<blockquote>
           <strong>Example </strong>
           <p> Excise declaration is entered below. The Excise Duty due for this taxpayer in this tax period is FRW 192,000. </p>
         </blockquote>`,
         `<div><img src="/images/excise duty declaration.png" alt="Excise duty declaration Form" /></div>`,
          ` After saving the Excise Duty declaration form, upload the Excise Duty annexures and then compare with the Excise Duty declaration form.`,
            `  Once all the annexures and declaration values are equal, correct and certified, click to ‘Submit’ the declaration. After successfully submitting, this screen will load.`,
           `Click ‘View Acknowledgement Receipt’ to view the RRA reference number and the total tax due that are required for payment. Remember that payment must also be made before the `,

        ],
      },
    },
    {
      id: "penalties-for-tax-stamp-non-compliance",
      title: {
        en: "Penalties for tax stamp non compliance",
        fr: "Penalites pour non-conformite aux timbres fiscaux",
        rw: "Ibihano byo kutubahiriza kashe z'umusoro",
      },
      content: {
        en: [
            `  A domestic producer or importer who does not keep:`,
           ` <ul>`,
                `  -	Stamp registers, records or related documents.`,
                `-	Stamp reconciliation statements.`,
                `is subject to an administrative fine between million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000).`,
                 ` <strong>What are the consequences for incorrectly applying tax stamps?</strong>`,
                  `A domestic producer or importer of products who:`,
                    `-	Does not affix tax stamps to appropriate products`,
                      `-	Does not affix tax stamps incorrectly`,
                    `-	Affixes tax stamps to products in a manner contrary to rules set forth by the Authority`,
                      `-	Making an overprint or defaces tax stamps`,
                      `-	Submits an incorrect or incomplete tax stamp reconciliation statement`,
                      `-	Applies tax stamps to products for which they are not intended`,
                        `-	Sells products which are subject to excise duty without tax stamps`,
                           `Is, upon conviction, subject to a fine of between one million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000) or to imprisonment for a term of six (6) months to one (1) year.`,
                        `When the perpetrator of the offence referred to in this Article is a person other than an individual, such a person is liable to a fine of not less than FRW 5,000,000 but not more than FRW 10,000,000. In case of recidivism within a period not exceeding two years, the fine is doubled.`,
            `</ul>`,

        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
