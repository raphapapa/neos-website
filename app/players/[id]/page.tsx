import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlayer } from "@/lib/api/players";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/constants";
import type { PlayerCategory } from "@/lib/types";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const player = await getPlayer(id);
  if (!player) return { title: "選手が見つかりません" };
  return {
    title: player.name,
    description: player.profile || `${player.name} - NEOS E-SPORTS`,
  };
}

export default async function PlayerDetailPage({ params }: Props) {
  const { id } = await params;
  const player = await getPlayer(id);
  if (!player) notFound();

  const category = player.category as PlayerCategory;
  const primaryImage = player.images.find((img) => img.is_primary) || player.images[0];
  const otherImages = player.images.filter((img) => img.id !== primaryImage?.id);

  return (
    <>
      <div className="pt-28 lg:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/players"
            className="inline-flex items-center gap-2 text-neos-gray hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">PLAYERS</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square bg-neos-gray-dark rounded-lg overflow-hidden">
                {primaryImage ? (
                  <Image
                    src={primaryImage.url}
                    alt={player.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-heading text-6xl text-white/10">
                      {player.jersey_number || "?"}
                    </span>
                  </div>
                )}
              </div>

              {/* Additional images */}
              {otherImages.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {otherImages.map((img) => (
                    <div
                      key={img.id}
                      className="relative aspect-square bg-neos-gray-dark rounded overflow-hidden"
                    >
                      <Image
                        src={img.url}
                        alt={player.name}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* SNS */}
              {player.x_account && (
                <a
                  href={
                    player.x_account.startsWith("http")
                      ? player.x_account
                      : `https://x.com/${player.x_account}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-neos-gray hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-sm">
                    @{player.x_account.replace(/^https?:\/\/(x|twitter)\.com\//, "")}
                  </span>
                </a>
              )}
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{player.name}</h1>
                  {player.name_en && (
                    <p className="text-neos-gray mt-1">{player.name_en}</p>
                  )}
                </div>
                {player.jersey_number != null && (
                  <span className="font-heading text-4xl text-neos-red/40 shrink-0">
                    #{player.jersey_number}
                  </span>
                )}
              </div>

              <span
                className={`mt-4 inline-block text-sm px-3 py-1 rounded border ${CATEGORY_COLORS[category] || ""}`}
              >
                {CATEGORY_LABELS[category] || player.category}
              </span>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {player.pr_rank && (
                  <div className="bg-neos-gray-dark border border-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading text-neos-red">
                      #{player.pr_rank}
                    </div>
                    <div className="text-xs text-neos-gray mt-1">PR RANK</div>
                  </div>
                )}
                {player.earnings != null && player.earnings > 0 && (
                  <div className="bg-neos-gray-dark border border-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading text-neos-red">
                      ${player.earnings.toLocaleString()}
                    </div>
                    <div className="text-xs text-neos-gray mt-1">EARNINGS</div>
                  </div>
                )}
                {player.join_date && (
                  <div className="bg-neos-gray-dark border border-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading text-neos-red">
                      {new Date(player.join_date).getFullYear()}
                    </div>
                    <div className="text-xs text-neos-gray mt-1">JOINED</div>
                  </div>
                )}
              </div>

              {/* Profile */}
              {player.profile && (
                <div className="mt-8">
                  <h2 className="font-heading text-xl tracking-wider mb-3">PROFILE</h2>
                  <p className="text-neos-gray leading-relaxed whitespace-pre-line">
                    {player.profile}
                  </p>
                </div>
              )}

              {/* Achievements */}
              {player.achievements && (
                <div className="mt-8">
                  <h2 className="font-heading text-xl tracking-wider mb-3">ACHIEVEMENTS</h2>
                  <p className="text-neos-gray leading-relaxed whitespace-pre-line">
                    {player.achievements}
                  </p>
                </div>
              )}

              {/* Tournament Results */}
              {player.tournament_results.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-heading text-xl tracking-wider mb-4">TOURNAMENT RESULTS</h2>
                  <div className="space-y-3">
                    {player.tournament_results.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 bg-neos-gray-dark/50 border border-white/5 rounded-lg p-4"
                      >
                        <div className="font-heading text-2xl text-neos-red w-16 text-center shrink-0">
                          {result.placement ? `#${result.placement}` : "-"}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium truncate">
                            {result.tournament_name || "Unknown Tournament"}
                          </p>
                          <p className="text-xs text-neos-gray mt-0.5">
                            {result.tournament_date
                              ? new Date(result.tournament_date).toLocaleDateString("ja-JP")
                              : ""}
                            {result.region && ` / ${result.region}`}
                          </p>
                        </div>
                        {result.prize != null && result.prize > 0 && (
                          <span className="text-sm text-neos-red shrink-0">
                            ${result.prize.toLocaleString()}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
