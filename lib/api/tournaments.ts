import { apiFetch } from "./client";
import type { TournamentEntry } from "../types";

export async function getTournaments(
  limit = 20,
  playerId?: string
): Promise<TournamentEntry[]> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (playerId) params.set("player_id", playerId);

  return (
    (await apiFetch<TournamentEntry[]>(
      `/api/public/tournaments?${params.toString()}`
    )) || []
  );
}
