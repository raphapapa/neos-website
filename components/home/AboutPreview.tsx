import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/shared/AnimateIn";

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateIn>
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider">
                ABOUT
              </h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright" />
              <h3 className="mt-8 text-2xl md:text-3xl font-bold leading-relaxed whitespace-pre-line">
                {"人が成長する結果として、\n競技力が高まるチーム。"}
              </h3>
              <p className="mt-6 text-neos-gray leading-loose text-base lg:text-lg">
                NEOSは、eスポーツを通じて人が本気で成長する環境を設計し、伴走するチームです。
                「勝つために人を使う」のではなく、「人が成長する結果として、競技力が高まる」。
                NEOSに関わるすべての時間が、その人の人生を前に進める——それが私たちの信念です。
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-neos-red hover:text-neos-red-bright transition-colors"
              >
                <span className="text-sm tracking-wider">MORE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
      </div>
    </section>
  );
}
