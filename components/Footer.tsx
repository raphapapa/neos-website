import Image from "next/image";
import content from "@/constants/content";

const t = content.ja;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo_01.png"
              alt="NEOS"
              width={32}
              height={32}
              className="w-8 h-8 invert"
            />
            <span className="font-heading text-xl tracking-wider">
              NEOS E-SPORTS
            </span>
          </div>

          {/* Slogan */}
          <p className="font-heading text-sm tracking-[0.2em] text-neos-gray">
            {t.footer.slogan}
          </p>

          {/* Social */}
          <a
            href={t.contact.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neos-gray hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Copyright */}
          <p className="text-xs text-neos-gray/50">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
