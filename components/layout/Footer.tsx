import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "@/lib/api/site-settings";

const FALLBACK_X_URL = "https://x.com/neos_fortnite";

export default async function Footer() {
  const settings = await getSiteSettings();
  const xUrl = settings?.x_url || FALLBACK_X_URL;
  const juniorXUrl = settings?.junior_x_url || null;

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          <p className="font-heading text-sm tracking-[0.2em] text-neos-gray">
            STRONG / COOL / GOOD MANNERS
          </p>

          <nav className="flex gap-6 text-sm text-neos-gray">
            <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
            <Link href="/players" className="hover:text-white transition-colors">PLAYERS</Link>
            <Link href="/news" className="hover:text-white transition-colors">NEWS</Link>
            <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neos-gray hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {juniorXUrl && (
              <a
                href={juniorXUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-neos-gray hover:text-white transition-colors"
                aria-label="X (Twitter) U-13"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-xs">U-13</span>
              </a>
            )}
          </div>

          <p className="text-xs text-neos-gray/50">
            &copy; 2026 NEOS E-SPORTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
