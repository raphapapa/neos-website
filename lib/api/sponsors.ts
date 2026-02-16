import { apiFetch } from "./client";
import type { Sponsor } from "../types";

export async function getSponsors(): Promise<Sponsor[]> {
  return (await apiFetch<Sponsor[]>("/api/public/sponsors")) || [];
}
