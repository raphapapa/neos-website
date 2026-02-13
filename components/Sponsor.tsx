import Image from "next/image";
import content from "@/constants/content";
import SectionTitle from "./SectionTitle";

const t = content.ja;

export default function Sponsor() {
  return (
    <section id="sponsor" className="py-24 lg:py-32 bg-neos-gray-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.sponsor.sectionTitle}
          subtitle={t.sponsor.description}
        />

        <div className="mt-16 flex justify-center">
          <a
            href="https://torazemi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full"
          >
            <Image
              src="/images/sponsor/torazemi.jpg"
              alt="トラゼミ - オンライン学習支援塾"
              width={400}
              height={200}
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
