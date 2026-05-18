import type { HandbookSection, LocalizedText } from '@/lib/types/handbook';

export const otherServicesPage = {
  slug: 'other-services',
  title: {
    en: 'Other services',
    fr: 'Autres services',
    rw: 'Izindi serivisi',
  },
  summary: {
    en: `This section includes information on paying taxes, business registration, E-tax system, EBM, importing and exporting of products, Motor vehicle ownership transfer, tax laws and related documents, tax audit, bookkeeping, tax refund, debt management, appeals,VAT refund and Voluntary diclosure.`,
    fr: `ccédez aux services et références liés aux obligations des contribuables, notamment les décisions, les audits, les remboursements, les recours, la gestion des dettes, les certificats, les services relatifs aux véhicules automobiles et l'échange d'informations.`,
    rw:`Reba serivisi n'inyandiko zifasha ku nshingano z'abasora, zirimo ibisobanuro by'amategeko, ubugenzuzi, gusubizwa imisoro, ubujurire, gucunga imyenda, ibyemezo, serivisi z'ibinyabiziga no guhana amakuru.`,
  },
  lastUpdated: {
    en: 'This page was last updated on: 05/03/2026',
    fr: 'Cette page a été mise à jour le : 05/03/2026',
    rw: 'Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026',
  },
} satisfies {
  lastUpdated: LocalizedText;
  slug: string;
  summary: LocalizedText;
  title: LocalizedText;
};

export const otherServiceSections: HandbookSection[] = [
  {
    id: 'laws-ministerial-orders-and-rulings',
    title: {
      en: 'Laws, Ministerial Orders and Rulings',
      fr: 'Lois, arrêtés ministériels et décisions',
      rw: "Amategeko, amabwiriza ya Minisitiri n'ibyemezo",
    },
    content: {
      en: [
      `All laws, ministerial orders, Commissioner General (CG) rulings, public rulings and ruling cases governing tax administration are available on the <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings">RRA website</a>`,
       `<strong>             How can taxpayers ask for rulings if anything is unclear?</strong>`,
                    `If there are any aspects that are unclear, or not covered, by the existing laws, ministerial orders or previous rulings then taxpayers may ask for an official clarification or ruling to be made by RRA.  `,
                    `In order to request a ruling, taxpayers must write a letter addressed to the Commissioner General of RRA. This letter should:`,
                    `<ul>
                      <li>      Identify the taxpayer’s name and TIN.</li>
                    <li>     Identify the relevant sections of laws, ministerial orders or previous rulings.</li>
                    <li>       State the reason(s) that a ruling is required.</li>
                    </ul>`,
                   ` RRA will consider the request and inform the taxpayer of the official ruling directly. In the event that the ruling is considered to be useful to taxpayers more generally, this will also be published as an official ruling on the RRA website on the link above.`,

      ],
    },
  },
  {
    id: 'obligations-and-bookkeeping',
    title: {
      en: 'Obligations and Bookkeeping',
      fr: 'Obligations et tenue de comptabilité',
      rw: "Inshingano no kubika ibitabo by'ibaruramari",
    },
    content: {
      en: [
                `  The general obligations of all taxpayers include:`,
                `<ul>
                  <li>   Keeping RRA informed of any changes in contact details or physical address. Any changes must be reported to RRA within ten (10) days.</li>
                  <li>   Keeping books of account, see below.</li>
                  <li>   Submitting tax declarations and paying due taxes.</li>
                  <li>    Cooperating fully with all RRA officers and correspondence.</li>
                  </ul>`,
                  `For additional obligations of taxpayers that are registered for specific tax types, see the relevant chapters of this Tax Handbook.`,
                  `<strong>What are ‘Books of Account’ and what bookkeeping is required of taxpayers?</strong>`,
                 ` Books of account are very helpful for businesses to keep track of their cash-flow and profitability. The minimum information required by RRA is for taxpayers to record each sale transaction, with the date, client, nature of goods and amount recorded.`,
                  `Taxpayers with annual turnover between FRW 12,000,000 and FRW 20,000,000 must keep record of daily purchases, record of all financial transactions, tax liability, withheld tax, and a declaration of withheld tax in addition to record of sales.`,
                  `Taxpayers with annual turnover above FRW 20,000,000 must also keep a record of assets and liabilities, records of daily income and expenses, records of stock inventory at the end of the period and information related to controlled transactions.`,
                  `Taxpayers with annual turnover above FRW 20,000,000 must register for VAT; must also declare Real Regime Income Tax and fulfill other additional bookkeeping requirements.`,
                  `How long must taxpayers keep relevant tax documents? `,
                  `Taxpayers are required to keep all documents and invoices relating to all tax declarations and payments for 10 years.`,

      ],
    },
  },
  {
    id: 'audits',
    title: {
      en: 'Audits',
      fr: 'Audits',
      rw: 'Ubugenzuzi',
    },
    content: {
      en: [
                    `  An audit is one of the methods RRA uses to ensure that taxpayers are correctly declaring and paying their taxes. Audits involve RRA checking the relevant documents concerning a taxpayer’s tax obligations for any tax period(s) within the past five years.`,
                    `  If there is evidence of non-compliance, the taxpayer will be issued with an assessment notice. This contains details of the offence(s), and the unpaid tax due, as well as additional penalties or fines that must be paid.`,
                     ` It is important to note that being selected for an audit does not necessarily mean that RRA suspects the taxpayer of non-compliance. Instead, RRA wishes to check a taxpayer’s declarations and payments in more detail, to encourage a high level of compliance across all taxpayers.`,
                      `The processes for audits are similar for domestic taxes, Local Government Taxes (LGT) and fees, and for Post-Clearance Audits (PCAs) regarding customs duties.`,
                   `<strong>   Different types of audits</strong>`,
                      `There are three main types of audits:`,
                    `<ul>
                      <li>  Comprehensive audit.</li>
                      <li>  Issue-oriented audit</li>
                      <li>  Desk audit.</li>
                        <li>   Transfer pricing audit</li>
                      <li>      Refund audit</li>
                      </ul>`,
                     ` Comprehensive audits are more in-depth and time-intensive. These are usually conducted by RRA staff whilst visiting the taxpayer’s business premises and reviewing all relevant documents.`,
                      `Issue-oriented audits are usually focussed on a single tax type, single aspect or single tax period. Issue audits may be desk-based or involve visits to the taxpayer’s business premises.`,
                      `Desk audits are conducted by RRA staff using information that has already been submitted to RRA. Transfer pricing audit focuses on related party transactions.`,
                      `Refund audits are a type of issue audit, focused on tax declarations claiming refunds from RRA.`,
                       `<strong>       When are taxpayers informed about audits? </strong>`,
                     ` In the case of desk audits, taxpayers may not be informed about the audit unless a specific problem is identified. Taxpayers will always be invited to offer explanations before being issued with assessment notices.`,
                      `In the case of issue audits, taxpayers will be notified at least three working days beforehand. The postponement of such an issue-oriented audit cannot exceed seven (7) working days.`,
                      `In the case of comprehensive audits, taxpayers will be notified at least seven working days beforehand. If the taxpayer is not ready, they may write to RRA requesting an extension, up to a maximum of thirty days.`,
                      `Taxpayers will be informed of what is required of them, the documents required by RRA, their rights, the anticipated timeframe, and the process of the audit during the notification of the audit or the initial meeting.`,
                      `Any unpaid taxes or additional penalties or fines must be paid within seven days of receipt of the assessment notice.`,

      ],
    },
  },
  {
    id: 'refunds-tax-credits',
    title: {
      en: 'Refunds/Tax credits',
      fr: "Remboursements et crédits d'impôt",
      rw: "Gusubizwa imisoro n'inguzanyo z'imisoro",
    },
    content: {
      en: [
               `<strong> What are the different types of refunds/tax credits?</strong>`,
                      `There are situations where it is possible for taxpayers to have overpaid the amount of taxes due, and require refunds/tax credits. These situations occur most frequently for:`,
                     ` <ul>
                      <li>        VAT – where the VAT paid on inputs exceeds the output VAT, particularly in the case of zero-rated products and exports.</li>
                      <li>       Income Tax – where the Instalment Quarterly Prepayments paid by the taxpayer and the Withholding Taxes withheld and paid on behalf of the taxpayer exceed the Income Tax due.</li>
                      <li>       Audits – where the result of an audit finds that the taxpayer has over declared and over paid.</li>
                      <li>       Appeals – where the taxpayer pays the taxes due, and is subsequently successful in their appeal.</li>
                      <li>       Any accidental overpayment.</li>
                      </ul>`,
                      `There is also a special allowance of VAT Refunds for Privileged Persons. `,
                      `<strong>What is the process for taxpayers to receive refunds?</strong>`,
                      `In the case of VAT refunds, the refund process requires no initial action from the taxpayer. For higher value refunds, the claims are refunded to the taxpayer’s bank account. For lower value refunds, the claims may be deducted against future payments. `,
                      `In the case of refunds/tax credits due to successful appeals, the refund/tax credits process requires no additional action from the taxpayer.`,
                     ` For all tax credits, the taxpayer must write a letter addressed to the tax administration. This means either addressed to the ‘Assistant Commissioner in charge of Filing and Payment Monitoring Division in case of tax credits resulting from taxpayers’ self-assessment’, or the ‘Assistant Commissioner in charge of Debt Management Division’ for tax credits resulting from tax administration assessments. This letter should:`,
                     `<ul>
                      <li>      Identify the taxpayer’s name and TIN.</li>
                      <li>       Identify the tax period and tax type(s) concerned.</li>
                      <li>       State the reason(s) for the refund request.</li>
                      <li>       State the amount of refund claimed.</li>
                      <li>       Be signed by the taxpayer or legal representative.</li>
                      </ul>`,
                      `RRA will provide the taxpayer with a Refund/tax credit Claim Notification reply, informing them whether their refund/tax credit claim has been accepted, adjusted or rejected and the reason for this decision. Tax credit is used to pay current or future liability.`,

      ],
    },
  },
  {
    id: 'appeals',
    title: {
      en: 'Appeals',
      fr: 'Recours',
      rw: 'Ubujurire',
    },
    content: {
      en: [
                   `<strong>         When can taxpayers appeal?</strong>`,
                   ` Taxpayers may appeal to RRA against decisions within 30 days following the conclusion of audits and/or receiving any assessment notices of taxes or penalties. However, disputes related to a notice of assessment generated by electronic tax system based on declaration made by a taxpayer may be administratively resolved without recourse to appeal procedure. `,
                `<strong>   Do taxes and fines still have to be paid when appealing?</strong>`,
                   `It is important to note that taxpayers are still required to pay any taxes or penalties within the original deadlines. Failure to do so will result in penalties and interest applying as normal. If the appeals are successful, taxpayers will receive refunds or credit notes. However, when the taxpayer has paid the undisputed portion of the tax, the Commissioner General suspends the collection of tax that is subject of appeal.`,
                 `<strong>   What is the process, timeframe and level of appeal? </strong>`,
                   ` In order to appeal, taxpayers must write a letter addressed to the Commissioner General of RRA within 30 days of receiving notice of the decision they wish to appeal. This letter should:`,
                   `<ul>
                    <li>       Identify the taxpayer’s name and TIN.</li>
                    <li>       Identify the tax period and tax type(s) concerned.</li>
                    <li>       State the decision that is being appealed.</li>
                    <li>       State the reason(s) for the appeal.</li>
                    <li>       Contain all supporting documents, proofs and legal arguments against the assessment.</li>
                    <li>       Be signed by the taxpayer or legal representative.</li>
                    </ul>`,
                    `RRA is required to respond to the appeal of the taxpayer within 30 days. During this period, RRA will then either accept the appeal, invite the taxpayer to come to RRA offices to further explain the reasons for their appeal or may extend an addition of 30 days and inform the taxpayer. If the taxpayer is not satisfied with the result of the appeal, s/he may apply to RRA to reach an ‘amicable agreement’ or file the case to the competent court within 30 days.`,
                `<strong>  What is the cost of appeal?</strong>`,
                    `There is no cost of appealing to RRA. However, there may be fees incurred when appealing to the Courts.`,
                  `<strong>  What documents might be used to support an appeal?</strong>`,
                    `The types of supporting documents may vary depending upon the circumstances of the appeal, but typically include: invoices, proof of payment, books of account, financial statements and similar.`,
                    `It is important to note any documents used to support appeals following the conclusion of audits must have also been provided at the time of the audit.`,
                `<strong>    Can appeals make assessments worse for the taxpayer?</strong>`,
                    `There is no penalty or fine for making unsuccessful appeals. However, appeals could potentially lead to further assessment of the case and the uncovering of new information leading to additional penalties or fines.`,

      ],
    },
  },
  {
    id: 'debt-management',
    title: {
      en: 'Debt Management',
      fr: 'Gestion des dettes',
      rw: "Gucunga imyenda y'imisoro",
    },
    content: {
      en: [
                   `<strong>  What is a tax debt?</strong>`,
                        `A tax debt is the amount of money a taxpayer (individual or business) owes to a tax authority due to:`,
                        `<ul>
                        <li>      Unpaid taxes from previous periods</li>
                        <li>       Underreported income or incorrect tax filings</li>
                        <li>       Penalties and interest for late payments or non-compliance.</li>
                        </ul>`,
                       `<strong> When does a tax become a debt?</strong>`,
                       ` Tax debt arises when the tax due is not paid in full by the deadline upon reception of notice of assessment automatically generated by the system or after audit. It remains a liability until it is settled through payment, offset, or other arrangements like installment plans or waivers.`,
                       `<strong> What is the procedure for paying taxes in instalments?</strong>`,
                        `Taxpayers who are unable to pay tax arrears or assessment notices at once may apply to pay in instalments.`,
                        `In order to apply to pay in instalments, the taxpayer must pay at least 10% of the tax due before applying. The payment plan must show an intention to pay the full amount within a maximum period of 12 months. However, the Commissioner General may extend this period by another period not exceeding 24 months if the taxpayer has justified reasons. The taxpayer should also offer, and provide evidence of, a guarantee, that could be seized by RRA in the event of non-compliance with the approved payment plan.`,
                        `Taxpayers must then write a letter addressed to the Commissioner General of RRA. This letter should:`,
                        `<ul>
                        <li>      Identify the taxpayer’s name and TIN </li>
                        <li>       Identify the tax period and tax type(s) concerned</li>
                        <li>       State the amount of tax due</li>
                        <li>       State the reason(s) for not being able to pay the whole amount of tax due at once</li>
                        <li>       Contain their instalment payment plan</li>
                        <li>       Contain proof of payment of at least 10% of the amount due</li>
                        <li>       Contain evidence of a guarantee</li>
                        <li>       Be signed by the taxpayer or legal representative</li>
                        </ul>`,
                       ` If the instalment payment plan is approved, the taxpayer and RRA will sign an official agreement detailing the instalment payment plan. Any failure to comply with the payment plan results in the immediate enforcement of the total amount due, and may result in the seizure of the guarantee.`,
                      `<strong>  What is the procedure for waivers of any taxes due?</strong>`,
                        `In special circumstances, taxpayers may also request for taxes or penalties to be waived or dropped. Although these requests must be made to RRA, the decision to grant any waivers waive any fines or interest due is the responsibility of the Ministry of Finance and Economic Planning (MINECOFIN). However, waiving the principal tax is done by the Cabinet upon request of MINECOFIN.`,
                        `In order to request a waiver, taxpayers must write a letter addressed to the Commissioner General of RRA. This letter should:`,
                        `<ul>
                        <li>      Identify the taxpayer’s name and TIN.</li>
                        <li>       Identify the tax period and tax type(s) concerned.</li>
                        <li>       State the amount of tax due.</li>
                        <li>       State the reason(s) for the waiver request.</li>
                        <li>       Contain any supporting evidence as required.</li>
                        <li>       Be signed by the taxpayer or legal representative.</li>
                        </ul>`,
                        `RRA will acknowledge receipt of the letter, but the timeline, result and communication of the decision is the responsibility of MINECOFIN.`,
                       `<strong> What is the procedure for the enforcement of arrears?</strong>`,
                        `There are many enforcement actions legally available to RRA for the collection of unpaid tax arrears. The typical process is in three steps. Firstly, the taxpayer receives a warning letter from RRA, requesting they visit RRA offices to discuss the arrears situation and repayment options.`,
                        `If there is no response within fifteen days, RRA may begin ‘garnishment’. This means that RRA may work with third parties, such as banks, to freeze the taxpayers’ accounts. Finally, RRA may begin search and seizure of movable and immovable assets. This can be sold at auction. A publication of auction must be made (in a public newspaper) at least 15 days before the auction is conducted. `,

      ],
    },
  },
  {
    id: 'certificates',
    title: {
      en: 'Certificates - VAT, Compliance Certificates and Tax Clearance Certificates',
      fr: 'Certificats TVA, certificats de conformité et quitus fiscaux',
      rw: "Ibyemezo bya TVA, kubahiriza amategeko n'ibyemezo by'uko nta mwenda w'imisoro",
    },
    content: {
      en: [
                        `<strong>  What are the different certificates available from RRA?</strong>`,
                      `There are six main types of certificates available from RRA. These are:`,
                      `<ul>
                      <li>      Value Added Tax (VAT) certificate</li>
                      <li>       Tax Clearance Certificates (TCCs)</li>
                      <li>       Compliance Certificate (Quitus Fiscal)</li>
                      <li>       Foreign Tax Credit certificate</li>
                      <li>       Trading License Tax certificate</li>
                      <li>    Electronic Billing Machine (EBM) Certificate</li>
                      </ul>`,
                      `The Foreign Tax Credit certificate is available for taxpayers to prove that they have paid taxes in Rwanda. The Foreign Tax Credit certificate must be requested from RRA offices, and is processed on a case-by-case basis.`,
                     `<strong> What is Value Added Tax (VAT) certificates?</strong>`,
                     ` VAT certificates certify that the taxpayer is registered for VAT.  All VAT registered taxpayers are required to clearly display the VAT registration certificate in plain view at their main place of business. `,
                     ` VAT certificates are available free of charge. They can be obtained through three channels:`,
                      `- The Rwanda Development Board (RDB) system during business registration`,
                     ` -  Through the E-Tax system`,
                      `<strong>What is Electronic Billing Machine (EBM) Certificate?</strong>`,
                      `It is a document certifying that a taxpayer adopted and uses an RRA certified electronic billing machine.`,
                      `EBM Certificate is obtained by writing to the Assistant Commissioner in charge of Tax Control and Operational Support Division. The letter should indicate:`,
                      `<ul>
                      <li>      Taxpayer name</li>
                      <li>       Taxpayer Identification Number (TIN)</li>
                      <li>       Reason of requesting</li>
                      </ul>`,
                     `<strong> What is Compliance Certificate (Quitus Fiscal)?</strong>`,
                      `Compliance Certificate (Quitus Fiscal) is a privileged status available, upon request, to taxpayers who have a good compliance record with RRA. Compliance Certificate (Quitus Fiscal) is proof of this status. There are two types of Quitus Fiscal, for withholding tax on public tenders of 3% (WHT 3%) and for withholding tax on imports of 5% and public tenders of 3% (WHT 5% & 3%). `,
                      `Taxpayers with Compliance Certificate (Quitus Fiscal) are not required to pay WHT 5%, or have WHT 3% withheld and paid on their behalf, depending upon the type of Compliance Certificate (Quitus Fiscal). This does not reduce the overall tax payable by the taxpayer, as any income from imports or public tenders are required to be declared in the annual Income Tax (PIT or CIT) declarations. However, Compliance Certificate (Quitus Fiscal) benefit their cash flow as the taxes do not have to be paid up front.`,
                      `The cost of applying for Compliance Certificate (Quitus Fiscal) is FRW 10,000. `,
                      `There is a distinction between Compliance Certificate (Quitus Fiscal) and Tax Clearance Certificate, as described below.`,
                      `<strong>What are Tax Clearance Certificates (TCCs)?</strong>`,
                      `Tax Clearance Certificates (TCCs) are available, upon online request through E-Tax, to prove that taxpayers have no unpaid arrears with RRA. This may be needed in order to bid for public tenders, apply for bank loans or a range of other reasons.`,
                      `The cost of applying for TCCs is FRW 5,000.`,
                      `<strong>What is the process of applying for and obtaining Certificates?</strong>`,
                     ` Certificates can be obtained through the RRA website for non-business individuals (Tax Clearance Certificate – TCC only), and through E-Tax for businesses.`,
                      `TIN holders wishing to apply and obtain Tax Clearance Certificates (TCCs) should first visit the<a href="http://www.rra.gov.rw/"> RRA website</a> and log in into E-tax, click on ‘TCC Quitus & other application’, then click on ‘Apply here’.  This loads the following screen, the Certificates portal.`,
                      `The taxpayer can submit the request for the listed certificates, check the progress, and download the certificate.`,
                      `<strong>Image !!</strong>`,
                      `Business taxpayers wishing to apply and obtain VAT Certificate, Compliance Certificate (Quitus Fiscal), Withholding Certificate, and Tax Clearance Certificate (TCC) should login into RRA E-Tax and click on ‘TCC, Quitus & Other applications’. This menu displays three options: ‘Apply here’, ‘View request’, ‘Tax arrears’ as per below screen:`,
                       `<strong>Image !!</strong>`,
                       `  The ‘Apply here’ allows you to send a certificate request to RRA. Available certificate types are displayed in the following screen`,
                          `<strong>Image !!</strong>`,
                       `If the taxpayer selects ‘QUITUS’, they must also select ‘3%’ or ‘5% & 3%’ from the ‘Quitus Certificate Type’ drop-down menu. This refers to the type of Withholding Tax from which they wish to be exempted`,
                       `If the taxpayer selects ‘VAT’, no other selection is required. If the taxpayer selects ‘TCC’, the system allows a taxpayer to enter remarks/comment. If the taxpayer selects ‘Withholding Certificate’, the system requires additional information as per below screen:`,
                       `<strong>Image !!</strong>`,
                       `After all required information has been entered for any certificate, click ‘Submit’ to confirm the certificate application. Note that the system generates acknowledgement receipt for ‘TCC’ and ‘Compliance Certificate (Quitus Fiscal)’ indicating the cost to be paid as processing fees mentioned above.`,
                      `The ‘View Requests’ allows taxpayers to check the status of the submitted request. ‘Tax Arrears’ displays arrears details if any. It is advised to check tax arrears before applying for TCC and Compliance Certificate (Quitus Fiscal).`,

      ],
    },
  },
  {
    id: 'voluntary-disclosure-scheme',
    title: {
      en: 'Voluntary Disclosure Scheme (VDS)',
      fr: 'Régime de divulgation volontaire',
      rw: 'Uburyo bwo kwiyandikisha no kumenyekanisha ku bushake',
    },
    content: {
      en: [
                      `  VDS is an opportunity provided by the Law to non-compliant persons to declare and pay their tax with reduced sanctions. VDS facilitates the following:`,
                      `<ul>
                        <li>        Automatic waiver of penalties and interests for late payment</li>
                        <li>       Payment effected in 30 days</li>
                        <li>       A certificate for Voluntary Disclosure</li>
                        </ul>`,
                       `<strong> The basis of VDS</strong>`,
                        `Article 94 of Law No. 020/2023 of 31/03/2023 on Tax Procedures provides that interest and penalties do not apply to taxpayers who voluntarily disclose.`,
                        `To implement Article 94, Ministerial Order No. 001/24/03/TC of 08/03/2024 set out the procedures and conditions for accessing voluntary disclosure incentives.`,
                       `<strong> Who is eligible</strong>`,
                       `<ul>
                        <li>         A registered taxpayer before being notified of audit.</li>
                        <li>       A taxpayer not registered.</li>
                        <li>       A taxpayer with tax period beyond five years of being audited.</li>
                        <li>       Any other status as may be communicated by the Minister.</li>
                        </ul>`,
                       `<strong> Where to apply </strong>`,
                       ` During VDS period, applications are submitted online via <a href="http://www.rra.gov.rw/"> RRA website</a>`,
                        `<strong>VAT Reward</strong>`,
                      ` This scheme was established by tax law to address the following concerns at the level of final consumer:`,
                      `<ul>
                        <li>       Non-compliance with the issuance of EBM invoice </li>
                        <li>       Issuance of invoice with incorrect price value (under-pricing)</li>
                        <li>       Low culture of invoice demand amongst consumers</li>
                        <li>       Lack of incentives to final consumers</li>
                        <li>       Limited information of consumer contribution</li>
                        </ul>`,
                        `<strong>Eligibility criteria</strong>`,
                       ` Individuals who fulfil the following:`,
                       `<ul>
                        <li>       Being registered in the VAT reward system.</li>
                        <li>       Having received an EBM invoice from a VAT registered taxpayer indicating her or his recorded mobile telephone number.</li>
                        </ul>`,
                        `A final consumer who makes a payment and requests an invoice but does not receive one must declare this in the system as prescribed by the tax administration.`,
                        `<strong>How to register</strong>`,
                        `Using USSD technology, dial *800#, select your preferred language, then follow these steps:`,
                        `<ul>
                       <p> 1. 	Choose option 4 – EBM Services</p>
                        <p>2. 	Select option 1 – VAT Reward Services</p>
                       <p> 3. 	Choose option 1 – VAT Reward Registration</p>
                        <p>4. 	Enter the requested information: your National ID number and the mobile phone number where the reward should be sent.
                        </ul>`,
                        `<strong>Rate of VAT Reward</strong>`,
                       ` A final consumer is rewarded 10% of the VAT amount as shown on the EBM invoice issued.`,
                       `<strong> When is the VAT Reward disbursed</strong>`,
                       ` The VAT reward is deposited to the mobile money or bank account designated by the last consumer on quarterly basis, within 15 days following the declaration period of that quarter.`,
                        `<strong>Communicate to RRA</strong>`,
                        `<strong>i) Sending letters through E-Correspondence system</strong>`,
                        `Official communication with RRA is done via the E-Correspondence System. To send a letter to RRA whether you have a TIN or not, visit RRA website then click on “CLICK HERE TO SEND YOUR LETTER TO RRA” as per below screenshot:`,
                        `<strong>Image !!</strong>`,
                        `Then follow all steps by filling all requested information. The letter to be sent should be signed, stamped, and saved as PDF.`,
                          `<strong>     ii) Online Requests via E-tax</strong>`,
                                `Taxpayers can access various services through the online requests menu in the e-tax system. These include:`,
                                `<ul>
                                <li>CIT/PIT requests: Services related to Income tax Filling and Payment;
                                <li>VAT/PAYE filling frequency change: Request to change the filing frequency from quarterly to monthly for VAT or PAYE.</li>
                               <li> Requests for revision downwards: Submit a request to reduce previously declared tax.</li>
                               <li> Document generation: Allows taxpayers to generate a document number when one is missing for a given declaration period</li>
                               <li> Business closure: Submit a request to close a business entirely or close a specific tax type.</li>
                               <li> Instalment Payment Request: For taxpayers with tax arrears, this service allows them to request payment in instalments.</li>
                               </ul>`,
                               `<strong> iii) Online requests via MyRRA</strong>`,
                                `Taxpayers who need to request for EBM are required to login to the MyRRA system and submit their applications by clicking on “Service request button”. Once the application receives a feedback (approval/rejection due to a reason), a taxpayer receives a notification on their phone number via sms or email.`,
                                `<strong>  iv) Social media</strong>`,
                               ` RRA utilizes several social media channels to handle tax enquiries and service challenges:`,
                               `<ul>
                               <li> WhatsApp+250 739 008 010 (Primary query line) / +250 785 569 363 (Recruitment) </li>                             
                              <li>  YouTube: Rwanda Revenue Authority </li>
                              <li>  X (Twitter): @rrainfo</li>
                              <li>  Instagram: @rwandarevenue</li>
                             <li>   TikTok:  @rrataxtoks</li>
                             <li>   Facebook: Rwanda Revenue Authority</li>
                             <li>   LinkedIn: Rwanda Revenue Authority</li>
                             <li>   Flickr: Rwanda Revenue Authority</li>
                             </ul>`,
                          `<strong>      v) Call Center</strong>`,
                               ` RRA Call Center serves as a central hub for taxpayer support, designed to simplify tax compliance and provide immediate technical assistance.`,
                               ` The center is accessible via the toll-free short code 3004 (for local calls) or +250 788 185 500 for international calls.`,
                              `<strong>  vi) By post</strong>`,
                                `Rwanda Revenue Authority`,
                                `Silverback Mall, Kicukiro - Sonatube, Kigali, Rwanda`,
                               ` P. O. Box 3987`,

      ] 
    },
  },
  {
    id: 'motor-vehicle-services',
    title: {
      en: 'Motor Vehicle Services',
      fr: 'Services relatifs aux véhicules automobiles',
      rw: "Serivisi z'ibinyabiziga",
    },
    content: {
      en: [
                       `<strong>   When to transfer motor vehicles </strong>`,
                        `Transfer of motor vehicles is required when the ownership of the vehicle changes. `,
                        `It can happen due to the following reasons:`,
                        `Normal sale,donation, inheritance (Succession), public/private auction and court orders.`,
                        `<strong>The cost of motor vehicle transfer`,
                        `The Transfer Fee is FRW 30,000 for motorcycles and FRW 60,000 for all other motor vehicles.`,
                        `<strong>Required documents for motor vehicle transfer</strong>`,
                        `The documents required for motor vehicle transfer are:`,
                        `<ul>
                        <li>      Notarised Sale Contract (containing the date, location, value and the names, phone numbers, NID, identification of motor vehicles and signatures of both the buyer and the seller). If done outside the country, the Embassy and MINAFET may approve it.</li>
                        <li>       Registration Transfer Fee payment receipt (FRW 30,000-FRW 60,000)</li>
                        <li>       Latest Yellow Card and plate number for the motor vehicle</li>
                        <li>       The buyer’s TIN</li>
                        <li>       Historical insurance information (only required if the vehicle will be used as a business such as a taxi).</li>
                        <li>       No tax arrears on the vehicle owner’s TIN</li>
                        </ul>`,
                       `Motor vehicle ownership transfer process:`,
                        `<strong>Step 1: </strong>The seller logs in into E-Tax, goes to ‘Motor Vehicle’ then clicks on ‘Ownership Transfer’. The system displays the following screen:`,
                        `<strong>AN IMAGE HERE!!!</strong>`,
                        `If the seller is transferring the owned motor vehicle to a new owner; the seller uses the first option ‘Transfer from Myself to Another Person’. If a new owner wants to acquire the motor vehicle for the following specific reasons:`,
                        `<ul>
                           <li>    Auction </li>
                           <li>  Succession</li>
                           <li>   Court order</li>
                           </ul>`,
                      `The applicant uses the ‘Transfer to Myself’ option.`,
                   `<strong>   Step 2:</strong> The taxpayer pays the Transfer Fee.`,
                    `<strong>  Step 3:</strong> If the buyer of the motor vehicle does not have a unique Taxpayer Identification Number (TIN), they must provide RRA staff with a valid NID or Passport. The TIN and certificate are provided free.`,
                   `<strong>   Step 4:</strong> The buyer must provide RRA staff with all the required documents.`,
                     `<strong> Step 5:</strong> If all required documents are valid, RRA staff will provide the buyer of the motor vehicle with the updated Yellow Card containing the buyer’s details after receiving the old yellow card and plate number.`,
                     `<strong>Step 6:</strong> The process is finished and the buyer is now the legal owner of the motor vehicle.`,
                     `<strong> Motor vehicle-related services accessible online</strong>`,
                      `To access online Motor vehicle services, log into E-Tax, click on Motor vehicle menu, choose any of the following services as displayed by the system:`,
                      `<ul>
                      <li>      Motor vehicle (MV) Declaration</li>
                      <li>       Motor vehicle (MV) Acknowledgment Receipt</li>
                      <li>       New Inactivity Request</li>
                      <li>       Duplicate Request</li>
                      <li>       View Duplicate requests</li>
                      <li>       Owner Ship Transfer</li>
                      <Li>       View Owner Ship Transfer Requests</li>
                      <li>       Ownership Certificate Request</li>
                      <li>       View Ownership Certificate Requests</li>
                      <ul>`,
                      `<strong>MyRRA</strong>`,
                      `The MyRRA system is a unified gateway that allows taxpayers to access a range of tax services provided by the Rwanda Revenue Authority. `,
                      `<strong>How to Login into MyRRA?</strong>`,
                     ` Visit RRA website and click on the top right menu labelled “Login to MyRRA" as per the below picture:`,
                     `<strong>IMAGE HERE!!</STRONG>`,
                     `Or use the following link:<a href ="https://myrra.rra.gov.rw/indexMain">https://myrra.rra.gov.rw/indexMain</a>`,
                    ` Once clicked, the following access picture will be displayed on the screen:`,
                    `<strong> IMAGE HERE!!!</strong>`,
                    ` Click on 'Sign Up' to access MyRRA for the first time, or 'Login' if you already have credentials. If you have forgotten your password, the system provides an option to reset it by clicking on 'Forgot your Password'.`,
                            `<strong>Services available through MyRRA</strong>`,
                            `MyRRA offers various features including the following:`,
                            `<ul>
                            <li> View current tax declarations</li>
                            <li> View undeclared taxes</li>
                            <Li> View unpaid taxes </li>
                            <li> Request EBM </li>
                            <li> Registration on VAT Reward</li> 
                            <li> Checking your VAT Reward information details</li>
                            </ul>`,
                            `In addition to the above services, through MyRRA, a taxpayer can access other information displayed on the following picture: `,
                            `<strong>IMAGE HERE!!!</strong>`,                
           ],
    },
  },
  {
    id: 'exchange-of-information',
    title: {
      en: 'Exchange of Information',
      fr: "Échange d'informations",
      rw: 'Guhana amakuru',
    },
    content: {
      en: [
                 ` In 2017, Rwanda joined the international crusade against tax evasion and fraud by becoming a member of Global Forum on Transparency and Exchange of Information for Tax purposes and acceded to the convention on Mutual Administrative Assistance in Tax Matters as amended by the 2010 Protocol on 11 August 2021. `,
                   `<strong> Exchange of Information on Request (EOIR)</strong>`,
                        `Rwanda implemented the Exchange of Information on Request (EOIR) standard of the Global Forum that allows tax authorities to request specific financial and legal information from other countries to support audits and investigations and ensure compliance with tax laws.`,
                        `<strong>   Requirements for the EOIR partner countries</strong>`,
                       ` Country partner of EOIR is required to provide partner jurisdictions with access to:`,
                       `<ul>
                        <li>Bank account information</li>
                        <li>     Legal and beneficial ownership records</li>
                        <li>   Accounting and financial documentation.</li>
                        </ul>`,
                       ` Partner jurisdictions of Rwanda are also required to avail the above-mentioned information for Rwanda to access them.`,
                     `<strong>  What does this mean for taxpayers and entities?</strong>`,
                       ` All individuals, businesses, and legal entities must maintain complete and accurate financial and ownership records, including the identity of beneficial owners. These records may be shared with other partner jurisdictions upon request, so as they can share the same information with Rwanda upon request.`,
                     `<strong>EOIR Non-compliance consequences to taxpayers</strong>`,
                       ` Failure to provide required information or intentional non-disclosure may result in fines, legal action, or criminal prosecution, in accordance with the Tax Procedure Law.`,
               `<strong> Automatic Exchange of Information (AEOI)</strong>`,
                      `  It is a country commitment to implementing the Automatic Exchange of Information (AEOI) standard under the OECD’s Common Reporting Standard (CRS). This allows for the annual automatic exchange of financial account information between jurisdictions.`,
                       `All financial institutions in Rwanda must report information on financial accounts held by non-residents through the AEOI portal, not later than 30 April each year. The first data exchange is scheduled for September 2025.`,
                `<strong>Consequences of AEOI non-compliance by financial institutions</strong>`,
                       ` The Tax Administration is vested with powers to impose administrative sanctions for the faults provided for under law n° 021/2023 of 31/03/2023 governing the automatic exchange of information for tax purposes.`,
                 `<Strong>  Security of shared information </strong>`,
                       `The Government of Rwanda is committed to high standards of data security and confidentiality. Information collected locally or from foreign jurisdictions is strictly protected and used solely for tax purposes, in line with national laws and international agreements.`,
                 `<strong>  Step-by-Step guide to declaring domestic taxes</strong>`,
                 `<strong>    Step 1: Log-in to E-Tax</strong>`,
                ` Access the E-Tax website at<a href=" https://etax.rra.gov.rw">  https://etax.rra.gov.rw/</a> or through the RRA website <a href ="https://www.rra.gov.rw/">  https://www.rra.gov.rw</a>  and clicking on ‘Pay Domestic taxes here’ on the right of the screen. This loads the following login screen:`,



      ],
    },
  },
];
