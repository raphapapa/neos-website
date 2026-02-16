"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/background/background_02.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neos-black" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neos-red/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1)" : "scale(0.8)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <Image
            src="/images/logo/logo_01.png"
            alt="NEOS E-SPORTS"
            width={180}
            height={180}
            className="mx-auto mb-8 w-28 h-28 lg:w-44 lg:h-44 invert drop-shadow-[0_0_30px_rgba(229,9,20,0.3)]"
            priority
          />
        </div>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-9xl tracking-wider"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
            NEOS
          </span>{" "}
          <span className="text-neos-red drop-shadow-[0_0_20px_rgba(229,9,20,0.4)]">
            E-SPORTS
          </span>
        </h1>
        <div
          className="mt-6 flex items-center justify-center gap-3"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
          }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-neos-red" />
          <p className="font-heading text-lg md:text-xl lg:text-2xl tracking-[0.3em] text-neos-red">
            STRONG / COOL / GOOD MANNERS
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-neos-red" />
        </div>
        <p
          className="mt-6 text-base md:text-lg text-neos-gray max-w-xl mx-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
          }}
        >
          eスポーツを通じて、人が本気で成長する環境を
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neos-black to-transparent" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
