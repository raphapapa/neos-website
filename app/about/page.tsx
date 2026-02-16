import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import AnimateIn from "@/components/shared/AnimateIn";
import SectionDivider from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "チームについて",
  description: "NEOS E-SPORTSのミッション、価値観、活動内容。eスポーツを通じて人が本気で成長する環境を。",
};

const VALUES = [
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
];

const ACTIVITIES = [
  {
    title: "APFスクリム",
    description: "毎週末に開催する本格的なスクリム。チーム全体の競技力向上を図ります。",
  },
  {
    title: "ジュニアスクリム",
    description: "毎週 月・水に開催するジュニア向け練習。基礎から実戦まで段階的にサポートします。",
  },
  {
    title: "ジュニアユース",
    description: "選抜メンバーによる競技チーム。より高いレベルでの競技経験を積む場です。",
  },
  {
    title: "1on1 コーチング",
    description: "個別対話を通じた目標設定と進捗管理。一人ひとりの成長に寄り添います。",
  },
  {
    title: "ぜろふぉールーティン",
    description: "日々の努力を可視化し、結果だけでなくプロセスを正しく評価する独自の仕組みです。",
  },
  {
    title: "コミュニティイベント",
    description: "オフ会・親子大会・エンジョイイベントなど、メンバー同士のつながりを深める活動です。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="ABOUT" />

      {/* Mission */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateIn>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed whitespace-pre-line">
                  {"人が成長する結果として、\n競技力が高まるチーム。"}
                </h2>
                <p className="mt-6 text-neos-gray leading-loose text-base lg:text-lg">
                  NEOSは、eスポーツを通じて人が本気で成長する環境を設計し、伴走するチームです。
                  「勝つために人を使う」のではなく、「人が成長する結果として、競技力が高まる」。
                  NEOSに関わるすべての時間が、その人の人生を前に進める——それが私たちの信念です。
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/uniform/uniform_omote.jpg"
                  alt="NEOS E-SPORTS ユニフォーム"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neos-black/80 to-transparent" />
              </div>
            </AnimateIn>
          </div>

          {/* Stats */}
          <AnimateIn delay={0.3}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "2022", label: "設立" },
                { value: "61", label: "メンバー", suffix: "名" },
                { value: "全国", label: "活動拠点" },
                { value: "Fortnite", label: "ゲームタイトル" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-neos-gray-dark border border-white/10 rounded-lg p-5 text-center"
                >
                  <div className="text-2xl lg:text-3xl font-heading text-neos-red">
                    {stat.value}
                    {stat.suffix || ""}
                  </div>
                  <div className="mt-1 text-sm text-neos-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section id="values" className="py-24 lg:py-32 bg-neos-gray-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider">
                VALUES
              </h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright mx-auto" />
              <p className="mt-6 text-lg text-neos-gray">
                私たちが大切にする4つの価値観
              </p>
            </div>
          </AnimateIn>

          <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
            {VALUES.map((item, i) => (
              <AnimateIn key={item.number} delay={0.1 + i * 0.1}>
                <div className="group relative bg-neos-black border border-white/10 rounded-lg p-8 hover:border-neos-red/50 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neos-red to-neos-red-dark rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-5xl font-heading text-neos-red/40">
                    {item.number}
                  </span>
                  <h4 className="mt-2 text-xl font-bold">{item.title}</h4>
                  <p className="mt-3 text-neos-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Activities */}
      <section id="activities" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider">
                ACTIVITIES
              </h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright mx-auto" />
              <p className="mt-6 text-lg text-neos-gray">主な活動内容</p>
            </div>
          </AnimateIn>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((item, i) => (
              <AnimateIn key={i} delay={0.1 + i * 0.08}>
                <div className="group bg-neos-gray-dark/50 border border-white/5 rounded-lg p-6 hover:bg-neos-gray-dark hover:border-neos-red/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-full bg-neos-red/10 border border-neos-red/30 flex items-center justify-center mb-4">
                    <span className="text-neos-red font-heading text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-neos-red-bright transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-neos-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
