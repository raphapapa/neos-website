import Image from "next/image";
import AnimateIn from "@/components/shared/AnimateIn";
import type { Sponsor } from "@/lib/types";

export default function SponsorSection({ sponsors }: { sponsors: Sponsor[] }) {
  if (sponsors.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-neos-gray-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider">
              SPONSOR
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright mx-auto" />
            <p className="mt-6 text-lg text-neos-gray">
              NEOSの活動を支えてくださるスポンサー企業様
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs w-full"
              >
                {sponsor.logo_url ? (
                  <Image
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    width={300}
                    height={150}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center py-4">
                    <span className="text-neos-black font-bold">{sponsor.name}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
