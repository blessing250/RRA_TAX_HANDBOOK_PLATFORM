import { apiClient } from "./axios";
import type { Article } from "../../types/article";

function toBackendLocale(locale: string) {
  if (locale === "fr") return "FR";
  if (locale === "rw") return "KIN";
  return "EN";
}

export async function getArticles(locale: string) {
  return apiClient<Article[]>(`/api/articles?locale=${toBackendLocale(locale)}`, {
    next: { revalidate: 60 },
  });
}
