import { domesticTaxCentersDetail } from "@/lib/content/taxes/local-tax-details/domestic-tax-centers"
import { domesticTaxPenaltiesAndFinesDetail } from "@/lib/content/taxes/local-tax-details/domestic-tax-penalties-and-fines"
import { customsTaxesDetail } from "@/lib/content/taxes/local-tax-details/customs-taxes"
import { feesLeviedByDecentralizedEntitiesDetail } from "@/lib/content/taxes/local-tax-details/fees-levied-by-decentralized-entities"
import { immovablePropertyTaxDetail } from "@/lib/content/taxes/local-tax-details/immovable-property-tax"
import { rentalIncomeTaxDetail } from "@/lib/content/taxes/local-tax-details/rental-income-tax"
import { taxOnSaleOfImmovablePropertyDetail } from "@/lib/content/taxes/local-tax-details/tax-on-sale-of-immovable-property"
import { tradingLicenseDetail } from "@/lib/content/taxes/local-tax-details/trading-license"
import type { LocalTaxDetailPage } from "@/lib/content/taxes/local-tax-details/shared"

export type { LocalTaxDetailPage } from "@/lib/content/taxes/local-tax-details/shared"

export const localTaxDetailPages: Record<string, LocalTaxDetailPage> = {
  [immovablePropertyTaxDetail.slug]: immovablePropertyTaxDetail,
  [taxOnSaleOfImmovablePropertyDetail.slug]: taxOnSaleOfImmovablePropertyDetail,
  [tradingLicenseDetail.slug]: tradingLicenseDetail,
  [rentalIncomeTaxDetail.slug]: rentalIncomeTaxDetail,
  [feesLeviedByDecentralizedEntitiesDetail.slug]: feesLeviedByDecentralizedEntitiesDetail,
  [domesticTaxPenaltiesAndFinesDetail.slug]: domesticTaxPenaltiesAndFinesDetail,
  [domesticTaxCentersDetail.slug]: domesticTaxCentersDetail,
  [customsTaxesDetail.slug]: customsTaxesDetail,
}

export function getLocalTaxDetailPage(slug: string) {
  return localTaxDetailPages[slug]
}
