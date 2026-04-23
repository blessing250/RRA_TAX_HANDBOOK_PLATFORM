import { apiClient } from "./axios";
import type { Category } from "../../types/category";

function toBackendLocale(locale: string) {
  if (locale === "fr") return "FR";
  if (locale === "rw") return "KIN";
  return "EN";
}

export async function getCategories(locale: string) {
  return apiClient<Category[]>(`/api/categories?locale=${toBackendLocale(locale)}`, {
    next: { revalidate: 60 },
  });
}
