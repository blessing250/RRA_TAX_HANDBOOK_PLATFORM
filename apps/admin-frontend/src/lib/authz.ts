export type AppRole =
  | "ADMIN"
  | "EDITOR"
  | "REVIEWER"
  | "PUBLISHER"
  | "AUDITOR"
  | "PUBLIC";

export function canManageUsers(role?: string | null) {
  return role === "ADMIN";
}

export function canManageRoles(role?: string | null) {
  return role === "ADMIN";
}

export function canViewAuditLogs(role?: string | null) {
  return role === "ADMIN" || role === "AUDITOR";
}

export function canViewContent(role?: string | null) {
  return ["ADMIN", "EDITOR", "REVIEWER", "PUBLISHER", "AUDITOR"].includes(role ?? "");
}

export function canCreateContent(role?: string | null) {
  return role === "ADMIN" || role === "EDITOR";
}

export function canReviewContent(role?: string | null) {
  return role === "ADMIN" || role === "REVIEWER";
}

export function canPublishContent(role?: string | null) {
  return role === "ADMIN" || role === "PUBLISHER";
}
