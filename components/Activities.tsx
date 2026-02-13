import content from "@/constants/content";
import SectionTitle from "./SectionTitle";

const t = content.ja;

export default function Activities() {
  return (
    <section id="activities" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.activities.sectionTitle} />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.activities.items.map((item, index) => (
            <div
              key={index}
              className="group bg-neos-gray-dark/50 border border-white/5 rounded-lg p-6 hover:bg-neos-gray-dark hover:border-neos-red/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-neos-red/10 border border-neos-red/30 flex items-center justify-center mb-4">
                <span className="text-neos-red font-heading text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="text-lg font-bold group-hover:text-neos-red-bright transition-colors">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-neos-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
