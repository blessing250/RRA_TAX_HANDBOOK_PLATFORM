import type { HandbookTopic } from '@/lib/types/handbook';

export const generalInformation: HandbookTopic = {
  slug: 'general-information',
  category: 'general',
  title: {
    en: 'General Information',
    fr: 'Informations generales',
    rw: 'Amakuru rusange',
  },
  summary: {
    en: 'The RRA Tax Handbook is a simplified guide for taxpayers to understand the tax laws and procedures for all tax types in Rwanda.',
  },
  sections: [
    {
      id: 'introduction',
      title: {
        en: 'Introduction',
        fr: 'Introduction',
        rw: 'Intangiriro',
      },
      content: {
        en: [
          `Rwanda’s development relies on the sustainable mobilization of domestic resources and active citizen participation. Meeting tax obligations is essential to financing national growth and improving public well-being. `,
          `<blockquote>“The task ahead is to sustain and raise this growth, and use our resources productively. We cannot count on anyone else to finance our development and well-being. Our most important asset as a nation is our capable young people. It is your task, as young Rwandans, to sustain what we have built, and take it further." </blockquote>`,
          `- New Year 2026 Message by President Kagame | Kigali, 31 December 2025. `
        ],
      },
    },
    {
      id: 'purpose-of-this-tax-handbook',
      title: {
        en: 'Purpose of this tax handbook',
        fr: 'Objectif de ce guide fiscal',
        rw: "Intego y'iki gitabo cy'imisoro",
      },
      content: {
        en: [
          'The RRA Tax Handbook is a simplified guide for taxpayers to understand the tax laws and procedures for all tax types in Rwanda. It covers how to register, declare and pay each of the domestic taxes, Local Government Taxes (LGT) and fees, and customs duties.',
          `<strong>Disclaimer</strong>`,
          `This Tax Handbook is updated periodically to reflect current tax policies and procedures. It is intended for guidance purposes only and does not override or supersede the tax laws. For detailed and authoritative information, please refer to the relevant tax laws, Ministerial Orders, and rulings available here: <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings" target="_blank">RRA Tax Laws</a>`,
         
        ],
      },
    },
    {
      id: 'foreword-by-the-commissioner-general',
      title: {
        en: 'Foreword by the Commissioner General',
        fr: 'Avant-propos du Commissaire General',
        rw: "Ijambo ry'ibanze rya Komiseri Mukuru",
      },
      content: {
        en: [
         `It gives me great pleasure to present the second edition of the Rwanda Revenue Authority (RRA) Tax Handbook. This Tax Handbook demonstrates RRA’s strong commitment to its motto, “Here for You, to Serve”. This means that at RRA, we strive to provide the best possible service to you, taxpayers.`,
            `This Tax Handbook seeks to answer taxpayers’ questions about the taxes they are required to pay, how and when to declare and pay them, where to access tax services, how much tax is due, and why they are required to pay taxes. `,
           ` In this edition, we provide updates on the new tax laws relating to income tax, value-added tax, revenue and property of decentralised entities, excise duty, the automatic exchange of information for tax purposes, and tax procedures.`,
            `The Handbook covers all aspects of domestic taxes, local government taxes and fees, and customs duties. This means that Rwanda’s tax laws, processes and procedures are summarised in one place for the benefit of all taxpayers.`,
            `Another important aim of this Tax Handbook is to show taxpayers how easily they can declare and pay taxes online or by mobile phone. It provides simple, step-by-step guides to declaring taxes using E-Tax, M-Declaration, and the Local Government Taxes (LGT) system.`,
            `Once taxes have been declared, they can be paid easily using systems such as E-Payment, online banking, and Mobile Money. These systems make it easier and faster than ever for taxpayers to fulfil their tax obligations.`,
            `In addition, the sections providing general information about RRA are important in helping taxpayers understand the processes through which RRA monitors tax compliance, facilitates arrangements for paying outstanding tax liabilities, ensures fair hearings, and penalises non-compliance.`,
            `Ultimately, the aim of this Tax Handbook is to help taxpayers fully understand their tax obligations and recognise that RRA is working for them. `,
            `We want taxpayers to share with their friends, suppliers, customers, and competitors the message that paying taxes has never been easier or more important in financing our country’s development.`,

          `<strong>NIWENSHUTI Ronald</strong>`,
          `<strong>Commissioner General</strong>`,
        ],
      },
    },
        {
      id: 'definitions',
      title: {
        en: 'Definitions',
        fr: 'Definitions',
        rw: 'Ibisobanuro',
      },
      content: {
        en: [
          `<ul><li><strong>Taxpayer</strong> – an individual, legal entity (such as a company, organisation or institution), or association of individuals (such as a cooperative) that is liable to tax under Rwandan tax laws. </li>
          <li><strong>TIN</strong>– ‘TIN’ refers to the Taxpayer Identification Number. This is a unique reference number to be used in all interactions with RRA. No taxpayer should ever have more than one TIN for the same business. </li>
          <li><strong>Registration</strong> – There are two types of ‘registration’ concerning RRA. Firstly, taxpayers must register their business, or register as an individual, and receive their unique Taxpayer Identification Number (TIN). Secondly, taxpayers must also register for each relevant tax type, as soon as they fulfil the requirements for that tax type.</li>
          <li><strong>Declaration</strong>– Taxpayers must submit a tax ‘declaration’ each tax period for each tax type for which they are registered. Declaring is also referred to as ‘tax filing’. The tax declaration contains all the information, including annexures and declaration forms, required by RRA to determine the amount of tax due for that tax period.</li>
          <li><strong>Payment</strong>– After submitting a tax declaration, the taxpayer must then pay any tax due to the correct RRA account. The RRA reference number received after declaring ensures each payment is to the correct account.</li>
          <li><strong>Tax period</strong>– The ‘tax period’ refers to the period of time that the declaration refers to, which varies by tax type. The declaration concerns the taxable activities during the tax period. Note that the tax period is often not the same as the deadline or the date at the time of declaration.</li>
          <li><strong>Deadline</strong>– The deadline refers to the date that tax declarations and payments must be submitted in order to avoid penalties and fines. Taxes can be declared and paid at any time between the end of the tax period and the deadline. This is referred to as the ‘filing period’.Transaction – A ‘transaction’ refers to any payment or exchange of goods or services being bought or sold. </li>
          <li><strong>Annexures</strong> – During the declaration process, many tax types require additional information to be submitted in ‘annexures’. Typically, annexures are spreadsheets, with separate ‘tabs’ for different aspects, and are completed for every relevant transaction during the tax period.</li>
          <li><strong>Declaration Form</strong> – During the declaration process, each tax type also requires the key information to be submitted in a ‘declaration form’. This requires the total of all relevant transactions during the tax period.
          </li><li><strong>Turnover</strong> – The total value of sales made by a taxpayer in a tax period. This may also be referred to as revenue, business income or total sales. Note that turnover is not the same as profit, as profit takes into account the taxpayer’s business costs.</li>
          <li><strong>Compliance</strong>– The extent to which taxpayers fulfil all their tax obligations, including registering, declaring accurately and paying taxes on time. Businesses or individuals that are ‘non-compliant’ may face penalties, fines and other enforcement measures. </li>
          <li><strong>Arrears</strong> –  any amount owed by a taxpayer to RRA, including unpaid taxes, penalties, fines and interest after the applicable deadline.</li>
          <li><strong>Refunds</strong>  – Any amount of VAT owed by RRA to taxpayers. These are also referred to as ‘tax credits’ for other tax types. ‘Refunds’ can be received by taxpayers in the form of ‘cash’ while tax credits in the form of ‘credit notes’ that can be deducted against future taxes, or cash.</li>
          <li><strong>Consignment</strong> – Any group of goods that is declared together when importing or exporting. Typically, this refers to the ‘container load’ or ‘truck load’ that is being transported together. </li>
          <li><strong>FRW</strong> – Rwandan Francs. This is the currency of Rwanda and the currency that all declarations and payments must be made in unless otherwise specified.</li></ul>`,
        ],
      },
    },
     {
      id: 'acronyms',
      title: {
        en: 'Acronyms',
        fr: 'Acronymes',
        rw: 'Impine',
      },
      content: {
        en: [
          `<strong>AEO</strong>: Authorised Economic Operator`,
          `<strong>AEOI</strong>: Automatic Exchange of Information`,
          `<strong>AfCFTA</strong>: African Continental Free Trade Area`,
          `<strong>AUL</strong>: African Union Levy`,
          `<strong>BDF</strong>: Business Development Fund`,
          `<strong>BNR</strong>: National Bank of Rwanda`,
          `<strong>BRD</strong>: Development Bank of Rwanda`,
          `<strong>CBHI</strong>: Community Based Health Insurance`,
          `<strong>CD</strong>: Corps Diplomatic`,
          `<strong>CET</strong>: Common External Tariff`,
          `<strong>CG</strong>: Commissioner General`,
          `<strong>CIF</strong>: Cost, Insurance and Freight`,
          `<strong>CIT</strong>: Corporate Income Tax`,
          `<strong>CMA</strong>: Customs Management Act`,
          `<strong>COMESA</strong>: Common Market of Eastern and Southern Africa`,
          `<strong>CRS</strong>: Common Reporting Standard`,
          `<strong>CSD</strong>: Customs Services Department`,
          `<strong>DAD</strong>: Dédouanement à Domicile`,
          `<strong>DC</strong>: Deputy Commissioner`,
          `<strong>DCG</strong>: Deputy Commissioner General`,
          `<strong>DMC</strong>: Déclaration de Mise à la Consommation`,
          `<strong>DPW</strong>: Dubai Port World`,
          `<strong>DRC</strong>: Democratic Republic of Congo`,
          `<strong>DTD</strong>: Domestic Taxes Department`,
          `<strong>DTAA</strong>: Double Taxation Avoidance Agreement `,
          `<strong>EAC</strong>: East African Community`,
          `<strong>EBM</strong>: Electronic Billing Machine`,
          `<strong>EIS</strong>: Electronic Invoicing System`,
          `<strong>EO</strong>: Executive Organ`,
          `<strong>EOI</strong>: Exchange of Information`,
          `<strong>EOIR</strong>: Exchange of Information on Request`,
          `<strong>FER</strong>: Fonds d’Entretien Routier`,
          `<strong>FOB</strong>: Free On Board`,
          `<strong>FRW</strong>: Franc Rwandais`,
          `<strong>HF</strong>: Handling Fee`,
          `<strong>IDL</strong>: Infrastructure Development Levy`,
          `<strong>IGO</strong>: Inter-Governmental Organisation`,
          `<strong>IQP</strong>: Instalment Quarterly Payment`,
          `<strong>IT</strong>: Immatriculation Temporaire`,
          `<strong>LGT</strong>: Local Government Taxes`,
          `<strong>MINAFFET</strong>: Ministry of Foreign Affairs, Cooperation and East African Community`,
          `<strong>MINECOFIN</strong>: Ministry of Finance and Economic Planning`,
          `<strong>MINICOM</strong>: Ministry of Trade and Industry`,
          `<strong>MININFRA</strong>: Ministry of Infrastructure`,
          `<strong>MINIRENA</strong>: Ministry of Natural Resources`,
          `<strong>MSIC</strong>: Millennium Savings & Investment Cooperative`,
          `<strong>MTN</strong>: Mobile Telephone Networks`,
          `<strong>MVF</strong>: Motor Vehicle Registration Fee`,
          `<strong>NGO</strong>: Non-Governmental Organisation`,
          `<strong>NID</strong>: National Identification`,
          `<strong>NISR</strong>: National Institute of Statistics Rwanda`,
          `<strong>OECD</strong>: Organisation for Economic Co-operation and Development`,
          `<strong>ORG</strong>: Office of the Registrar General`,
          `<strong>OS</strong>: Operating System`,
          `<strong>OSBP</strong>: One-Stop Border Post`,
          `<strong>PAYE</strong>: Pay As You Earn`,
          `<strong>PCA</strong>: Post-Clearance Audit`,
          `<strong>PIT</strong>: Personal Income Tax`,
          `<strong>PSF</strong>: Private Sector Federation`,
          `<strong>QIF</strong>: Quality Inspection Fee`,
          `<strong>RAMA</strong>: Rwandaise d’Assurance Maladie`,
          `<strong>RCA</strong>: Rwanda Cooperatives Authority`,
          `<strong>RDB</strong>: Rwanda Development Board`,
          `<strong>RECTS</strong>: Rwanda Electronic Cargo Tracking System`,
          `<strong>ReSW</strong>: Rwanda electronic Single Window`,
          `<strong>RGB</strong>: Rwanda Governance Board`,
          `<strong>RICA</strong>: Rwanda Inspectorate, Competition and Consumer Protection Authority`,
          `<strong>RIED</strong>: Revenue Investigation and Enforcement Dept`,
          `<strong>RMB</strong>: Rwanda Mines, Petroleum and Gas Board`,
          `<strong>RMF</strong>: Road Maintenance Fund`,
          `<strong>RRA</strong>: Rwanda Revenue Authority`,
          `<strong>RSSB</strong>: Rwanda Social Security Board`,
          `<strong>SMS</strong>: Short Message Service`,
          `<strong>SRL</strong>: Strategic Reserves Levy`,
          `<strong>TCC</strong>: Tax Clearance Certificates`,
          `<strong>TIN</strong>: Taxpayer Identification Number`,
          `<strong>TP</strong>: Transfer Pricing`,
         `<strong> UPI</strong>: Unique Plot Identifier`,
          `<strong>UN</strong>: United Nations`,
          `<strong>USD</strong>: United States Dollars`,
          `<strong>USSD</strong>: Unstructured Supplementary Service Data`,
          `<strong>VAT</strong>: Value Added Tax`,
          `<strong>VDS</strong>: Voluntary Disclosure Scheme`,
          `<strong>VSDC</strong>: Virtual Sales Data Controller`,
          `<strong>WHT</strong>: Withholding Tax`,
          `<strong>WOP</strong>: Withholding on Payments`,
        ],
      },
    },
     {
      id: 'history-of-taxes-in-rwanda',
      title: {
        en: 'History of Taxes in Rwanda',
        fr: 'Histoire des impots au Rwanda',
        rw: "Amateka y'imisoro mu Rwanda",
      },
      content: {
        en: [
         `<ul><li><strong>1925</strong> – First property and profit taxes established.</li>
        <li><strong>1964</strong> – Profit tax formally incorporated into Rwandan law.</li>
        <li><strong>1968</strong> – Law on customs and excise duties introduced.</li>
        <li><strong>1997</strong> – Rwanda Revenue Authority (RRA) established.</li>
        <li><strong>1998</strong> – RRA began operations with 633 registered taxpayers.</li>
        <li><strong>2001</strong> – Value Added Tax (VAT) introduced.</li>
        <li><strong>2001</strong> – Taxpayer Appreciation Day introduced</li>
        <li><strong>2004</strong> – ASYCUDA and Post-Clearance Audit (PCA) introduced to modernise customs administration.</li>
        <li><strong>2005</strong> – Direct Taxes on Income Law introduced, including transfer pricing provisions.</li>
        <li><strong>2009</strong> – Rwanda joined the East African Community (EAC) and introduced the Block Management System (BMS).</li>
        <li><strong>2012</strong> – Rwanda Electronic Single Window (ReSW) and ASYCUDA World introduced.</li>
        <li><strong>2013</strong> – Electronic Billing Machines (EBMs) introduced to improve VAT administration.</li>
        <li><strong>2014</strong> – RRA began collecting decentralised taxes on behalf of districts.</li>
        <li><strong>2015–2017</strong> – Major digital and customs reforms, including LGT systems, banking integration, Electronic Cargo Tracking System (ReCTS), and One Stop Border Posts (OSBPs).</li>
        <li><strong>2018</strong> – EBM Version 2 launched;</li>
        <li><strong>2018</strong>: New Income Tax Law strengthened provisions on transfer pricing, capital gains, and dividends.</li>
        <li><strong>2023</strong> – New Operating Model completed</li>
        <li><strong>2023</strong> - MyRRA portal launched.</li>
        <li><strong>2024</strong>: RRA launched the Automated Exchange of Information (AEOI)</li>
        <li><strong>2025</strong> – Motor vehicle ownership transfers automated.</li>
        <li><strong>2026</strong> – ASYCUDA World upgraded from version 4.3.2 to 4.4.1.</li></ul>`,
        ],
      },
    },
        {
      id: 'rra-service-charter',
      title: {
        en: 'RRA Service Charter',
        fr: 'Charte de service de la RRA',
        rw: 'Amasezerano ya serivisi ya RRA',
      },
      content: {
        en: [
          ` The RRA Service Charter contains details on taxpayers’ rights and obligations, as well as the range of services offered by RRA. Some of these services, such as issuance of tax clearance certificates or motor vehicle number plates, charge a cost. The RRA Service Charter contains the requirements, timelines and costs of each of these services. To view the RRA Service Charter, visit the ‘Publication’ section of the RRA <a href="https://www.rra.gov.rw/en/rra-service-charter-iv" target="_blank">RRA website</a>.`,
        ],
      },
    },
   
    {
      id: 'taxpayers-rights-and-obligations',
      title: {
        en: 'Taxpayers’ Rights and Obligations',
        fr: 'Droits et obligations des contribuables',
        rw: 'Uburenganzira n’inshingano by’usora',
      },
      content: {
        en: [
          `Rwanda Revenue Authority (RRA) considers taxpayers’ rights and obligations in dealing with them on tax matters. `,
          `<strong>Taxpayers’ Rights: </strong>`,
          `<ul >
          <li>Right to quality and timely services</li>	
          	<li>Right to clear information</li>
          	<li>Right to access RRA services through appropriate channels</li>
          	<li>Right to submit requests and receive responses</li>
          	<li>Right to accessible communication channels</li>
          	<li>Right to access eligible tax services and facilities</li>
          	<li>Right to know the cost of services</li>
          	<li>Right to convenient and increasingly digital service delivery</li>
             </ul>`,
         `<strong>Taxpayers’ Obligations: </strong>`,
          `<ul>
         <li>	Register for tax purposes where required</li>
            	<li>Declare and pay taxes within the prescribed deadlines</li>
            	<li>Provide complete and accurate information and supporting documents</li>
            	<li>Keep required tax and accounting records</li>
            	<li>Comply with tax and customs requirements</li>
            	<li>Meet the requirements for specific services</li>
            	<li>Provide accurate taxpayer information and keep it updated</li>
            	<li>Settle outstanding tax liabilities</li>
            	<li>Use required tax compliance systems and devices</li>
            	<li>Submit requests with the required information</li>
          </ul>`,
        ],
      },
    },
  ],
};