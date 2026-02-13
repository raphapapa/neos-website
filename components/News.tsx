import content from "@/constants/content";
import SectionTitle from "./SectionTitle";

const t = content.ja;

export default function News() {
  return (
    <section id="news" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.news.sectionTitle} />

        <div className="mt-16 max-w-3xl mx-auto divide-y divide-white/10">
          {t.news.items.map((item, index) => (
            <article
              key={index}
              className="group py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                <time className="text-sm text-neos-gray font-mono w-24">
                  {item.date}
                </time>
                <span className="text-xs px-2 py-0.5 rounded border border-neos-red/50 text-neos-red">
                  {item.category}
                </span>
              </div>
              <h4 className="text-base font-medium group-hover:text-neos-red-bright transition-colors">
                {item.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
