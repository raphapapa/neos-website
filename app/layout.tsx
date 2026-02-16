import type { Metadata } from "next";
import { Noto_Sans_JP, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NEOS E-SPORTS | 公式サイト",
    template: "%s | NEOS E-SPORTS",
  },
  description:
    "eスポーツを通じて人が本気で成長する環境を。NEOS E-SPORTSはFortniteを中心に活動するeスポーツチームです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${bebasNeue.variable} font-body antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
