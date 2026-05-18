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
        'All laws, ministerial orders, Commissioner General rulings, public rulings and ruling cases governing tax administration are available on the RRA website at <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings" target="_blank">https://www.rra.gov.rw/en/laws-policies-and-rulings</a>.',
        'If there are any aspects that are unclear, or not covered by the existing laws, ministerial orders or previous rulings, taxpayers may ask RRA for an official clarification or ruling.',
        'To request a ruling, taxpayers write a letter addressed to the Commissioner General of RRA. The letter should identify the taxpayer name and TIN, identify the relevant legal sections or previous rulings, and state the reasons that a ruling is required.',
        'RRA considers the request and informs the taxpayer directly. If the ruling is useful to taxpayers more generally, it may also be published as an official ruling on the RRA website.',
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
        'The general obligations of all taxpayers include:',
        '<ul><li> - Keeping RRA informed of changes in contact details or physical address within ten days.</li><li>- Keeping books of account</li><li>- Submitting tax declarations.</li><li>- Paying due taxes, and cooperating fully with RRA officers and correspondence.</li></ul>',
        'For additional obligations of taxpayers that are registered for specific tax types, see the relevant chapters of this Tax Handbook.',
        '<strong>What are ‘Books of Account’ and what bookkeeping is required of taxpayers?</strong>',
        'Books of account help businesses track cash flow and profitability. The minimum information required by RRA is a record of each sale transaction, including the date, client, nature of goods and amount recorded.',
        'Taxpayers with annual turnover between FRW 12,000,000 and FRW 20,000,000 must also keep records of daily purchases, financial transactions, tax liability, withheld tax, and declarations of withheld tax.',
        'Taxpayers with annual turnover above FRW 20,000,000 must keep records of assets and liabilities, daily income and expenses, stock inventory at the end of the period and information related to controlled transactions.',
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
        "An audit is one of the methods RRA uses to ensure that taxpayers are correctly declaring and paying their taxes. Audits involve RRA checking relevant documents concerning a taxpayer's tax obligations for any tax period within the past five years.",
        'If there is evidence of non-compliance, the taxpayer receives an assessment notice containing details of the offence, unpaid tax due, and any additional penalties or fines.',
        'Being selected for an audit does not necessarily mean RRA suspects the taxpayer of non-compliance. RRA may check declarations and payments in more detail to encourage a high level of compliance.',
        'Audit processes are similar for domestic taxes, Local Government Taxes and fees, and Post-Clearance Audits concerning customs duties.',
        '<strong>Different types of audits</strong>',
        '<ul><li>Comprehensive audit.</li><li>Issue-oriented audit.</li><li>Desk audit.</li><li>Transfer pricing audit.</li><li>Refund audit.</li></ul>',
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
        'Taxpayers may overpay the amount of taxes due and require refunds or tax credits. This happens most often for VAT, Income Tax, audits, appeals, or accidental overpayment.',
        'VAT refunds can arise where VAT paid on inputs exceeds output VAT, particularly for zero-rated products and exports.',
        'Income Tax credits can arise where Instalment Quarterly Prepayments and Withholding Taxes paid on behalf of the taxpayer exceed the Income Tax due.',
        "In the case of VAT refunds, the process requires no initial action from the taxpayer. Higher value refund claims are paid to the taxpayer's bank account, while lower value claims may be deducted against future payments.",
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
        'Taxpayers may appeal to RRA against decisions within 30 days following the conclusion of audits or receiving assessment notices of taxes or penalties.',
        'Taxpayers are still required to pay taxes or penalties within the original deadlines. If appeals are successful, taxpayers receive refunds or credit notes. When the undisputed portion has been paid, the Commissioner General may suspend collection of tax subject to appeal.',
        'To appeal, taxpayers write a letter addressed to the Commissioner General of RRA within 30 days of receiving notice of the decision. The letter should identify the taxpayer name and TIN, tax period and tax types concerned, decision being appealed, reasons for appeal, and supporting documents or legal arguments.',
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
        'A tax debt is the amount of money a taxpayer owes to a tax authority due to unpaid taxes, underreported income or incorrect filings, penalties, and interest for late payments or non-compliance.',
        'Tax debt arises when the tax due is not paid in full by the deadline upon receipt of a system-generated assessment notice or after audit. It remains a liability until settled through payment, offset, or approved arrangements.',
        'Taxpayers who cannot pay tax arrears or assessment notices at once may apply to pay in instalments. The taxpayer must pay at least 10% of the tax due before applying.',
        'The payment plan should show an intention to pay the full amount within a maximum period of 12 months. The Commissioner General may extend this period by up to 24 months where justified.',
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
        'There are six main types of certificates available from RRA: VAT certificate, Tax Clearance Certificates, Compliance Certificate (Quitus Fiscal), Foreign Tax Credit certificate, Trading License Tax certificate, and Electronic Billing Machine certificate.',
        'The Foreign Tax Credit certificate is available for taxpayers to prove that they have paid taxes in Rwanda. It must be requested from RRA offices and is processed on a case-by-case basis.',
        'VAT certificates certify that the taxpayer is registered for VAT. VAT registered taxpayers are required to clearly display the VAT registration certificate in plain view at their main place of business.',
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
        'The Voluntary Disclosure Scheme is an opportunity provided by law to non-compliant persons to declare and pay their tax with reduced sanctions.',
        'VDS facilitates automatic waiver of penalties and interest for late payment, payment within 30 days, and issuance of a certificate for voluntary disclosure.',
        'Article 94 of Law No. 020/2023 of 31/03/2023 on Tax Procedures provides that interest and penalties do not apply to taxpayers who voluntarily disclose. Ministerial Order No. 001/24/03/TC of 08/03/2024 sets out procedures and conditions for accessing voluntary disclosure incentives.',
      ],
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
        'Transfer of motor vehicles is required when ownership of the vehicle changes. This can happen due to sale, donation, inheritance, public or private auction, and court orders.',
        'The transfer fee is FRW 30,000 for motorcycles and FRW 60,000 for all other motor vehicles.',
        'Documents required for motor vehicle transfer include a notarised sale contract, registration transfer fee payment receipt, latest yellow card and plate number for the motor vehicle.',
        'RRA motor vehicle services also include requests related to duplicate documents, ownership transfer, ownership certificates and viewing related requests through the appropriate systems.',
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
        'In 2017, Rwanda joined the international effort against tax evasion and fraud by becoming a member of the Global Forum on Transparency and Exchange of Information for Tax Purposes.',
        'Rwanda implemented the Exchange of Information on Request standard, which allows tax authorities to request specific financial and legal information from other countries to support audits, investigations and compliance with tax laws.',
        'Partner jurisdictions are required to provide access to bank account information, legal and beneficial ownership records, and accounting and financial documentation.',
        'Individuals, businesses and legal entities must maintain complete and accurate financial and ownership records, including the identity of beneficial owners. These records may be shared with partner jurisdictions upon request.',
      ],
    },
  },
];
