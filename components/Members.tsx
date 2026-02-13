import content from "@/constants/content";
import SectionTitle from "./SectionTitle";

const t = content.ja;

export default function Members() {
  return (
    <section id="members" className="py-24 lg:py-32 bg-neos-gray-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.members.sectionTitle} />

        <div className="mt-16 text-center">
          {/* Member Count */}
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-heading text-7xl md:text-8xl lg:text-9xl text-neos-red">
              {t.members.count}
            </span>
            <span className="text-lg md:text-xl text-neos-gray">
              {t.members.countLabel}
            </span>
          </div>

          <p className="mt-8 text-neos-gray text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.members.description}
          </p>

          {/* Placeholder grid */}
          <div className="mt-12 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-full bg-neos-gray-dark border border-white/10 flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-white/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-neos-gray/60">
            {t.members.comingSoon}
          </p>
        </div>
      </div>
    </section>
  );
}
