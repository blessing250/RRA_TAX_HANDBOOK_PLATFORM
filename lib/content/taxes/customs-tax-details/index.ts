import { borderPostsAndDryPortsSection } from "@/lib/content/taxes/customs-tax-details/border-posts-and-dry-ports"
import { customsClearingAgentsSection } from "@/lib/content/taxes/customs-tax-details/customs-clearing-agents"
import { customsFacilitiesSection } from "@/lib/content/taxes/customs-tax-details/customs-facilities"
import { customsPenaltiesSection } from "@/lib/content/taxes/customs-tax-details/customs-penalties"
import { declaringImportsAndExportsSection } from "@/lib/content/taxes/customs-tax-details/declaring-imports-and-exports"
import { importingMotorVehiclesSection } from "@/lib/content/taxes/customs-tax-details/importing-motor-vehicles"
import { mobileCargoScannersSection } from "@/lib/content/taxes/customs-tax-details/mobile-cargo-scanners"
import { typesOfCustomsDutiesSection } from "@/lib/content/taxes/customs-tax-details/types-of-customs-duties"

export const customsTaxSections = [
  typesOfCustomsDutiesSection,
  borderPostsAndDryPortsSection,
  customsClearingAgentsSection,
  declaringImportsAndExportsSection,
  customsFacilitiesSection,
  mobileCargoScannersSection,
  importingMotorVehiclesSection,
  customsPenaltiesSection,
]
