import {
  centralTaxLastUpdated,
  section,
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
  lastUpdated: centralTaxLastUpdated,
}
