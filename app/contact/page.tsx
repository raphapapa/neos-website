import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import AnimateIn from "@/components/shared/AnimateIn";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "NEOS E-SPORTSへの入隊希望・お問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="CONTACT"
        subtitle="入隊希望・スポンサーシップ・取材についてなど、お気軽にお問い合わせください"
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimateIn>
          <div className="bg-neos-black border border-white/10 rounded-lg p-8">
            <ContactForm />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:contact@neos-esports.com"
              className="group flex flex-col items-center gap-4 bg-neos-gray-dark border border-white/10 rounded-lg p-8 hover:border-neos-red/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-neos-red/10 border border-neos-red/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-neos-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-neos-gray">メールでのお問い合わせ</p>
                <p className="mt-1 font-medium group-hover:text-neos-red-bright transition-colors">
                  contact@neos-esports.com
                </p>
              </div>
            </a>

            <a
              href="https://x.com/NEOSCLAN_FN"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 bg-neos-gray-dark border border-white/10 rounded-lg p-8 hover:border-neos-red/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-neos-red/10 border border-neos-red/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-neos-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-neos-gray">X（Twitter）</p>
                <p className="mt-1 font-medium group-hover:text-neos-red-bright transition-colors">
                  @NEOSCLAN_FN
                </p>
              </div>
            </a>
          </div>
        </AnimateIn>
      </div>
    </>
  );
}
