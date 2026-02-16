import { apiFetch } from "./client";
import type { Player, PlayerDetail } from "../types";

export async function getPlayers(): Promise<Player[]> {
  return (await apiFetch<Player[]>("/api/public/players")) || [];
}

export async function getPlayer(id: string): Promise<PlayerDetail | null> {
  return apiFetch<PlayerDetail>(`/api/public/players/${id}`);
}
