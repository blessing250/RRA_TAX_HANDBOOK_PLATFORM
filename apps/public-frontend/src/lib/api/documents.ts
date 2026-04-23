import { apiClient } from "./axios";
import type { DocumentItem } from "../../types/document";

export async function getDocuments() {
  return apiClient<DocumentItem[]>("/api/documents", {
    next: { revalidate: 60 },
  });
}
