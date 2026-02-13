import content from "@/constants/content";
import SectionTitle from "./SectionTitle";

const t = content.ja;

export default function Values() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-neos-gray-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.values.sectionTitle}
          subtitle={t.values.heading}
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.values.items.map((item) => (
            <div
              key={item.number}
              className="group relative bg-neos-black border border-white/10 rounded-lg p-8 hover:border-neos-red/50 transition-all duration-300"
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neos-red to-neos-red-dark rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-5xl font-heading text-neos-red/20">
                {item.number}
              </span>
              <h4 className="mt-2 text-xl font-bold">{item.title}</h4>
              <p className="mt-3 text-neos-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
