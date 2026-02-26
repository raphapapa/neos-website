import { apiFetch } from "./client";
import type { SiteSettings } from "../types";

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return apiFetch<SiteSettings>("/api/public/site-settings");
}
