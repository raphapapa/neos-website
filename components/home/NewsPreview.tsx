import Link from "next/link";
import AnimateIn from "@/components/shared/AnimateIn";
import { ARTICLE_CATEGORY_LABELS } from "@/lib/constants";
import type { ArticleSummary, ArticleCategory } from "@/lib/types";

export default function NewsPreview({ articles }: { articles: ArticleSummary[] }) {
  const latest = articles.slice(0, 4);

  if (latest.length === 0) return null;

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider">
                NEWS
              </h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright" />
            </div>
            <Link
              href="/news"
              className="hidden sm:inline-flex items-center gap-2 text-neos-red hover:text-neos-red-bright transition-colors"
            >
              <span className="text-sm tracking-wider">VIEW ALL</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimateIn>

        <div className="mt-12 max-w-3xl divide-y divide-white/10">
          {latest.map((article, i) => (
            <AnimateIn key={article.id} delay={0.1 + i * 0.08}>
              <Link
                href={`/news/${article.slug}`}
                className="group py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors block"
              >
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <time className="text-sm text-neos-gray font-mono w-24">
                    {article.published_at
                      ? new Date(article.published_at).toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                      : ""}
                  </time>
                  <span className="text-xs px-2 py-0.5 rounded border border-neos-red/50 text-neos-red">
                    {ARTICLE_CATEGORY_LABELS[article.category as ArticleCategory] || article.category}
                  </span>
                </div>
                <h4 className="text-base font-medium group-hover:text-neos-red-bright transition-colors">
                  {article.title}
                </h4>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
