import Image from "next/image";
import content from "@/constants/content";
import SectionTitle from "./SectionTitle";

const t = content.ja;

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.about.sectionTitle} />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed whitespace-pre-line">
              {t.about.heading}
            </h3>
            <p className="mt-6 text-neos-gray leading-loose text-base lg:text-lg">
              {t.about.description}
            </p>
          </div>

          {/* Stats + Uniform Image */}
          <div className="space-y-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/uniform/uniform_omote.jpg"
                alt="NEOS E-SPORTS ユニフォーム"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neos-black/80 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-neos-gray-dark border border-white/10 rounded-lg p-5 text-center"
                >
                  <div className="text-2xl lg:text-3xl font-heading text-neos-red">
                    {stat.value}
                    {stat.suffix || ""}
                  </div>
                  <div className="mt-1 text-sm text-neos-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
