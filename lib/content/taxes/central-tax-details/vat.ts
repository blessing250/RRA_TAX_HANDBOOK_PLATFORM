import {
  centralTaxLastUpdated,
  type CentralTaxDetailPage,
} from "@/lib/content/taxes/central-tax-details/shared"

export const vatDetail: CentralTaxDetailPage = {
  slug: "value-added-tax",
  title: {
    en: "Value Added Tax (VAT)",
    fr: "Taxe sur la valeur ajoutee (TVA)",
    rw: "Umusoro ku nyongeragaciro (VAT)",
  },
  intro: {
    en: [
      "VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service, but paid on their behalf by taxpayers.",
      "VAT applies to a wide range of products to ensure fairness across business sectors. Some goods and services are exempt or zero-rated for VAT because they have wider economic benefits.",
      "The normal rate of VAT is 18%. A zero rate of 0% and exemptions also apply to certain goods and services.",
    ],
  },
  sections: [
    {
      id: "vat-registration",
      title: { en: "VAT registration", fr: "Registration TVA", rw: "Kwiyandikisha kuri VAT" },
      content: {
        en: [
          "A taxpayer must register for VAT if their turnover is above FRW 20,000,000 for any twelve-month period, or above FRW 5,000,000 for three consecutive months. This includes taxable, exempt, and zero-rated sales.",
          "Any taxpayer may also choose to register for VAT voluntarily.",
        ],
      },
    },
    {
      id: "obligations-of-vat-registered-taxpayers",
      title: { en: "Obligations of VAT registered taxpayers", fr: "Obligations des contribuables TVA", rw: "Inshingano z'abiyandikishije kuri VAT" },
      content: {
        en: [
          "VAT registered taxpayers must:",
          "<ul><li>Display the VAT registration certificate clearly at the place of business.</li><li>Use an Electronic Invoicing System (EIS), such as EBM, to issue invoices on every transaction.</li><li>Submit a monthly or quarterly VAT declaration within fifteen days after the end of the tax period.</li><li>Be available to receive RRA officers and make books of accounts available.</li></ul>",
        ],
      },
    },
    {
      id: "taxpayers-responsible-to-pay-vat",
      title: { en: "Taxpayers responsible to pay VAT", fr: "Contribuables responsables de la TVA", rw: "Abasora bashinzwe kwishyura VAT" },
      content: {
        en: [
          "VAT is paid on behalf of the final consumer by taxpayers. Taxpayers charge VAT on sales, called output VAT, and claim back VAT paid on inputs, called input VAT.",
          "The amount each taxpayer pays is equal to output VAT minus input VAT.",
        ],
      },
    },
    {
      id: "vat-inclusive-and-exclusive-prices",
      title: { en: "VAT inclusive and VAT exclusive prices", fr: "Prix avec et sans TVA", rw: "Ibiciro birimo VAT n'ibitarimo VAT" },
      content: {
        en: [
          "The VAT inclusive price is the price of goods or services including VAT. The VAT exclusive price is the price before VAT has been added.",
          "Goods and services supplied by VAT registered taxpayers must always be sold at the VAT inclusive price. However, when completing the VAT declaration form, the total VAT exclusive price of all sales is entered.",
          "The invoice supplied to the customer must show the VAT exclusive price, the VAT amount, and the VAT inclusive price.",
          {
            type: "table",
            headers: ["Formula", "Use"],
            rows: [
              ["VAT exclusive price * 1.18 = VAT inclusive price", "Calculate price including VAT"],
              ["VAT inclusive price / 1.18 = VAT exclusive price", "Calculate price excluding VAT"],
            ],
          },
        ],
      },
    },
    {
      id: "goods-and-services-taxable-for-vat",
      title: { en: "Goods and services taxable for VAT", fr: "Biens et services soumis a la TVA", rw: "Ibicuruzwa na serivisi bisoreshwa VAT" },
      content: {
        en: [
          "All goods and services supplied in Rwanda are considered either taxable or exempt.",
          "Services are considered to be supplied in Rwanda if the service provider has headquarters in Rwanda, is usually resident in Rwanda, or if the recipient of the services benefits from them within Rwanda.",
        ],
      },
    },
    {
      id: "goods-and-services-zero-rated-for-vat",
      title: { en: "Goods and services that are zero-rated for VAT", fr: "Biens et services au taux zero", rw: "Ibicuruzwa na serivisi bifite VAT ya 0%" },
      content: {
        en: [
          "Zero-rated for VAT means that no output VAT is charged on the goods or services, but input VAT can still be claimed.",
          "Zero-rated goods and services include exported goods and auxiliary services, exported services, minerals sold on the domestic market, international transportation services, some tourist booking services, certain duty-free shop goods, and goods and services intended for special categories of persons or approved projects.",
          "<blockquote><p><strong>Example</strong>: Innocent sells goods within Rwanda and exports some to Kenya. Goods sold within Rwanda are subject to VAT, while goods exported to Kenya are zero-rated. Input VAT connected to zero-rated sales can still be claimed.</p></blockquote>",
        ],
      },
    },
    {
      id: "goods-and-services-exempted-from-vat",
      title: { en: "Goods and services exempted from VAT", fr: "Biens et services exoneres de TVA", rw: "Ibicuruzwa na serivisi bisonewe VAT" },
      content: {
        en: [
          "VAT exemption means that no output VAT is charged on the goods or services, and no input VAT can be claimed.",
          "The list of exempt goods and services is provided by the VAT law. Examples include specific goods and services identified by the law as exempt from Value Added Tax.",
          "<blockquote><p><strong>Example</strong>: If a taxpayer sells both processed agricultural products that are taxable and unprocessed agricultural products that are exempt, the taxpayer calculates output VAT only on taxable sales and apportions input VAT when inputs cannot be directly separated.</p></blockquote>",
        ],
      },
    },
    {
      id: "exemption-from-registering-for-vat",
      title: { en: "Exemption from registering for VAT", fr: "Exemption d'enregistrement TVA", rw: "Gusonerwa kwiyandikisha kuri VAT" },
      content: {
        en: [
          "Taxpayers exclusively making exempt or zero-rated sales may write to the Commissioner General of RRA requesting exemption from registering for VAT.",
          "The letter should identify the taxpayer's name and TIN, state the request to be exempted from VAT registration, and contain supporting documents proving the taxpayer does not make taxable sales.",
          "Taxpayers whose business is totally exempted from VAT are exempted from the obligation to register for VAT. Taxpayers making zero-rated sales who intend to claim input tax credits must register for VAT.",
        ],
      },
    },
    {
      id: "vat-reverse-charge",
      title: { en: "VAT reverse charge", fr: "Autoliquidation de TVA", rw: "VAT reverse charge" },
      content: {
        en: [
          "VAT reverse charge may be offset as input tax only if the services received are not available in the local market.",
          "Services are considered not available in Rwanda if no one can deliver identical or similar services on the local market. The taxpayer must request authorization from the Ministry of Finance and Economic Planning.",
          "If the services are available on the local market, the VAT may not be offset as input tax. This encourages taxpayers to work with domestic businesses.",
        ],
      },
    },
    {
      id: "vat-retained-by-public-institutions",
      title: { en: "VAT retained by public institutions", fr: "TVA retenue par les institutions publiques", rw: "VAT ifatirwa n'inzego za Leta" },
      content: {
        en: [
          "Government and public institutions must withhold 18% VAT on all taxable supplies within public tenders.",
          "The taxpayer who wins the tender declares the taxable supplies as output VAT, but can offset the VAT retained by public institutions. The VAT is paid by the public institution on behalf of the taxpayer.",
          "The taxpayer must keep proof that the VAT was withheld. The public institution must pay the VAT to RRA by the fifteenth day of the following month from the invoice date.",
        ],
      },
    },
    {
      id: "vat-refund",
      title: { en: "VAT refund", fr: "Remboursement TVA", rw: "Gusubizwa VAT" },
      content: {
        en: [
          "A taxpayer can be in a negative VAT position. In this case, the taxpayer is due a VAT refund.",
          "If the VAT refund claimed is small relative to the business size, as decided by RRA, it is carried forward and automatically used to offset future VAT payments.",
          {
            type: "table",
            headers: ["Taxpayer size", "Refund carried forward up to"],
            rows: [
              ["Small taxpayer", "FRW 500,000"],
              ["Medium taxpayer", "FRW 2,000,000"],
              ["Large taxpayer", "FRW 5,000,000"],
            ],
          },
          "If the VAT refund claimed is larger than these thresholds, RRA audits the refund and may contact the taxpayer for evidence. If the refund is correct, RRA provides the refund to the taxpayer.",
        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
          "VAT is declared and paid on a monthly basis. Taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis.",
          "Whether monthly or quarterly, the VAT declaration must be submitted and paid by the 15th of the month following the end of the tax period.",
          "Quarterly VAT periods are January to March, April to June, July to September, and October to December. Each must be declared and paid by the 15th day of the month following the quarter.",
          "The declaration process for VAT is similar to other domestic taxes. Download the VAT annexures from e-Tax, complete only the applicable tabs, validate and save the file, then complete the declaration form in e-Tax.",
          "The VAT annexure includes Sales, Purchases, VAT Importation, Deductible VAT Reverse, and VAT Retained tabs depending on the transactions made during the tax period.",
        ],
      },
    },
    {
      id: "vat-refund-for-privileged-persons",
      title: { en: "VAT refund for privileged persons", fr: "Remboursement TVA pour personnes privilegiees", rw: "Gusubizwa VAT ku bantu bafite uburenganzira bwihariye" },
      content: {
        en: [
          "VAT refund for privileged persons refers to refunds available to certain consumers on VAT paid on goods or services.",
          "Privileged persons include diplomats or individuals on diplomatic missions, non-governmental organisations, inter-governmental organisations, and donor-funded projects.",
          "Privileged persons claim refunds online using the e-Tax system.",
        ],
      },
    },
    {
      id: "deductible-vat-reverse-tab",
      title: { en: "Deductible VAT reverse tab", fr: "Onglet TVA reverse deductible", rw: "Deductible VAT reverse tab" },
      content: {
        en: [
          "The Deductible VAT Reverse tab applies to taxpayers who received services from foreign suppliers during the tax period.",
          "For each transaction, enter supplier name, nature of services supplied, invoice number, invoice date, total invoice amount, and VAT reverse charge amount.",
          "If all services are taxable, the VAT reverse charge amount is equal to total invoice amount multiplied by 18%.",
        ],
      },
    },
    {
      id: "payment",
      title: { en: "Payment", fr: "Paiement", rw: "Kwishyura" },
      content: {
        en: [
          "VAT payments can be made through Mobile Money, Airtel Money, MobiCash, mobile banking, or Internet Banking.",
        ],
      },
    },
    {
      id: "vat-penalties",
      title: { en: "VAT penalties", fr: "Penalites TVA", rw: "Ibihano bya VAT" },
      content: {
        en: [
          "VAT penalties may apply for under-declaration, late payment, late filing, or other non-compliance with VAT obligations.",
          "The penalties for under-declaration depend on whether the taxpayer corrects the declaration themselves or whether RRA finds that the taxpayer declared less than the correct amount.",
          "Interest for late payment is charged according to the period of delay. Repeated offences within two years may lead to increased fixed administrative fines.",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
