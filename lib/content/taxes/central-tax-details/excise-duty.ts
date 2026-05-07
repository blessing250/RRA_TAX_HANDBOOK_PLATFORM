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
      "Excise Duty is a tax applied to specific products. It can discourage consumption with negative social impacts, reduce the costs of healthcare and policing, and raise revenues for government spending.",
      "Because Excise Duty is charged on the consumption of certain products, it is also referred to as excise tax.",
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "Any manufacturer or importer of a product that is subject to Excise Duty by law is required to declare and pay Excise Duty.",
          "There is no threshold on company size for Excise Duty. A taxpayer who manufactures taxable products must declare and pay Excise Duty regardless of the size of the business.",
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
          "The obligations of Excise Duty registered taxpayers are detailed in Chapter 2, section one of the law establishing Excise Duty. Excise Duty registered taxpayers must:",
          "<ul><li>Keep registers.</li><li>Affix a tax stamp on a taxable product when required.</li><li>Submit a reconciliation statement on the usage of tax stamps to the Tax Administration.</li><li>Keep books of accounts.</li></ul>",
        ],
      },
    },
    {
      id: "who-pays-excise-duty",
      title: { en: "Who pays Excise Duty", fr: "Qui paie les droits d'accise", rw: "Uwishyura amahoro ku bicuruzwa byihariye" },
      content: {
        en: [
          "Excise Duty is paid by the manufacturer or importer of the taxable products. These costs are expected to be passed on to consumers in the form of higher selling prices.",
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
          "Excise Duty can be charged on a specific, ad valorem, or mixed basis.",
          "<ul><li><strong>Specific Excise Duty</strong> charges a fixed amount of tax per unit of the product. For example, Excise Duty can be charged on premium oil at a fixed amount per litre.</li><li><strong>Ad valorem Excise Duty</strong> charges a percentage of the taxable value of the product. For example, beer may be charged as a percentage of taxable value.</li><li><strong>Mixed Excise Duty</strong> charges both a fixed amount per unit and a percentage of the taxable value. For example, cigarettes may be charged by retail price and by pack.</li></ul>",
        ],
      },
    },
    {
      id: "taxable-products-and-rates",
      title: { en: "Taxable products and rates", fr: "Produits taxables et taux", rw: "Ibicuruzwa bisoreshwa n'ibipimo" },
      content: {
        en: [
          "The tax rates for Excise Duty vary depending on the product. The taxable base for ad valorem Excise Duty on locally manufactured products is calculated according to the selling price, excluding all other taxes.",
          "The rates of Excise Duty are the same for both domestic and imported products.",
          "<blockquote><p><strong>Example</strong>: Amahoro produces fruit juice. In one tax period, she manufactures and sells 10,000 small bottles for a pre-tax selling price of FRW 400 each, for total taxable sales of FRW 4,000,000.</p><p>If the ad valorem Excise Duty rate is 10%, the Excise Duty due is FRW 4,000,000 * 10% = FRW 400,000.</p></blockquote>",
          "Where a product is subject to mixed Excise Duty, both the ad valorem part and the fixed per-unit part must be considered when calculating the total Excise Duty due.",
        ],
      },
    },
    {
      id: "exemptions-for-excise-duty",
      title: { en: "Exemptions for Excise Duty", fr: "Exonerations des droits d'accise", rw: "Ibisonewe amahoro ku bicuruzwa byihariye" },
      content: {
        en: [
          "The following goods are exempt from Excise Duty:",
          "<ul><li>Goods for charitable organizations.</li><li>Vehicles assembled in Rwanda.</li><li>One personal vehicle of a returning Rwandan diplomat.</li><li>One vehicle of a Rwandan returnee or other person returning from a foreign country who fulfils exemption conditions set under customs law.</li><li>Minibuses and buses that carry not less than 14 persons, lorries, single cabin pickups manufactured to carry goods, refrigerating vehicles, tourist vehicles, ambulances, and vehicles designed for persons with disabilities.</li><li>Products specifically manufactured for export.</li><li>Products sold to duty free shops and other legally determined persons.</li></ul>",
        ],
      },
    },
    {
      id: "tax-stamps",
      title: { en: "Tax stamps", fr: "Timbres fiscaux", rw: "Kashe z'umusoro" },
      content: {
        en: [
          "A tax stamp is a sign affixed on some products subject to Excise Duty to show retailers and consumers that Excise Duty has been paid.",
          "Products requiring tax stamps include cigarettes, wines, and liquors. Cigarettes require a stamp on each pack of 20 cigarettes, while wines and liquors require a stamp on each bottle.",
          "Tax stamps can be purchased at cost price from RRA. Taxpayers can call 3004 for details on purchasing tax stamps.",
        ],
      },
    },
    {
      id: "annexures",
      title: { en: "Annexures", fr: "Annexes", rw: "Imigereka" },
      content: {
        en: [
          "Download the Excise Duty annexures from the e-Tax website. The Excise annexure file has two tabs: Raw Materials and Excise.",
          "<strong>Raw Materials tab</strong>",
          "This tab records raw materials used in manufacturing taxable products during the tax period. Each raw material used for production of each product on each date should have its own row.",
          "For example, if two raw materials are used to produce two separate products on eight days of production, 32 rows are required in the annexure.",
          "The tab captures product name, production date, name of raw materials used, opening stock, locally purchased quantity, imported quantity, quantities used for production, quantities spoiled, and closing stock.",
          "Units can be chosen by the taxpayer, such as grams, kilograms or tonnes, but should remain consistent for each raw material. The closing stock should equal opening stock minus quantities used for production and quantities spoiled.",
          "<strong>Excise tab</strong>",
          "This tab records sales of taxable products sold during the tax period. There are different Excise tabs for cigarettes, telephone services and other excisable products, but the information is similar.",
          "Each product type sold on each date for each specific unit price should have its own row. If two different sized products of the same brand are sold on the same day, they should be entered on separate rows.",
          "The tab captures delivery date, item name, container type, quantity per container, unit of measurement, package type, quantity in package, packages in store, packages out of factory, quantity out of factory, total adjustment, total export, taxable units, unit price, taxable value, tax due, and remaining stock.",
          "Total taxable units are calculated as the number of units sold in kilograms or litres minus the number of units manufactured for export. Tax due should equal total taxable value multiplied by the applicable Excise Duty rate for that product.",
        ],
      },
    },
    {
      id: "declaration-and-payment",
      title: { en: "Declaration and payment", fr: "Declaration et paiement", rw: "Kumenyekanisha no kwishyura" },
      content: {
        en: [
          "Excise Duty is declared on a monthly basis and must be declared and paid within five days after the end of each tax period.",
          "The declaration process for Excise Duty is similar to other domestic taxes.",
          "After the Excise Duty annexures have been completed, validated, and saved in the C:/RRA folder on the user's local machine, the taxpayer returns to e-Tax to complete the Excise Duty declaration.",
          "The declaration requires similar data to the annexures. The declaration uses the total combined values for all transactions during that tax period. After entering the required fields, save the declaration, upload the annexures, compare values, certify, and submit.",
          "If the declaration and annexure values match, the taxpayer certifies and submits the declaration. If the values do not match, the taxpayer should correct the annexures or declaration before submission.",
          "After submitting, view the acknowledgement receipt to get the RRA reference number and total tax due required for payment.",
          "<blockquote><p><strong>Example</strong>: An Excise Duty declaration shows Excise Duty due of FRW 192,000 for the tax period. After saving the declaration form, the taxpayer uploads the annexures, compares values, certifies the declaration, submits it, and uses the acknowledgement receipt to pay before the deadline.</p></blockquote>",
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
          "A domestic producer or importer who does not keep stamp registers, records, related documents, or stamp reconciliation statements is subject to an administrative fine between FRW 1,000,000 and FRW 2,000,000.",
          "A domestic producer or importer may also be penalized for failing to affix tax stamps to appropriate products, affixing them incorrectly, defacing them, submitting an incorrect or incomplete reconciliation statement, applying stamps to products for which they are not intended, or selling products subject to Excise Duty without tax stamps.",
          "Upon conviction, this can result in a fine between FRW 1,000,000 and FRW 2,000,000 or imprisonment for six months to one year. If the offender is not an individual, the fine may range from FRW 5,000,000 to FRW 10,000,000. In case of recidivism within two years, the fine is doubled.",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
