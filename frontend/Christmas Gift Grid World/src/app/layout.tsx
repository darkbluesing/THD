import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Christmas Gift Grid World",
  description: "광고 썸네일만 가득한 크리스마스 기프트 브라우저",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${space.variable} bg-kdh-deep-black text-white`}>
        {children}
      </body>
    </html>
  );
}
