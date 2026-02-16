import { PlayerCategory, SponsorTier, ArticleCategory } from "./types";

// ============================================================
// カテゴリ表示名（DB実態に準拠）
// ============================================================

export const CATEGORY_LABELS: Record<PlayerCategory, string> = {
  ATHLETE: "アスリート",
  GROWTH: "育成",
  YOUTH: "ユース",
  JUNIOR: "ジュニア",
  OWNER: "オーナー",
  OPERATOR: "運営",
  OPERATOR_SUPPORT: "運営サポート",
  OPERATOR_INTERN: "運営インターン",
  JUNIOR_MANAGER: "ジュニアマネージャー",
  JUNIOR_SUB_MANAGER: "ジュニアサブマネージャー",
  DESIGNER: "デザイナー",
  EDITOR: "エディター",
  STREAMER: "ストリーマー",
  TRYOUT: "トライアウト",
  SUSPENDED: "休止中",
};

// 公開サイトで表示するカテゴリ（TRYOUTとSUSPENDEDは除外）
export const PUBLIC_CATEGORIES: PlayerCategory[] = [
  "ATHLETE",
  "GROWTH",
  "YOUTH",
  "JUNIOR",
  "OWNER",
  "OPERATOR",
  "STREAMER",
  "DESIGNER",
  "EDITOR",
];

// カテゴリバッジカラー
export const CATEGORY_COLORS: Record<PlayerCategory, string> = {
  ATHLETE: "bg-red-900/60 text-red-300 border-red-700",
  GROWTH: "bg-amber-900/60 text-amber-300 border-amber-700",
  YOUTH: "bg-blue-900/60 text-blue-300 border-blue-700",
  JUNIOR: "bg-green-900/60 text-green-300 border-green-700",
  OWNER: "bg-yellow-900/60 text-yellow-200 border-yellow-700",
  OPERATOR: "bg-indigo-900/60 text-indigo-300 border-indigo-700",
  OPERATOR_SUPPORT: "bg-violet-900/60 text-violet-300 border-violet-700",
  OPERATOR_INTERN: "bg-purple-900/60 text-purple-300 border-purple-700",
  JUNIOR_MANAGER: "bg-teal-900/60 text-teal-300 border-teal-700",
  JUNIOR_SUB_MANAGER: "bg-cyan-900/60 text-cyan-300 border-cyan-700",
  DESIGNER: "bg-pink-900/60 text-pink-300 border-pink-700",
  EDITOR: "bg-orange-900/60 text-orange-300 border-orange-700",
  STREAMER: "bg-fuchsia-900/60 text-fuchsia-300 border-fuchsia-700",
  TRYOUT: "bg-lime-900/60 text-lime-300 border-lime-700",
  SUSPENDED: "bg-stone-800/60 text-stone-300 border-stone-600",
};

// スポンサーTier表示名
export const SPONSOR_TIER_LABELS: Record<SponsorTier, string> = {
  GOLD: "ゴールドスポンサー",
  SILVER: "シルバースポンサー",
  BRONZE: "ブロンズスポンサー",
  STANDARD: "スポンサー",
};

// 記事カテゴリ表示名
export const ARTICLE_CATEGORY_LABELS: Record<ArticleCategory, string> = {
  NEWS: "お知らせ",
  BLOG: "ブログ",
  RESULT: "大会結果",
};
