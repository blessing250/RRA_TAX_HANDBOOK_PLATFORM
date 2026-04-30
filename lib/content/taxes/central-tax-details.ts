import type { LocalizedText } from "@/lib/types/handbook"

type CentralTaxDetailSection = {
  id: string
  title: LocalizedText
  content?: Partial<Record<"en" | "fr" | "rw", string[]>>
}

export type CentralTaxDetailPage = {
  intro: Partial<Record<"en" | "fr" | "rw", string[]>>
  lastUpdated: LocalizedText
  sections: CentralTaxDetailSection[]
  slug: string
  title: LocalizedText
}

const lastUpdated = {
  en: "This page was last updated on: 05/03/2026",
  fr: "Cette page a ete mise a jour le : 05/03/2026",
  rw: "Iyi paji iherukaga kuvugururwa ku wa: 05/03/2026",
}

function section(id: string, title: string): CentralTaxDetailSection {
  return {
    id,
    title: {
      en: title,
      fr: title,
      rw: title,
    },
    content: {
      en: [
        "Detailed guidance for this topic will be migrated from the edited handbook document.",
      ],
      fr: [
        "Les informations detaillees de cette rubrique seront migrees depuis le document du guide fiscal edite.",
      ],
      rw: [
        "Ibisobanuro birambuye kuri iyi ngingo bizavanwa mu nyandiko ivuguruye y'igitabo cy'imisoro.",
      ],
    },
  }
}

export const centralTaxDetailPages: Record<string, CentralTaxDetailPage> = {
  "income-tax": {
    slug: "income-tax",
    title: { en: "Income Tax", fr: "Impot sur le revenu", rw: "Umusoro ku nyungu" },
    intro: {
      en: [
        "Income Tax is a tax on income resulting from business, self-employment and investment activities. Income Tax ensures that all businesses benefiting from Rwanda's infrastructure, security and prosperity contribute their fair share towards the nation's development.",
      ],
    },
    sections: [
      section("taxable-income", "Taxable income"),
      section("income-tax-registration", "Income tax Registration"),
      section("income-tax-categories", "Income tax categories"),
      section("income-tax-regimes", "Income Tax regimes"),
      section("income-quarterly-prepayments", "Income Quarterly Prepayments (IQP)"),
      section(
        "declaring-flat-tax-lump-sum-and-iqp-income-tax-using-m-declaration",
        "Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration"
      ),
      section("step-by-step-declaration-guide", "Step by step declaration guide"),
    ],
    lastUpdated,
  },
  "pay-as-you-earn": {
    slug: "pay-as-you-earn",
    title: {
      en: "Pay As You Earn (PAYE)",
      fr: "Pay As You Earn (PAYE)",
      rw: "Pay As You Earn (PAYE)",
    },
    intro: {
      en: [
        "PAYE is tax on employment income. It is withheld by employers on behalf of their employees for efficient collection.",
      ],
    },
    sections: [
      section("registration", "Registration"),
      section("taxable-employment-income", "Taxable employment income"),
      section("exempted-employment-income", "Exempted employment income"),
      section("types-of-employees", "Types of employees"),
      section("types-of-employees-2", "Types of employees"),
      section("paye-calculation", "PAYE calculation"),
      section("paye-declaration", "PAYE declaration"),
      section("paye-payment", "PAYE Payment"),
    ],
    lastUpdated,
  },
  "value-added-tax": {
    slug: "value-added-tax",
    title: {
      en: "Value Added Tax (VAT)",
      fr: "Taxe sur la valeur ajoutee (TVA)",
      rw: "Umusoro ku nyongeragaciro (VAT)",
    },
    intro: {
      en: [
        "VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers.",
      ],
    },
    sections: [
      section("vat-registration", "VAT Registration"),
      section("obligations-of-vat-registered-taxpayers", "Obligations of VAT registered taxpayers"),
      section("taxpayers-responsible-to-pay-vat", "Taxpayers responsible to pay VAT"),
      section("taxpayers-responsible-to-pay-vat-2", "Taxpayers responsible to pay VAT"),
      section("vat-inclusive-and-exclusive-prices", "VAT inclusive and VAT exclusive prices"),
      section("goods-and-services-taxable-for-vat", "Goods and services taxable for VAT"),
      section("goods-and-services-zero-rated-for-vat", "Goods and services that are zero-rated for VAT"),
      section("goods-and-services-exempted-from-vat", "Goods and services exempted from VAT"),
      section("exemption-from-registering-for-vat", "Exemption from registering for VAT"),
      section("vat-reverse-charge", "VAT Reverse Charge"),
      section("vat-retained-by-public-institutions", "VAT Retained by Public Institutions"),
      section("vat-refund", "VAT refund"),
      section("declaration", "Declaration"),
      section("vat-refund-for-privileged-persons", "VAT Refund for Privileged Persons"),
      section("deductible-vat-reverse-tab", "Deductible VAT Reverse Tab"),
      section("payment", "Payment"),
      section("vat-penalties", "VAT penalties"),
    ],
    lastUpdated,
  },
  "excise-duty": {
    slug: "excise-duty",
    title: { en: "Excise Duty", fr: "Droits d'accise", rw: "Amahoro ku bicuruzwa byihariye" },
    intro: {
      en: [
        "Excise Duty is a tax applied to specific products. This means that it is able to discourage consumption with negative social impacts. This can reduce the costs of healthcare and policing, whilst raising significant revenues for further government spending. As Excise Duties are charged on the consumption of certain products, it is also referred to as an 'excise tax'.",
      ],
    },
    sections: [
      section("registration", "Registration"),
      section("obligations-of-taxpayers-registered-for-excise-duty", "Obligations of taxpayers registered for Excise Duty"),
      section("who-pays-excise-duty", "Who pays Excise Duty"),
      section("valuation-methods-of-excise-duty", "Valuation methods of Excise Duty"),
      section("taxable-products-and-rates", "Taxable products and rates"),
      section("exemptions-for-excise-duty", "Exemptions for Excise Duty"),
      section("tax-stamps", "Tax stamps"),
      section("annexures", "Annexures"),
      section("declaration-and-payment", "Declaration and payment"),
      section("penalties-for-tax-stamp-non-compliance", "Penalties for tax stamp non compliance"),
    ],
    lastUpdated,
  },
  "withholding-taxes": {
    slug: "withholding-taxes",
    title: { en: "Withholding Taxes", fr: "Retenues a la source", rw: "Imisoro ifatirwa" },
    intro: {
      en: [
        "Withholding taxes are paid on transactions on particular types of income. They are declared and paid by the taxpayer who is the source of the transaction, but on behalf of the recipient.",
        "The recipient is then able to claim the tax paid back in their Income Tax declarations.",
        "Withholding taxes ensure compliance by withholding tax on sources of income that might otherwise be difficult to trace. This increases the fairness of the tax system.",
      ],
    },
    sections: [
      section("types-of-withholding-taxes", "Types of withholding taxes"),
      section("registration", "Registration"),
      section("calculation", "Calculation"),
      section("declaration", "Declaration"),
      section("penalties-and-fines", "Penalties and fines"),
    ],
    lastUpdated,
  },
  "gaming-taxes": {
    slug: "gaming-taxes",
    title: { en: "Gaming Taxes", fr: "Taxes sur les jeux", rw: "Imisoro ku mikino" },
    intro: {
      en: [
        "Gaming taxes include Gaming Tax and Withholding Tax of 25% on Gambling Proceeds, also referred to as Withholding on Payments (WOP) on Gaming or 'WOP-Gaming'. These taxes are applied on the proceeds of gambling activities and can therefore help to reduce the negative social impacts associated with gambling.",
        "Gaming Tax is paid by the taxpayer on their income from gaming activities, whilst WOP-Gaming is withheld by the betting company on behalf of the player on their gambling proceeds.",
        "In each case, the taxpayer or player who is withheld from is then able to claim the tax paid back in income declarations. These tax types are both types of withholding taxes.",
      ],
    },
    sections: [
      section("registration", "Registration"),
      section("gambling-proceeds", "Gambling proceeds"),
      section("tax-rates", "Tax rates"),
      section("declaration", "Declaration"),
      section("gaming-taxes-penalties-and-fines", "Gaming Taxes Penalties and Fines"),
      section("gaming-taxes-penalties-and-fines-2", "Gaming Taxes Penalties and Fines"),
    ],
    lastUpdated,
  },
  "capital-gains-tax": {
    slug: "capital-gains-tax",
    title: { en: "Capital Gains Tax", fr: "Impot sur les gains en capital", rw: "Umusoro ku nyungu z'umutungo" },
    intro: {
      en: [
        "Capital Gains Tax applies to gains arising from qualifying disposals according to Rwanda's tax laws.",
        "This tax guidance explains registration, tax rates and declaration obligations for relevant taxpayers.",
      ],
    },
    sections: [
      section("registration", "Registration"),
      section("tax-rates", "Tax rates"),
      section("declaration", "Declaration"),
    ],
    lastUpdated,
  },
  "mining-royalty-tax": {
    slug: "mining-royalty-tax",
    title: { en: "Mining Royalty Tax", fr: "Redevance miniere", rw: "Umusoro ku bucukuzi bw'amabuye y'agaciro" },
    intro: {
      en: [
        "Mining Royalty Tax is a tax withheld from local mining operators by either a domestic mineral processing facility or an individual/entity exporting minerals from Rwanda.",
        "Tax on Minerals ensures that all Rwandans share in the benefits from the country's natural resources when these are taken out of Rwanda.",
        "Mining Royalty Tax is a type of withholding tax but cannot be claimed back in Income Tax declarations.",
      ],
    },
    sections: [
      section("registration", "Registration"),
      section("valuation-method-of-mining-royalty-tax", "Valuation method of Mining Royalty Tax"),
      section("tax-rates-per-minerals-category", "Tax rates per minerals category"),
      section("declaration", "Declaration"),
    ],
    lastUpdated,
  },
  "road-maintenance-levy": {
    slug: "road-maintenance-levy",
    title: { en: "Road Maintenance Levy", fr: "Taxe d'entretien routier", rw: "Amafaranga yo gufata neza imihanda" },
    intro: {
      en: [
        "Road Maintenance Levy is a tax imposed on petrol, gas oil, and motor vehicles to fund road maintenance. The levy on petrol and gas oil is collected at the customs point.",
        "The levy on new or already registered motor vehicles is declared and paid annually to the Domestic Taxes Department, no later than 31st December of each year.",
      ],
    },
    sections: [
      section("registration", "Registration"),
      section("tax-rates", "Tax rates"),
      section("exemptions", "Exemptions"),
      section("application-for-road-levy-maintenance-exemption", "Application for Road Levy Maintenance exemption"),
      section("declaration", "Declaration"),
    ],
    lastUpdated,
  },
  "tourism-tax": {
    slug: "tourism-tax",
    title: { en: "Tourism Tax", fr: "Taxe touristique", rw: "Umusoro ku bukerarugendo" },
    intro: {
      en: [
        "Tourism Tax is a levy paid on accommodation service, which consists of providing a room or place to sleep or rest.",
      ],
    },
    sections: [
      section("obligations", "Obligations"),
      section("registration", "Registration"),
      section("tax-rates", "Tax rates"),
      section("declaration", "Declaration"),
    ],
    lastUpdated,
  },
}

export function getCentralTaxDetailPage(slug: string) {
  return centralTaxDetailPages[slug]
}
