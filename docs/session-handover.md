# NEOS Website セッション引継書

**最終更新:** 2026-02-16
**最終作業PC:** ノートPC

---

## 現在のステータス: コーディング完了、API接続確認待ち

マルチページ公開サイトの実装が完了。ビルド成功。
API接続がまだ確認できていない（Player Appが別PCで稼働中のため）。

---

## 完了済みの作業

### Phase 1: 分析・設計

1. 連携仕様書（integration-spec.md）の分析 → 致命的な不足2件を検出
2. GitHub Issue #1 として neos-player-app に起票
3. デスクトップPCで全7 API整備完了を確認
4. マルチページ構成・コンポーネント設計の策定

### Phase 2: 実装（全て完了）

1. **lib層:** 型定義、API関数6本、定数（カテゴリ・Tier・カラー）
2. **レイアウト:** Header（ページリンク化）、Footer、PageHeader
3. **トップページ:** Hero + About要約 + 選手ハイライト(API) + ニュース(API) + スポンサー(API)
4. **/players:** カテゴリフィルタ付き選手一覧
5. **/players/[id]:** 画像ギャラリー + PR順位 + 大会実績 + SNS
6. **/news:** ページネーション付き記事一覧
7. **/news/[slug]:** Markdownレンダリング記事詳細
8. **/about:** ミッション + VALUES + ACTIVITIES（静的コンテンツ）
9. **/contact:** 入隊希望/一般問い合わせフォーム（POST API連携）
10. **設定:** next.config（Supabase画像ドメイン）、tailwind（typography）、robots.txt公開化

### クリーンアップ

- 旧シングルページコンポーネント13ファイル削除
- `constants/content.ts` 削除（未使用）
- 旧コンポーネントへの参照ゼロ確認済み

---

## 残タスク（優先順）

| # | 作業 | 前提条件 | どちらのPCでも可 |
|---|---|---|---|
| 1 | **API接続確認** | Player App起動（localhost:3000）またはVercel本番URL設定 | Yes |
| 2 | **バグ修正** | 1の結果次第 | Yes |
| 3 | **Vercelデプロイ** | `.env`にAPI本番URLを設定 | Yes |
| 4 | **OGP画像作成** | デザイン素材 | Yes |

---

## 環境セットアップ手順（どちらのPCでも）

### 1. Websiteの起動

```bash
cd neos-website
npm install          # 初回のみ
npm run dev          # → localhost:3001（3000がPlayer Appで使用中の場合）
```

### 2. API接続の設定

```bash
# neos-website/.env.local を作成
NEXT_PUBLIC_API_BASE=http://localhost:3000    # ローカル開発
# または
NEXT_PUBLIC_API_BASE=https://your-app.vercel.app  # 本番API
```

**未設定の場合:** デフォルトで `http://localhost:3000` に接続する（lib/api/client.ts）

### 3. Player Appの起動（API確認時に必要）

```bash
cd neos-player-app
npm install          # 初回のみ
npm run dev          # → localhost:3000
```

---

## プロジェクト構成

```
neos-website/
├── app/
│   ├── layout.tsx              ← 共通レイアウト（Header+Footer）
│   ├── page.tsx                ← トップ（API: players, articles, sponsors）
│   ├── globals.css
│   ├── about/page.tsx          ← 静的
│   ├── contact/page.tsx        ← フォーム（API: POST contact）
│   ├── news/page.tsx           ← 一覧（API: articles + pagination）
│   ├── news/[slug]/page.tsx    ← 詳細（API: articles/[slug]）
│   ├── players/page.tsx        ← 一覧（API: players）
│   └── players/[id]/page.tsx   ← 詳細（API: players/[id]）
├── components/
│   ├── layout/    Header.tsx, Footer.tsx, PageHeader.tsx
│   ├── shared/    AnimateIn.tsx, SectionDivider.tsx, Pagination.tsx
│   ├── home/      Hero.tsx, AboutPreview.tsx, PlayerHighlight.tsx, NewsPreview.tsx, SponsorSection.tsx
│   ├── player/    PlayerCard.tsx, PlayerFilter.tsx
│   ├── article/   ArticleCard.tsx
│   └── contact/   ContactForm.tsx
├── lib/
│   ├── types.ts               ← 全API型定義
│   ├── constants.ts            ← カテゴリラベル・カラー・Tier
│   └── api/                    ← fetch関数
│       ├── client.ts           ← 共通fetchラッパー
│       ├── players.ts
│       ├── articles.ts
│       ├── sponsors.ts
│       ├── tournaments.ts
│       └── contact.ts
├── hooks/useInView.ts
├── docs/session-handover.md    ← この文書
├── next.config.mjs             ← Supabase画像ドメイン許可
├── tailwind.config.ts          ← typographyプラグイン追加済み
└── public/
    ├── images/                 ← ロゴ・背景・ユニフォーム
    └── robots.txt              ← Allow: /（公開用）
```

---

## 利用API一覧

| # | メソッド | パス | 使用箇所 |
|---|---------|------|----------|
| 1 | GET | `/api/public/players` | トップ, /players |
| 2 | GET | `/api/public/players/[id]` | /players/[id] |
| 3 | GET | `/api/public/articles?page=&limit=&category=` | トップ, /news |
| 4 | GET | `/api/public/articles/[slug]` | /news/[slug] |
| 5 | GET | `/api/public/sponsors` | トップ |
| 6 | GET | `/api/public/tournaments?limit=&player_id=` | /players/[id] （詳細API内で結合済み） |
| 7 | POST | `/api/public/contact` | /contact |

---

## 技術仕様

| 項目 | 値 |
|---|---|
| Framework | Next.js 14.2.21 (App Router) |
| カラー | `#E50914` / `#FF1A25` / `#B20710` |
| フォント | Bebas Neue（見出し）+ Noto Sans JP（本文） |
| Tailwind | v3 + @tailwindcss/typography |
| Markdown | react-markdown + remark-gfm |
| ISR | revalidate: 60（全APIページ） |
| Supabase Storage | jakaujbhbgoodzmjyxfj.supabase.co |

---

## 既知の問題

1. **仕様書のカラーパレットが旧色のまま** — Website側は`#E50914`、仕様書は`#C41E3A`
2. **仕様書のカテゴリ一覧がDB実態と不一致** — Website側はDB実態に準拠
3. **仕様書のスポンサーTierが不一致** — Website側はDB実態（GOLD/SILVER/BRONZE/STANDARD）に準拠

→ 仕様書の更新はデスクトップPC側で対応予定

---

## 関連リソース

- **管理アプリ:** https://github.com/raphapapa/neos-player-app
- **連携仕様書:** neos-player-app/docs/integration-spec.md
- **API問題点Issue:** https://github.com/raphapapa/neos-player-app/issues/1
