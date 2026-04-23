import { apiClient } from "./axios";
import type { FAQ } from "../../types/faq";

function toBackendLocale(locale: string) {
  if (locale === "fr") return "FR";
  if (locale === "rw") return "KIN";
  return "EN";
}

export async function getFaqs(locale: string) {
  return apiClient<FAQ[]>(`/api/faqs?locale=${toBackendLocale(locale)}`, {
    next: { revalidate: 60 },
  });
}
