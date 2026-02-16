"use client";

import { useState } from "react";
import PlayerCard from "./PlayerCard";
import AnimateIn from "@/components/shared/AnimateIn";
import { CATEGORY_LABELS } from "@/lib/constants";
import type { Player, PlayerCategory } from "@/lib/types";

export default function PlayerFilter({ players }: { players: Player[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  // 実際に存在するカテゴリのみ抽出
  const categories = Array.from(
    new Set(players.map((p) => p.category))
  ) as PlayerCategory[];

  const filtered =
    activeCategory === "ALL"
      ? players
      : players.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("ALL")}
          className={`px-4 py-2 rounded-full text-sm transition-all ${
            activeCategory === "ALL"
              ? "bg-neos-red text-white"
              : "bg-white/5 text-neos-gray hover:bg-white/10 hover:text-white"
          }`}
        >
          ALL
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === cat
                ? "bg-neos-red text-white"
                : "bg-white/5 text-neos-gray hover:bg-white/10 hover:text-white"
            }`}
          >
            {CATEGORY_LABELS[cat] || cat}
          </button>
        ))}
      </div>

      {/* Player grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
        {filtered.map((player, i) => (
          <AnimateIn key={player.id} delay={Math.min(i * 0.05, 0.5)}>
            <PlayerCard player={player} />
          </AnimateIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-neos-gray py-16">
          該当する選手がいません
        </p>
      )}
    </>
  );
}
