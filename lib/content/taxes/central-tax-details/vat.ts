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
          "The list of zero-rated goods and services is detailed in Article 7 of Law N°049/2023 of 05/09/2023.",
          "Zero-rated goods and services include exported goods and auxiliary services, exported services, minerals sold on the domestic market, international transportation services for goods entering Rwanda and goods in transit, commission fees charged to tourists for all-inclusive tour package booking services, goods sold in duty-free shops as provided by customs law, goods supplied in shops intended for persons working in specified security organs, and goods or services intended for special categories of persons or approved projects.",
          "Special categories include diplomats accredited to Rwanda, international organisations with agreements signed with Rwanda, local non-governmental organisations receiving donated goods and services through funding by countries or international organisations with agreements signed with Rwanda, projects funded by partners with signed agreements, and locally assembled electric or hybrid vehicles with related batteries and charging station equipment.",
          "<blockquote><p><strong>Example</strong>: Innocent designs and manufactures clothes. He sells FRW 236,000 VAT inclusive within Rwanda, with input VAT of FRW 10,000. He also exports FRW 300,000 VAT exclusive to Kenya, with input VAT of FRW 30,000.</p><p><strong>Total VAT exclusive sales:</strong><br/>(FRW 236,000 / 1.18) + FRW 300,000 = FRW 500,000</p><p><strong>Output VAT on taxable local sales:</strong><br/>FRW 200,000 * 18% = FRW 36,000</p><p><strong>Input VAT:</strong><br/>FRW 10,000 + FRW 30,000 = FRW 40,000</p><p><strong>VAT due:</strong><br/>FRW 36,000 - FRW 40,000 = FRW -4,000. Innocent requests a VAT refund from RRA of FRW 4,000.</p></blockquote>",
        ],
      },
    },
    {
      id: "goods-and-services-exempted-from-vat",
      title: { en: "Goods and services exempted from VAT", fr: "Biens et services exoneres de TVA", rw: "Ibicuruzwa na serivisi bisonewe VAT" },
      content: {
        en: [
          "VAT exemption means that no output VAT is charged on the goods or services, and no input VAT can be claimed.",
          "The list of exempt goods and services is provided by VAT law, including Article 1 of Law No 009/2025 of 27/05/2025 amending Article 8 of Law N°049/2023 of 05/09/2023.",
          "The practical effect is different from zero-rating: exempt sales do not charge output VAT, but the taxpayer also cannot claim input VAT connected to those exempt sales.",
          "<blockquote><p><strong>Example</strong>: Lucie sells processed and unprocessed agricultural products. Processed agricultural products are taxable. Unprocessed agricultural products are exempt.</p><p>She sells FRW 3,540,000 VAT inclusive of processed agricultural products and FRW 1,000,000 VAT exclusive of unprocessed agricultural products.</p><p><strong>Total VAT exclusive sales:</strong><br/>(FRW 3,540,000 / 1.18) + FRW 1,000,000 = FRW 4,000,000</p><p><strong>Taxable sales:</strong><br/>FRW 3,000,000</p><p><strong>Output VAT:</strong><br/>FRW 3,000,000 * 18% = FRW 540,000</p><p>Lucie paid input VAT of FRW 500,000 but cannot distinguish which inputs contributed to taxable or exempt sales. Allowable input VAT is therefore (FRW 3,000,000 / FRW 4,000,000) * FRW 500,000 = FRW 375,000.</p><p><strong>VAT due:</strong><br/>FRW 540,000 - FRW 375,000 = FRW 165,000.</p></blockquote>",
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
          "If a taxpayer is in a refund position, they must provide a valid bank account for deposit of the refund. Bank account details can be submitted through E-Tax by updating taxpayer details.",
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
          "The VAT annexure has tabs for Sales, Purchases, VAT Importation, Deductible VAT Reverse, and VAT Retained. Only tabs applicable to the tax period need to be completed, validated and saved.",
          "<strong>Sales tab</strong>",
          "The Sales tab is used for all sales during the tax period, whether taxable, exempt, zero-rated or exported. Sales may be entered manually or copied from the Electronic Invoicing System. The taxpayer records buyer details, invoice details, VAT exclusive sales, exempt sales, zero-rated sales, exports, taxable sales and output VAT.",
          "<strong>Purchases tab</strong>",
          "The Purchases tab is used for locally purchased inputs. It is similar to the Sales tab, but uses supplier details and records the amount without VAT and the VAT paid on local purchases.",
          "<strong>VAT Importation tab</strong>",
          "The VAT Importation tab is used for imported inputs. It records customs station, customs declaration number and date, nature of goods, origin, customs value (CIF) and VAT paid on imports.",
          "After all applicable annexures have been completed, validated and saved in the C:/RRA folder, the taxpayer returns to E-Tax to complete the declaration form. The declaration form uses total combined values for all transactions during the period. After saving the declaration form, upload the annexures, compare the values, certify and submit the declaration.",
          "After successful submission, click 'View Acknowledgement Receipt' to view the RRA reference number and total tax due for payment.",
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
          "The penalties for under-declaration depend on whether the taxpayer rectifies their own declaration or whether RRA finds that the taxpayer declared less than the correct amount.",
          "If a taxpayer submits a declaration and RRA finds that the declared tax due is at least 10% but not more than 20% lower than the correct amount, the taxpayer must pay the difference and a fine of 10% of the understatement.",
          "If RRA finds that the declared tax due is more than 20% lower than the correct amount, the taxpayer must pay the difference, a fine of 20% of the understatement, and late-payment interest.",
          "Late-payment interest is charged at 0.5% where the delay does not exceed six months, 1% where the delay is six to twelve months, and 1.5% where the delay is more than twelve months.",
          "If the taxpayer self-corrects after the deadline but before notification of an imminent audit, the fine is 5% of the tax due if the declaration and payment deadline has not been exceeded by 30 days, 10% if the deadline has been exceeded by more than 30 days but not more than 60 days, and 30% if the deadline has been exceeded by more than 60 days.",
          "A taxpayer granted an extension for submitting a tax declaration is not subject to the administrative fine for late payment if the extension period is respected. Interest for late payment remains due.",
          "<blockquote><p><strong>Example</strong>: Immaculée declares PAYE due of FRW 125,000. During an audit four months later, RRA finds that she should have declared FRW 165,000. The understatement is 24.2%, so she must pay the FRW 40,000 difference plus penalties and interest.</p><p><strong>Interest:</strong><br/>FRW 40,000 * 1.5% * 4 months = FRW 2,400</p><p><strong>Penalty:</strong><br/>FRW 40,000 * 10% * 2 = FRW 8,000</p><p>In addition to the FRW 40,000 difference, she pays FRW 10,400 in penalties and interest.</p></blockquote>",
        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
