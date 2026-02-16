import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/constants";
import type { Player, PlayerCategory } from "@/lib/types";

export default function PlayerCard({ player }: { player: Player }) {
  const category = player.category as PlayerCategory;

  return (
    <Link
      href={`/players/${player.id}`}
      className="group block bg-neos-black border border-white/10 rounded-lg overflow-hidden hover:border-neos-red/50 transition-all duration-300"
    >
      <div className="relative aspect-square bg-neos-gray-dark">
        {player.image_url ? (
          <Image
            src={player.image_url}
            alt={player.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading text-5xl text-white/10">
              {player.jersey_number || "?"}
            </span>
          </div>
        )}
        {player.pr_rank && (
          <div className="absolute top-2 right-2 bg-neos-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
            <span className="text-neos-red font-bold">PR #{player.pr_rank}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="font-bold truncate">{player.name}</p>
          {player.jersey_number != null && (
            <span className="font-heading text-lg text-neos-red/60 ml-2 shrink-0">
              #{player.jersey_number}
            </span>
          )}
        </div>
        {player.name_en && (
          <p className="text-xs text-neos-gray mt-0.5 truncate">{player.name_en}</p>
        )}
        <span
          className={`mt-2 inline-block text-xs px-2 py-0.5 rounded border ${CATEGORY_COLORS[category] || "bg-white/10 text-white/60 border-white/20"}`}
        >
          {CATEGORY_LABELS[category] || player.category}
        </span>
      </div>
    </Link>
  );
}
