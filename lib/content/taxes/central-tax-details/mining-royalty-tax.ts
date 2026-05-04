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
      "Mining Royalty Tax is a tax withheld from local mining operators by either a domestic mineral processing facility or an individual/entity exporting minerals from Rwanda.",
      "Tax on Minerals ensures that all Rwandans share in the benefits from the country's natural resources when these are taken out of Rwanda.",
      "Mining Royalty Tax is a type of withholding tax but cannot be claimed back in Income Tax declarations.",
    ],
  },
  sections: [
    {
      id: "registration",
      title: { en: "Registration", fr: "Registration", rw: "Kwiyandikisha" },
      content: {
        en: [
          "Any taxpayer who qualifies as a local mineral processing facility or a person who exports minerals from Rwanda must register for Mining Royalty Tax.",
          "If the miner and the exporter constitute the same operator, this person pays both Mining Royalty Tax and Export Tax at the time of export.",
          "All mining companies operating in Rwanda are required to have a valid license issued by Rwanda Mines, Petroleum and Gas Board (RMB). A taxpayer who buys minerals domestically within Rwanda has to pay Mining Royalty Tax.",
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
          "There are two types of valuation method for Mining Royalty Tax: norm value and gross value.",
          "<strong>Norm value</strong> means the value of minerals on the international market as at the date of grant to the dealer in minerals of a certificate for the sale of such minerals, excluding processing costs approved by the competent authority.",
          "<strong>Gross value</strong> means the value of minerals before deducting expenses associated with processing them in a local mineral processing facility.",
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
          "The rates of Mining Royalty Tax depend on the type of minerals. RRA considers six different types of minerals:",
          {
            type: "table",
            headers: ["Mineral category", "Tax rate"],
            rows: [
              ["Base metals", "3% of the norm value"],
              ["Gemstones", "2% of the gross value"],
              ["Platinum group metals", "2% of the norm value"],
              ["Rare earth elements", "2% of the norm value"],
              ["Energy minerals", "3% of the norm value"],
              ["Gold", "0.5% of the norm value"],
            ],
          },
          "<blockquote><p><strong>Example</strong>: ABC Mining Ltd exported 340kg of a product falling in base metals. The value of minerals on the international market is FRW 16,000 per kg.</p><p>The norm value is 340kg * FRW 16,000 = FRW 5,440,000. The tax rate for base metals is 3%, so the Mining Royalty Tax due is FRW 5,440,000 * 3% = FRW 163,200.</p></blockquote>",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "Mining Royalty Tax is declared and paid on a monthly basis. A taxpayer declares and pays any Mining Royalty Tax withheld within 15 days following the month in which the tax was withheld.",
          "The declaration process for Mining Royalty Tax is similar to other domestic taxes.",
          "The taxpayer downloads the WOP Mining Royalty annexure from the withholding menu in e-Tax. The annexure has one tab that must be completed, validated, and saved.",
          "Each row in the WOP Mining Royalty annexure is for a separate type of mineral and should contain the aggregated data for that type of mineral during the tax period.",
          "<ul><li>Product of minerals.</li><li>Quantity purchased in kilograms.</li><li>Gross value, required for gemstones.</li><li>Norm value, required for other categories excluding gemstones.</li><li>Tax rate.</li><li>Tax due.</li></ul>",
          "After the annexure has been completed, validated, and saved, the taxpayer returns to e-Tax to complete the Mining Royalty Tax declaration, upload the annexure, compare the values, certify, and submit.",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
