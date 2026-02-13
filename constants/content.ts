const content = {
  ja: {
    meta: {
      title: "NEOS E-SPORTS | 公式サイト",
      description:
        "eスポーツを通じて人が本気で成長する環境を。NEOS E-SPORTSはFortniteを中心に活動するeスポーツチームです。",
    },
    nav: {
      about: "ABOUT",
      values: "VALUES",
      activities: "ACTIVITIES",
      members: "MEMBERS",
      news: "NEWS",
      sponsor: "SPONSOR",
      contact: "CONTACT",
    },
    hero: {
      slogan: "STRONG / COOL / GOOD MANNERS",
      subtitle: "eスポーツを通じて、人が本気で成長する環境を。",
    },
    about: {
      sectionTitle: "ABOUT",
      heading: "人が成長する結果として、\n競技力が高まるチーム。",
      description:
        "NEOSは、eスポーツを通じて人が本気で成長する環境を設計し、伴走するチームです。「勝つために人を使う」のではなく、「人が成長する結果として、競技力が高まる」。NEOSに関わるすべての時間が、その人の人生を前に進める——それが私たちの信念です。",
      stats: [
        { value: "2022", label: "設立" },
        { value: "61", label: "メンバー", suffix: "名" },
        { value: "全国", label: "活動拠点" },
        { value: "Fortnite", label: "ゲームタイトル" },
      ],
    },
    values: {
      sectionTitle: "VALUES",
      heading: "私たちが大切にする4つの価値観",
      items: [
        {
          number: "01",
          title: "成長は設計できる",
          description:
            "環境・ルール・フィードバックの力で、成長を確かなものにする。才能に頼るのではなく、仕組みで人を伸ばします。",
        },
        {
          number: "02",
          title: "勝利は目的ではない",
          description:
            "成長のない勝利に価値はない。日々の成長の積み重ねこそが、結果として真の勝利を生み出します。",
        },
        {
          number: "03",
          title: "品格を守る",
          description:
            "強さを理由に、暴言・他責・見下しを正当化しない。トキシックな振る舞いを強さとは認めません。",
        },
        {
          number: "04",
          title: "本気度を評価する",
          description:
            "結果ではなく、向き合う姿勢を見る。どれだけ真剣に取り組んだかが、NEOSでの評価基準です。",
        },
      ],
    },
    activities: {
      sectionTitle: "ACTIVITIES",
      heading: "主な活動内容",
      items: [
        {
          title: "APFスクリム",
          description:
            "毎週末に開催する本格的なスクリム。チーム全体の競技力向上を図ります。",
        },
        {
          title: "ジュニアスクリム",
          description:
            "毎週 月・水に開催するジュニア向け練習。基礎から実戦まで段階的にサポートします。",
        },
        {
          title: "ジュニアユース",
          description:
            "選抜メンバーによる競技チーム。より高いレベルでの競技経験を積む場です。",
        },
        {
          title: "1on1 コーチング",
          description:
            "個別対話を通じた目標設定と進捗管理。一人ひとりの成長に寄り添います。",
        },
        {
          title: "ぜろふぉールーティン",
          description:
            "日々の努力を可視化し、結果だけでなくプロセスを正しく評価する独自の仕組みです。",
        },
        {
          title: "コミュニティイベント",
          description:
            "オフ会・親子大会・エンジョイイベントなど、メンバー同士のつながりを深める活動です。",
        },
      ],
    },
    members: {
      sectionTitle: "MEMBERS",
      heading: "チームメンバー",
      description:
        "全国各地から集まった61名のメンバーが、日々成長を目指して活動しています。",
      count: "61",
      countLabel: "名のメンバーが全国で活動中",
      comingSoon: "メンバー紹介ページは準備中です",
    },
    news: {
      sectionTitle: "NEWS",
      heading: "お知らせ",
      items: [
        {
          date: "2026.02.13",
          title: "公式ウェブサイトを公開しました",
          category: "お知らせ",
        },
        {
          date: "2026.02.01",
          title: "新メンバー5名が加入しました",
          category: "チーム",
        },
        {
          date: "2026.01.15",
          title: "APFスクリム シーズン8 開幕",
          category: "大会",
        },
      ],
    },
    sponsor: {
      sectionTitle: "SPONSOR",
      heading: "スポンサー",
      description: "NEOSの活動を支えてくださるスポンサー企業様",
    },
    contact: {
      sectionTitle: "CONTACT",
      heading: "お問い合わせ",
      description:
        "スポンサーシップ、入隊希望、取材についてなど、お気軽にお問い合わせください。",
      emailLabel: "メールでのお問い合わせ",
      email: "contact@neos-esports.com",
      xLabel: "X（Twitter）",
      xHandle: "@NEOSCLAN_FN",
      xUrl: "https://x.com/NEOSCLAN_FN",
    },
    footer: {
      copyright: "© 2026 NEOS E-SPORTS. All rights reserved.",
      slogan: "STRONG / COOL / GOOD MANNERS",
    },
  },
};

export default content;
export type Content = typeof content.ja;
