import type { Metadata } from "next";
import { Noto_Sans_JP, Bebas_Neue } from "next/font/google";
import "./globals.css";
import content from "@/constants/content";

const t = content.ja;

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
  title: t.meta.title,
  description: t.meta.description,
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
        {children}
      </body>
    </html>
  );
}
