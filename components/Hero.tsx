import Image from "next/image";
import content from "@/constants/content";

const t = content.ja;

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background/background_02.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <Image
          src="/images/logo/logo_01.png"
          alt="NEOS E-SPORTS"
          width={128}
          height={128}
          className="mx-auto mb-8 w-24 h-24 lg:w-32 lg:h-32 invert drop-shadow-2xl"
          priority
        />
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider drop-shadow-lg">
          NEOS E-SPORTS
        </h1>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-neos-red" />
          <p className="font-heading text-lg md:text-xl lg:text-2xl tracking-[0.3em] text-neos-red">
            {t.hero.slogan}
          </p>
          <span className="h-px w-8 bg-neos-red" />
        </div>
        <p className="mt-6 text-base md:text-lg text-neos-gray max-w-xl mx-auto">
          {t.hero.subtitle}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
