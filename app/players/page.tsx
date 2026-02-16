import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import PlayerFilter from "@/components/player/PlayerFilter";
import { getPlayers } from "@/lib/api/players";

export const metadata: Metadata = {
  title: "選手一覧",
  description: "NEOS E-SPORTSの選手一覧。Fortniteを中心に活動する全メンバーを紹介します。",
};

export default async function PlayersPage() {
  const players = await getPlayers();

  return (
    <>
      <PageHeader
        title="PLAYERS"
        subtitle={`${players.length}名のメンバーが全国で活動中`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <PlayerFilter players={players} />
      </div>
    </>
  );
}
