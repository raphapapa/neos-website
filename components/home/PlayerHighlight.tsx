import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/shared/AnimateIn";
import { CATEGORY_LABELS } from "@/lib/constants";
import type { Player, PlayerCategory } from "@/lib/types";

export default function PlayerHighlight({ players }: { players: Player[] }) {
  const highlighted = players.slice(0, 4);

  if (highlighted.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-neos-gray-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider">
                PLAYERS
              </h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright" />
            </div>
            <Link
              href="/players"
              className="hidden sm:inline-flex items-center gap-2 text-neos-red hover:text-neos-red-bright transition-colors"
            >
              <span className="text-sm tracking-wider">VIEW ALL</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {highlighted.map((player, i) => (
            <AnimateIn key={player.id} delay={0.1 + i * 0.1}>
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
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading text-4xl text-white/10">
                        {player.jersey_number || "?"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-bold">{player.name}</p>
                  <p className="text-xs text-neos-gray mt-1">
                    {CATEGORY_LABELS[player.category as PlayerCategory] || player.category}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/players"
            className="inline-flex items-center gap-2 text-neos-red hover:text-neos-red-bright transition-colors"
          >
            <span className="text-sm tracking-wider">VIEW ALL</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
