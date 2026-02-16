import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ArticleCard from "@/components/article/ArticleCard";
import Pagination from "@/components/shared/Pagination";
import AnimateIn from "@/components/shared/AnimateIn";
import { getArticles } from "@/lib/api/articles";

export const metadata: Metadata = {
  title: "ニュース",
  description: "NEOS E-SPORTSの最新ニュース、大会結果、ブログ記事。",
};

type Props = { searchParams: Promise<{ page?: string }> };

export default async function NewsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const { articles, pagination } = await getArticles(currentPage, 12);

  return (
    <>
      <PageHeader title="NEWS" subtitle="お知らせ・大会結果" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {articles.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                <AnimateIn key={article.id} delay={Math.min(i * 0.05, 0.4)}>
                  <ArticleCard article={article} />
                </AnimateIn>
              ))}
            </div>
            <Pagination pagination={pagination} basePath="/news" />
          </>
        ) : (
          <p className="text-center text-neos-gray py-16">
            記事がまだありません
          </p>
        )}
      </div>
    </>
  );
}
