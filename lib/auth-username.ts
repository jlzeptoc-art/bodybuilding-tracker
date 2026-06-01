/** Internal auth domain — users never see this email */
export const AUTH_EMAIL_DOMAIN = "users.bodybuilding-tracker.internal";

export function normalizeUsername(raw: string): string {
  return raw.trim().toLowerCase();
}

export function validateUsername(username: string): string | null {
  const u = normalizeUsername(username);
  if (u.length < 3) return "auth.usernameTooShort";
  if (u.length > 24) return "auth.usernameTooLong";
  if (!/^[a-z0-9_]+$/.test(u)) return "auth.usernameInvalid";
  return null;
}

export function usernameToAuthEmail(username: string): string {
  return `${normalizeUsername(username)}@${AUTH_EMAIL_DOMAIN}`;
}
