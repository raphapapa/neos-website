import Image from "next/image";
import Link from "next/link";
import { ARTICLE_CATEGORY_LABELS } from "@/lib/constants";
import type { ArticleSummary, ArticleCategory } from "@/lib/types";

export default function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block bg-neos-black border border-white/10 rounded-lg overflow-hidden hover:border-neos-red/50 transition-all duration-300"
    >
      <div className="relative aspect-video bg-neos-gray-dark">
        {article.thumbnail_url ? (
          <Image
            src={article.thumbnail_url}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading text-3xl text-white/10">NEOS</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs px-2 py-0.5 rounded border border-neos-red/50 text-neos-red">
            {ARTICLE_CATEGORY_LABELS[article.category as ArticleCategory] || article.category}
          </span>
          <time className="text-xs text-neos-gray">
            {article.published_at
              ? new Date(article.published_at).toLocaleDateString("ja-JP")
              : ""}
          </time>
        </div>
        <h3 className="font-bold group-hover:text-neos-red-bright transition-colors line-clamp-2">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="mt-2 text-sm text-neos-gray line-clamp-2">{article.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
