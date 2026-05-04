import {
  localTaxLastUpdated,
  section,
  type LocalTaxDetailPage,
} from "@/lib/content/taxes/local-tax-details/shared"

export const domesticTaxPenaltiesAndFinesDetail: LocalTaxDetailPage = {
  slug: "domestic-tax-penalties-and-fines",
  title: {
    en: "Domestic Tax penalties and fines",
    fr: "Penalites et amendes fiscales domestiques",
    rw: "Ibihano n'amande ku misoro y'imbere mu gihugu",
  },
  intro: {
    en: [
      "A taxpayer who has fails to submit a tax declaration and payment within the required deadline must still declare and pay, and is subject to the following penalties and fines.",
    ],
  },
  sections: [
    section("administrative-fine-for-non-declaration-and-non-payment", "Administrative fine for non-declaration and non-payment"),
    section("interest-rates-for-late-payment", "Interest rates for late payment"),
    section("fixed-administrative-fines-for-late-filing", "Fixed administrative fines for late filing"),
    section("penalties-for-late-payment-despite-timely-declaration", "Penalties for late payment despite timely declaration"),
    section("repeat-the-offense", "Repeat the offense"),
    section("penalties-for-tax-underdeclaration", "Penalties for tax underdeclaration"),
    section("rules-concerning-interest-fixed-fines-and-repeat-offenders", "Rules concerning interest, fixed administrative fines and repeat offenders"),
    section("payment-allocation-rule", "Rule for payment allocation between principal tax, penalties, and interest"),
  ],
  lastUpdated: localTaxLastUpdated,
}
