import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticle } from "@/lib/api/articles";
import { ARTICLE_CATEGORY_LABELS } from "@/lib/constants";
import type { ArticleCategory } from "@/lib/types";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "記事が見つかりません" };
  return {
    title: article.title,
    description:
      article.body?.replace(/[#*`>\-\[\]()]/g, "").trim().slice(0, 160) ||
      article.title,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div className="pt-28 lg:pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-neos-gray hover:text-white transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">NEWS</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded border border-neos-red/50 text-neos-red">
              {ARTICLE_CATEGORY_LABELS[article.category as ArticleCategory] || article.category}
            </span>
            <time className="text-sm text-neos-gray">
              {article.published_at
                ? new Date(article.published_at).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Body */}
        <article className="prose prose-invert prose-red max-w-none prose-headings:font-bold prose-a:text-neos-red prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-hr:border-white/10">
          {article.body ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.body}
            </ReactMarkdown>
          ) : (
            <p className="text-neos-gray">本文はありません</p>
          )}
        </article>
      </div>
    </div>
  );
}
