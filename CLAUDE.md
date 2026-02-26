# NEOS E-SPORTS 公式Webサイト

## プロジェクト概要

NEOS E-SPORTS（Fortnite中心のeスポーツチーム）の公式公開Webサイト。
管理アプリ（neos-player-app）のAPIからデータを取得して表示する。

- **管理アプリリポジトリ:** https://github.com/raphapapa/neos-player-app
- **連携仕様書:** neos-player-app/docs/integration-spec.md
- **API問題追跡Issue:** https://github.com/raphapapa/neos-player-app/issues/1

## 2台PC体制

デスクトップPCとノートPCの2台で開発している。

- **デスクトップPC:** neos-player-app（管理アプリ + API）の開発
- **ノートPC:** neos-website（本サイト）の開発
- **連携方法:** GitHub Issue でタスクを起票し、双方のClaude Codeが読み書きする
- **引継書:** docs/session-handover.md にセッション終了時の状態を記録する。セッション終了時は必ず更新してcommit+pushすること

## 技術スタック

- Next.js 14.2.21（App Router）
- Tailwind CSS v3 + @tailwindcss/typography
- TypeScript
- react-markdown + remark-gfm（記事本文レンダリング）

## コマンド

```bash
npm run dev       # 開発サーバー起動（Player Appが3000の場合3001になる）
npm run build     # プロダクションビルド
```

## デザイン方針（重要）

### カラーパレット — 仕様書と異なる（意図的）

仕様書（integration-spec.md）は `#C41E3A` を記載しているが、**本サイトでは以下を採用**。
黒背景でのコントラストを高め、eスポーツチームとしての洗練された印象を出すための判断。
仕様書の色に戻してはならない。

| 用途 | カラーコード |
|---|---|
| NEOS Red (Primary) | `#E50914` |
| NEOS Red Bright | `#FF1A25` |
| NEOS Red Dark | `#B20710` |
| 背景 | `#0A0A0A` |
| カード背景 | `#1A1A1A` |
| テキスト | `#FFFFFF` |
| サブテキスト | `#9CA3AF` |

### フォント — 仕様書と異なる（意図的）

仕様書は Geist Sans を指定しているが、本サイトでは以下を採用。
eスポーツサイトとしての視覚的インパクトを優先した判断。

- **見出し:** Bebas Neue（Google Fonts）
- **本文:** Noto Sans JP（Google Fonts）

### デザインコンセプト

- 常にダークテーマ（ライトテーマなし）
- Netflix風の高コントラスト赤×黒
- スクロール連動フェードインアニメーション（Intersection Observer）
- セクション間に赤のグラデーション区切り線

## API連携

### ベースURL

`lib/api/client.ts` で `NEXT_PUBLIC_API_BASE` 環境変数を参照。
未設定時は `http://localhost:3000` にフォールバック。

```bash
# .env.local
NEXT_PUBLIC_API_BASE=http://localhost:3000       # ローカル開発
NEXT_PUBLIC_API_BASE=https://your-app.vercel.app # 本番
```

### 利用API（全7本、neos-player-appで提供）

| メソッド | パス | 使用箇所 |
|---------|------|----------|
| GET | `/api/public/players` | トップ, /players |
| GET | `/api/public/players/[id]` | /players/[id] |
| GET | `/api/public/articles?page=&limit=&category=` | トップ, /news |
| GET | `/api/public/articles/[slug]` | /news/[slug] |
| GET | `/api/public/sponsors` | トップ |
| GET | `/api/public/tournaments?limit=&player_id=` | /players/[id]内で結合済み |
| POST | `/api/public/contact` | /contact |
| GET | `/api/public/site-settings` | Footer（Xリンク） |

全APIキャッシュ: `s-maxage=60, stale-while-revalidate=300`
全APICORS: `Access-Control-Allow-Origin: *`
API障害時: `lib/api/client.ts` が null を返し、各ページが空表示にフォールバック（サイトは落ちない）

## 仕様書との既知の乖離（本サイト側が正）

以下は仕様書（integration-spec.md）が古い or 不正確な部分。本サイトではDB実態に合わせている。

### カテゴリ一覧

仕様書には15カテゴリが記載されているが、DB CHECK制約とは内容が異なる。
本サイトの `lib/constants.ts` にDB実態に準拠した正しいカテゴリ一覧がある。
仕様書ではなく `lib/constants.ts` を正とすること。

### スポンサーTier

- 仕様書: `PREMIUM` / `STANDARD`
- DB実態（本サイト採用）: `GOLD` / `SILVER` / `BRONZE` / `STANDARD`

## ページ構成

```
/                トップ（Hero + About要約 + 選手ハイライト + ニュース + スポンサー）
/players         選手一覧（カテゴリフィルタ + グリッド）
/players/[id]    選手詳細（画像ギャラリー + PR順位 + 大会実績 + SNS）
/news            ニュース一覧（カード + ページネーション）
/news/[slug]     記事詳細（Markdownレンダリング）
/about           チーム概要（ミッション + VALUES + ACTIVITIES）— 静的コンテンツ
/contact         入隊希望/一般問い合わせフォーム（POST API連携）
```

## ディレクトリ構造

```
app/                    ← ページ（Next.js App Router）
components/
  layout/               ← Header, Footer, PageHeader
  shared/               ← AnimateIn, SectionDivider, Pagination
  home/                 ← Hero, AboutPreview, PlayerHighlight, NewsPreview, SponsorSection
  player/               ← PlayerCard, PlayerFilter
  article/              ← ArticleCard
  contact/              ← ContactForm
lib/
  types.ts              ← 全API型定義（これが型の正）
  constants.ts          ← カテゴリラベル・カラー・Tier定義（これが定数の正）
  api/                  ← fetch関数（client.ts が共通ラッパー）
hooks/                  ← useInView（Intersection Observer）
docs/                   ← session-handover.md（セッション引継書）
public/images/          ← ロゴ・背景・ユニフォーム画像
```

## Supabase Storage

Player Appの画像は Supabase Storage の公開バケットに格納されている。
`next.config.mjs` で `jakaujbhbgoodzmjyxfj.supabase.co` をリモートパターンに許可済み。

## 現在のステータスと残タスク

最新の状態は `docs/session-handover.md` を参照。

---

## 関連プロジェクト連携ルール

### 関連プロジェクト

- **neos-player-app**（`C:\Users\takum\dev\neos-player-app\`）— 同じSupabase DBを共有。データ構造の変更元

### トリガー条件

以下の変更を行った場合、関連プロジェクトへの影響を自動で判断すること：
- DBスキーマの変更（テーブル追加、列追加、型変更）
- APIエンドポイントの追加・変更・削除
- データ形式やレスポンス構造の変更
- 共有リソース（Supabase設定等）の変更

### 影響があると判断した場合

1. 関連プロジェクト側で必要な変更内容を要約する
2. `Set-Clipboard` でクリップボードにコピーする
3. 「○○のタブに切り替えて Ctrl+V で貼り付けてください」と伝える
