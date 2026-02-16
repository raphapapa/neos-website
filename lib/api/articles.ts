import { apiFetch } from "./client";
import type { ArticlesResponse, Article } from "../types";

export async function getArticles(
  page = 1,
  limit = 20,
  category?: string
): Promise<ArticlesResponse> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  if (category) params.set("category", category);

  return (
    (await apiFetch<ArticlesResponse>(
      `/api/public/articles?${params.toString()}`
    )) || { articles: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } }
  );
}

export async function getArticle(slug: string): Promise<Article | null> {
  return apiFetch<Article>(`/api/public/articles/${slug}`);
}
