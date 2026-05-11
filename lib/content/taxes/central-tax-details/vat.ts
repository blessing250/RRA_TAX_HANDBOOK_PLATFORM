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
    `VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers. `,
    `VAT is applied on a wide range of products to ensure fairness across business sectors. However, there are some goods and services that are exempt or zero-rated for VAT because those goods and services have benefits to efficiency across the rest of the economy.`,
    `The normal rate of VAT is 18%. There is also a zero-rate (0%) and exemptions applicable for certain types of goods and services.`,

    ],
  },
  sections: [
    {
      id: "vat-registration",
      title: { en: "VAT registration", fr: "Registration TVA", rw: "Kwiyandikisha kuri VAT" },
      content: {
        en: [
    ` A taxpayer must register for VAT if their turnover is above FRW 20,000,000 for any twelve-month period, or above FRW 5,000,000 for three consecutive months. This includes all taxable, exempt and zero-rated sales.`,
    `In addition, any taxpayer may choose to register for VAT voluntarily. `,

        ],
      },
    },
    {
      id: "obligations-of-vat-registered-taxpayers",
      title: { en: "Obligations of VAT registered taxpayers", fr: "Obligations des contribuables TVA", rw: "Inshingano z'abiyandikishije kuri VAT" },
      content: {
        en: [
     `  VAT registered taxpayers must:`,
     `<ul>`,
      `<li>-	Display clearly the VAT registration certificate in plain view at the place of business.</li>`,
      `<li>-	Use an Electronic Invoicing System (EIS), such as EBM to issue invoices on every transaction.</li>`,
      `<li>-	Submit a monthly or quarterly VAT declaration within fifteen days after the end of the tax period.<li>`,
     `<li>-	Be available at all times to receive RRA officers and to make available books of accounts.<li>`,
     `</ul>`
        ],
      },
    },
    {
      id: "taxpayers-responsible-to-pay-vat",
      title: { en: "Taxpayers responsible to pay VAT", fr: "Contribuables responsables de la TVA", rw: "Abasora bashinzwe kwishyura VAT" },
      content: {
        en: [
      ` VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers. `,
      `This means that taxpayers charge VAT on their sales (output VAT), whilst claiming back VAT paid on their inputs (input VAT). The amount each taxpayer pays is therefore equal to output VAT minus input VAT.`,

        ],
      },
    },
    {
      id: "vat-inclusive-and-exclusive-prices",
      title: { en: "VAT inclusive and VAT exclusive prices", fr: "Prix avec et sans TVA", rw: "Ibiciro birimo VAT n'ibitarimo VAT" },
      content: {
        en: [
      ` The VAT inclusive price means the price of the goods or services including VAT. The VAT exclusive price means the price of the goods or services that is not the final cost, to which VAT has not yet been added. `,
        `Goods and services supplied by VAT registered taxpayers must always be sold at the VAT inclusive price. However, when completing the VAT declaration form, the total VAT exclusive price of all sales is entered.`,
       `The invoice supplied to the customer must show the VAT exclusive price, amount of VAT and VAT inclusive price.`,
        ` To calculate the VAT inclusive or VAT exclusive price of taxable goods and services:`,
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
       `All goods and services supplied in Rwanda are considered either taxable or exempt. `,
        `Services are considered to be supplied in Rwanda if the services provider: `,
       `<ul>`,
       `<li> -	Has their headquarters in Rwanda.</li>`,
        `<li>-	Is usually resident in Rwanda.</li>`,
        `<li>-	Or if the recipient of the services benefits from it within Rwanda.</li>`,
        `</ul>`,
        ],
      },
    },
    {
      id: "goods-and-services-zero-rated-for-vat",
      title: { en: "Goods and services that are zero-rated for VAT", fr: "Biens et services au taux zero", rw: "Ibicuruzwa na serivisi bifite VAT ya 0%" },
      content: {
        en: [
        ` Zero-rated for VAT purposes means that no output VAT is charged on the goods or services, but input VAT can still be claimed. `,
         `The list of zero-rated goods and services, detailed in Article 7 of Law N°049/2023 of 05/09/2023, includes:`,
         `<ul>`, 
         `<li>-	Exported goods and their auxiliary services, including those that are already exempted.<li>`,
        `<li>-	Exported services.</li>`,
        `<li>-	Minerals sold on the domestic market.</li>`,
        `<li>-	International transportation services of goods entering Rwanda and transportation services of goods in transit in Rwanda to other countries and related services.</li>`,
         `	Commission fee charged to a tourist for all-inclusive tour package booking service:`,
           `<li>-	Goods sold in the shops that are exempted from tax as provided for by the law governing customs.</li>`,
          `<li>-	Goods supplied in the shop intended for persons working in such security organs as provided for by the legislation governing such a shop.</li>`,
          `<li>-	Goods and services intended for special categories of persons that are used in their missions:</li>`,
          `<li> • Diplomats accredited to Rwanda. </li>`,
          `<li> • International organisations having signed agreements with the Republic of Rwanda.</li>`,
          `<li> • Local on-governmental organizations to which goods and services are donated and acquired through funding by countries or international organizations having signed agreements with the Republic of Rwanda.</li>`,
          `<li> • Pojects funded by partners having signed agreements with the Republic of Rwanda.</li>`,
         `<li>  •  Locally assembled electric automotive vehicles, hybrid automotive vehicles, relevant batteries and their electric charging station equipment.<li>`,
          `<ul>`,
          `<i>    Example</i>`,
           `<i>  Innocent designs and manufactures clothes. He sells within Rwanda but also exports some to Kenya.  The goods sold within Rwanda are subject to VAT as normal. The goods exported to Kenya are zero-rated. He pays input VAT on the material used in the manufacturing.</i>`,
          `<i> He sells FRW 236,000 (VAT inclusive) within Rwanda, with VAT paid on inputs of FRW 10,000. He exports FRW 300,000 (VAT exclusive) to Kenya, with VAT paid on inputs of FRW 30,000. </i>`,
          `<i> The total (VAT exclusive) sales is therefore:</i>`,
           `<i>  (FRW 236,000 / 1.18) + FRW 300,000 = FRW 200,000 + FRW 300,000 = FRW 500,000. </i>`,
          `<i> The taxable sales exclude the exports so is FRW 200,000. The output VAT is therefore:</i>`,
           `<i>   FRW 200,000 * 18% = FRW 36,000. </i>`,
            `<i>  The input VAT includes the VAT paid for the taxable sales, as well as the zero-rated sales. The input VAT is therefore: </i>`,
              `<i>  FRW 10,000 + FRW 30,000 = FRW 40,000</i>`,
              `<i>  Therefore, Innocent’s VAT due is equal to:</i>`,
              `<i>  FRW 36,000 – FRW 40,000 = FRW -4,000.</i>`,
              `<i>  Innocent requests a VAT refund from RRA of FRW 4,000.</i>`,

],
      },
    },
    {
      id: "goods-and-services-exempted-from-vat",
      title: { en: "Goods and services exempted from VAT", fr: "Biens et services exoneres de TVA", rw: "Ibicuruzwa na serivisi bisonewe VAT" },
      content: {
        en: [
    `  VAT exemption means that no output VAT is charged on the goods or services, and no input VAT can be claimed. `,
    `The list of exempt goods and services, detailed in Article 1 of law No 009/2025 of 27/05/2025 emending article 8 of Law N°049/2023 of 05/09/2023.`,
    `Here you will find the  <a href=\"http://www.rra.gov.rw/fileadmin/user_upload/Law_amending_the_2023_VAT_law___May_2025.pdf"> list of goods and services that are zero rated and exempted from value added tax</a> as provided by the law.`,
     `<i>  Example</i>`,
      `<i>    Lucie sells processed and unprocessed agricultural products. The processed agricultural products are subject to VAT as normal. The unprocessed agricultural products are exempt. </i>`,
      `<i>       She sells FRW 3,540,000 (VAT inclusive) of processed agricultural products. She sells FRW 1,000,000 (VAT exclusive) of unprocessed agricultural products. </i>`,
      `<i>      The total (VAT exclusive) sales are therefore:  </i`,
      `<i> (FRW 3,540,000 / 1.18) + FRW 1,000,000 = FRW 3,000,000 + FRW 1,000,000 = FRW 4,000,000. </i>`,
      `<i> The taxable sales exclude the exempt sales so is FRW 3,000,000. The output VAT is therefore: </i>`,
      `<i> FRW 3,000,000 * 18% = FRW 540,000. </i>`,
      `<i> She paid VAT on inputs of FRW 50０,０００ but cannot distinguish between which inputs contributed to which sales Therefore, the allowable input VAT is equal to: </i>`,
      `<i> (FRW 3,０００,０００ / FRW 4,０００,０００) * FRW 5００,０００ = 0.７５ * FRW 5００,００0 = FRW 3７５,０00</i>`,
      `<i> Therefore, Amahoro’s VAT due is equal to: </i>`,
      `<i> FRW 540,000 – FRW 375,000 = FRW 165,000.</i>`,

        ],
      },
    },
    {
      id: "exemption-from-registering-for-vat",
      title: { en: "Exemption from registering for VAT", fr: "Exemption d'enregistrement TVA", rw: "Gusonerwa kwiyandikisha kuri VAT" },
      content: {
        en: [
        ` Taxpayers exclusively making exempt or zero-rated sales may write to the Commissioner General of RRA requesting exemption from registering for VAT. This letter should:`,
        ` <ul>`,
        `<li>-  Identify the taxpayer’s name and TIN.</ li>`, 
        `<li>-  State the request to be exempted from the requirement to register for VAT.</li>`,
        ` <li>- Contain all supporting documents proving the taxpayer does not make any taxable sales.</li`,
        `<ul>`,
        `Taxpayers whose business is totally exempted from VAT are exempted from the obligation to register for VAT. However, taxpayers making zero-rated sales who intend to claim input tax credits must register for VAT to do so.`,

        ],
      },
    },
    {
      id: "vat-reverse-charge",
      title: { en: "VAT reverse charge", fr: "Autoliquidation de TVA", rw: "VAT reverse charge" },
      content: {
        en: [
        ` This VAT may be offset as an input tax only if the services received are not available in the local market. Services are considered not to be available in Rwanda if there is no one who can deliver identical or similar services on the local market. The taxpayer who wants to acquire a service not available in Rwanda must request for authorization from the Ministry of Finance and Economic Planning.`,  
        `If the services are available on the local market, then the VAT may not be offset as an input tax. This is to encourage taxpayers to work with domestic business.`,

        ],
      },
    },
    {
      id: "vat-retained-by-public-institutions",
      title: { en: "VAT retained by public institutions", fr: "TVA retenue par les institutions publiques", rw: "VAT ifatirwa n'inzego za Leta" },
      content: {
        en: [
      ` Government and public institutions must withhold 18% VAT on all taxable supplies within public tenders. The taxpayer who has won the tender is required to declare the taxable supplies as output VAT, but can offset the VAT Retained by Public Institutions. The VAT is paid by the public institution on behalf of the taxpayer. `,
       `The taxpayer must keep proof that this VAT was withheld. The public institution must pay the VAT to RRA by the fifteenth day of the following month, from the date of the invoice, as with regular VAT payments.`,

        ],
      },
    },
    {
      id: "vat-refund",
      title: { en: "VAT refund", fr: "Remboursement TVA", rw: "Gusubizwa VAT" },
      content: {
        en: [
        `  It is possible for the final VAT due of a taxpayer to be negative. In this case, the taxpayer is due a VAT refund. There is no further action required of the taxpayer.`,
        `An example of what this may look like on the tax declaration is shown below.`,
        `If the VAT refund claimed is a small amount relative to the size of the business, as decided by RRA, this will be carried forward and will automatically be used to offset against future VAT payments. This is determined by the scale of the business as below`,

          {
            type: "table",
            headers: ["Taxpayer size", "Refund carried forward up to"],
            rows: [
              ["Small taxpayer", "FRW 500,000"],
              ["Medium taxpayer", "FRW 2,000,000"],
              ["Large taxpayer", "FRW 5,000,000"],
            ],
          },
       ` If the VAT refund claimed is larger than these thresholds RRA will audit the refund and may contact the taxpayer for further evidence. If the refund is correct and accurate, RRA will contact the taxpayer and provide a bank cheque for the refund amount. `,
      ` If a taxpayer is in a refund position, they are required to provide a valid bank account for the deposit of the refund. The following is the procedure for submitting bank account details: E-Tax > Update details  `,

        ],
      },
    },
    {
      id: "declaration",
      title: { en: "Declaration", fr: "Declaration", rw: "Kumenyekanisha" },
      content: {
        en: [
      `VAT is declared and paid on a monthly basis. Taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis.`,
     ` Whether monthly or quarterly, the VAT declaration must be submitted and paid by the 15th of the month following the end of the tax period. `,
     `  This means that monthly declarations concerning the tax period between March 1st and March 31st must be declared to RRA and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared to RRA and paid by May 15th and so on throughout the year.`,
       ` The quarters for taxpayers declaring VAT on a quarterly basis concern the tax period between:`,
      ` <ul>`,
      `<li>   -	1st January to 31st March must be declared and paid by 15th April.<li>`,
      `<li>   -	1st April to 30th June must be declared and paid by 15th July.</li>`,    
      `<li>   -	1st July to 30th September must be declared and paid by 15th October.</li>`,
        `<li> -	1st October to 31st December must be declared and paid by 15th January. </li>`,
        `<ul>`,
       ` The declaration process for VAT is similar to other domestic taxes.`,
        `<strong>1. Annexures</strong>`,
       `  Firstly, download the VAT Annexures from the E-Tax website. The VAT Annexure file has five tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved. `,
        `<strong>2. Sales Tab</strong>`,
        `This tab is applicable for taxpayers who have made sales during the tax period. These must be entered regardless of whether the sales were taxable, exempt, zero-rated or exported.`,
        `This sales data can be entered manually, or can be copied from the Electronic Invoicing System (EIS), a type of EBM Back Office and pasted into the Sales tab. `,
         ` The ‘Sales’ tab has 11 columns. Each row is for a separate transaction. For each transaction, enter details on:`,
        `<ul>`,
        `<li> <strong> Buyer TIN –</strong>  For sales to other businesses, enter the Taxpayer Identification Number (TIN) of the buyer. For sales to final consumers, this can be left empty, where the system will convert it to ‘999999999’ (nine ‘9’s).</li>`,
        `<li><strong> -	Buyer Name – </strong>As above, for sales to other businesses, enter the name of the buyer. For sales to final consumers, this can be left empty. </li>`,
        `<li><strong> -	Nature of Goods – </strong>Enter a brief description of the goods or services that have been sold. </li>`,
        `<li><strong> -	Invoice Number – </strong>Enter the unique invoice number of the transaction; for example, SDC001000000/001. </li>`,
        `<li><strong> -	Invoice Date (dd/mm/yyyy) – </strong>Enter the date of the transaction in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>`,
        `<li><strong> -	Total Amount of Sales (VAT Exclusive) – </strong>Enter the value of the transaction, excluding VAT.</li>`,
        `<li><strong> -	Exempted Sales Amount – </strong>Enter the value of sales of goods or services that were exempt from VAT.</li>`,
        `<li><strong> -	Zero Rated Sales Amount – </strong>Enter the value of sales of goods or services that were zero-rated for VAT purposes. Although exports are also zero-rated, do not include these in this column, instead enter exports in the ‘Exports Amount column’.</li>`,
        `<li><strong> -	Exports Amount – </strong>Enter the value of sales of goods or services that were exported and sold outside Rwanda and therefore zero-rated for VAT purposes.</li>`,
        `<li><strong> -	Taxable Sales – </strong>Enter the total value of taxable sales. This is equal to ‘Total Amount of Sales (VAT Exclusive)’ minus (‘Exempted Sales Amount’ + ‘Zero Rated Sales Amount’ + ‘Exports Amount’).</li>`,
        `<li><strong> -	VAT – </strong>Enter the total output VAT. This is equal to ‘Taxable Sales’ * 18%.</li>`,
        `</ul>`,
        `<strong>3. Purchases Tab</strong>`,
       ` This tab is applicable to any taxpayer who has purchased inputs from within Rwanda during the tax period for use in their goods and services sold.`,
       ` The ‘Purchases’ tab is very similar to the ‘Sales’ tab except that it refers to the locally purchased inputs that have gone into the goods and services listed in ‘Sales’. `,
       `   Fill in the details in the same manner as before, except that it is now the Supplier TIN and Supplier Name that is required. In addition, there is no longer differentiation for exempt, zero-rated or exports, just the ‘Amount without VAT’ and the ‘VAT’ paid on local purchases.`,
         `<strong>   VAT Importation Tab </strong>`,
       `  This tab is applicable for any taxpayer who has imported inputs during the tax period for use in their goods and services sold. This tab uses information from the customs declaration of the imported inputs.`,
         ` The ‘VAT Importation’ tab has 7 columns. Each row is for a separate import transaction. For each transaction, enter details on:`,    
     `<ul>`,
        `<li><strong> -	Customs Station –</strong>  Enter the border post where the goods or services were imported. This is listed under the ‘Office of Destination’ in the top right of the customs declaration. <li>`,
        `<li><strong>  -	Customs Declaration (DD COM) Number – </strong>  Enter the unique customs declaration number, for example: ‘C39012’. This is listed under the ‘Customs Reference’ in the top right of the customs declaration.</li>`,
        `<li><strong> -	Customs Declaration Date –</strong> Enter the date of the importation, which must be entered in the format of DD/MM/YYYY such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted. This is listed next to the ‘Customs Reference’ in the top right of the customs declaration.</li>`,
        `<li><strong> -	Nature of Goods –</strong> Enter a brief description of the goods that have been imported. This is listed in the ‘Packages and descriptions of goods’ section in the middle of the customs declaration.</li>`,
        `<li><strong> -	Origin –</strong> Enter the name of the country where the goods or services purchased from. This means that if a product first comes from the United Kingdom but arrives via boat to Kenya and lorry through Uganda to the Gatuna border, the origin country is the United Kingdom. This is listed under the ‘Country of Origin’ or ‘Cty. orig. Code’ in the middle of the customs declaration.</li>`,
        `<li><strong> -	Customs Value (CIF) –</strong> Enter the value of the goods or services upon entering Rwanda in Rwandan Francs. CIF stands for Cost, Insurance and Freight which means that this value includes the cost of the goods and services from when they originated, but also includes the costs of insurance and freight or transport in getting the goods to Rwanda. The value in FRW is under the ‘Statistical Value’ in the middle right of the customs declaration.</li>`,
        `<li><strong> -	VAT Paid –</strong> Enter the VAT paid on the imports. This is equal to the ‘V02’ Amount in the ‘Calculation of Taxes’ section in the middle of  the  customs declaration.</li>`,
      ` </ul>`,
        ` After all the applicable annexures have been completed, validated and saved in the folder C:/RRA in the user’s local machine, the taxpayer can return to E-Tax to complete the declaration.`,
         `  The declaration form requires similar data to the annexures that have previously been completed. The important distinction is that in the declaration form, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click ‘save’ to calculate the grey boxes automatically. `,
         `<i><strong>  Example </strong></i>`,
           ` <i>  An example VAT declaration form is entered below. The final VAT due for this taxpayer in this tax period is FRW 18,900.  </i>`,
           `<i>   After saving the declaration form, upload the annexures and then compare with the declaration form, see page 106 for more detail on uploading annexures and comparing with declaration forms. </i>`,
           ` <i><strong> Example</strong></i>`,
                 `<i>Continuing the example of the VAT declaration form above, the comparison between this VAT declaration form and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted. </i>`,
                 `<i>  Once all the annexures and declaration values are equal, correct and certified, click to ‘Submit’ the declaration. After successfully submitting, this screen will load.</i>`,
                  `<i>Click ‘View Acknowledgement Receipt’ to view the RRA reference number and the total tax due that are required for payment. Remember that payment must also be made before the deadline to avoid penalties and fines. </i>`,

        ],
      },
    },
    {
      id: "vat-refund-for-privileged-persons",
      title: { en: "VAT refund for privileged persons", fr: "Remboursement TVA pour personnes privilegiees", rw: "Gusubizwa VAT ku bantu bafite uburenganzira bwihariye" },
      content: {
        en: [
       `  VAT Refund for ‘privileged persons’ refers to the refund available to certain consumers on the VAT paid on their goods or services. Where ‘privileged persons’ refers to:`,
          `<li>-  Diplomats or individuals on diplomatic missions.</li>`,
           `<li>- Non-governmental organisations (NGOs), inter-governmental organisations (IGOs) or donor-funded projects.</li>`,
             ` Privileged persons claim refunds online using the E-tax system.`,

        ],
      },
    },
    {
      id: "deductible-vat-reverse-tab",
      title: { en: "Deductible VAT reverse tab", fr: "Onglet TVA reverse deductible", rw: "Deductible VAT reverse tab" },
      content: {
        en: [
       `  This tab is applicable to any taxpayer who has received services from foreign suppliers during the tax period. `,
        ` The ‘Deductible VAT Reverse’ tab has 6 columns. Each row is for a separate transaction. For each transaction, enter details on:`,
       ` <ul>`,
         ` <li><strong> Suppliers Name –</strong> Enter the name of the foreign supplier who provided the services. Note: The Taxpayer Identification Number (TIN) is not required as VAT Reverse Charge is only required from taxpayers who received services from non-resident suppliers who are not registered in Rwanda if the services are not available in the local market.<li>`,
          `<li><strong>-	Nature of Services Supplied –</strong> Described above.</li>`,
           `<li><strong> -	Invoice Number – </strong>  Described above.</li>`,
             `<li><strong> -	Invoice Date (dd/mm/yyyy) –</strong> Described above.<li>`,
            `<li><strong> -	Total Invoice Amount –</strong> Enter the total amount paid for the services to the foreign supplier, excluding VAT.</li>`,
                `<li><strong> -	VAT Reverse Charge Amount – Enter the VAT to be paid by the taxpayer. If all services are taxable, this is equal to ‘Total Invoice Amount’ * 18%. </li>`,
               ` VAT Retained Tab`,
                        `This tab is applicable to any taxpayer who has sold goods or services to public institutions and had the VAT withheld and paid on their behalf by the public institution.`,
                        `The ‘VAT Retained’ tab has 8 columns. Each row is for a separate import transaction. For each transaction, enter details on:`,
                        `<li><strong>-	Public Institution’s TIN –</strong> Enter the Taxpayer Identification Number (TIN) of the public institution to which the goods or service were sold.<li>`,
                      `<li><strong>  -	Public Institution’s Name –</strong> Enter the name of the public institution to which the goods or service were sold.<li>`,
                      `<li><strong>   -	Nature of Goods or Services – Described above.</li>`,
                          `<li><strong>-	Invoice Number – </strong>Described above.</li>`,
                         `<li><strong> -	Date of Invoice – </strong>Described above.</li>`,
                           `<li><strong> -	Date Delivered – </strong>Enter the date the goods or services were delivered or completed, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>`,
                           `<li><strong> -	Amount on Invoice (VAT Exclusive) – </strong>Enter the amount of the invoice, excluding VAT.</li>`,
                            `<li><strong>-	Withheld Amount (18%) –</strong> Enter the amount of VAT that was withheld and paid on the taxpayers’ behalf by the public institution, typically Invoice (VAT Exclusive) * 18%. </li>`,
                `</ur>`,
        ],
      },
    },
    {
      id: "payment",
      title: { en: "Payment", fr: "Paiement", rw: "Kwishyura" },
      content: {
        en: [
          ` VAT payments can be made via Mobile/Airtel Money, MobiCash, mobile banking, or Internet Banking.`,
        ],
      },
    },
    {
      id: "vat-penalties",
      title: { en: "VAT penalties", fr: "Penalites TVA", rw: "Ibihano bya VAT" },
      content: {
        en: [
         `Click  <a href=\"https://www.rra.gov.rw/en/domestic-tax-services/value-added-tax/penalties-and-interest"> here to see administrative fines imposed to persons who do not comply with provisions of Value Added Tax.</a>`,
            `The penalties for under-declaration depend on whether the taxpayer rectifies their own tax declaration or whether the taxpayer is found by RRA to have declared less than the correct amount.`,
             `A taxpayer who submits a declaration, and is found by RRA to have declared lower tax due that is at least of 10% of the correct amount but not exceeding 20% of the correct amount, must pay the difference and is subject to:`,
            `  - A fine of 10% of the amount of the understatement`,
            `-  The rate of interests for late payment is fixed as follows:`,
             ` • Zero point five per cent (0.5), if the taxpayer has recorded a delay not exceeding six (6) months with respect to the time limit for payment.`,
          ` • One per cent (1%), if the taxpayer has recorded a delay of six (6) months in tax payment but not more than twelve (12) months.`,
           ` •  One point five percent (1.5%), if the taxpayer has recorded a delay of more than twelve (12) months.`,
                 ` A taxpayer who submits a declaration, and is found by RRA to have declared lower tax due that is more than 20% of correct amount, must pay the difference and is subject to:`,
             `  -  A fine of 20% of the amount of the understatement.`,
             `- 1.5% interest on a monthly basis. The rate of interests for late payment is fixed as follows:`,
             `• zero point five per cent (0.5), if the taxpayer has recorded a delay not exceeding six (6) months with respect to the time limit for payment.`,
              ` • one per cent (1%), if the taxpayer has recorded a delay of six (6) months in tax payment but not more than twelve (12) months.`,
               ` • one point five percent (1.5%), if the taxpayer has recorded a delay of more than twelve (12) months.`,
               `A taxpayer who submits a declaration, but realises that they have declared a lower amount due than the correct amount and conducts self-reassessment after the deadline but before notification of an imminent audit, must pay the difference and:`,
               `A fine of:`,
               `-  Five percent (5%) of the tax due, if the time limit for declaration and payment has not been exceeded by thirty (30) days.`,
                `- Ten percent (10%) of the tax due, if the time limit for declaration and payment has been exceeded by thirty (30) days but not exceeded by sixty (60) days`,
                `- Thirty percent (30%) of the tax due, if the time limit for declaration and payment has been exceeded by sixty (60) days.`,
                 `A taxpayer to whom the Commissioner General granted extension for submitting tax declaration is not subject to administrative fine for late payment, unless the taxpayer failed to respect the extension period. However, interests for late payment remain due.`,
                   `<i><strong>Example</strong></i>`,
                  `<i> Immaculée declares Pay As You Earn (PAYE) due of FRW 125,000 for a tax period. However, during an audit four months later RRA discovers that she should have declared PAYE due of FRW 165,000. The understatement is:</i>`,
                  `<i>  -  1 – (FRW 125,000 / FRW 165,000) = 24.2%.</i>`,
                  `<i>    Immaculée has to pay the FRW 40,000 difference and the penalty and interests of:</i>`,
                  `<i>  -  FRW 40,000 * 1.5% * 4 months = FRW 2,400</i>`,
                  `<i>  - FRW 40,000 * 10% * 2 = FRW 8,000</i>`,
                   `<i> In addition to paying the FRW 40,000 difference, Immaculée must pay FRW 8,000 + FRW 2,400= FRW 10,400.</i>`,



        ],
      },
    },
  ],
  lastUpdated: centralTaxLastUpdated,
}
