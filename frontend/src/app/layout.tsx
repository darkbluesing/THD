import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hotdealmorning.vercel.app";
const SITE_NAME = "오늘의 핫딜모닝";
const SITE_TITLE = "오늘의 핫딜모닝 | 향기로운 남자 어필리에이트";
const SITE_DESC =
  "향기로운 남자가 되기 위한 남성 향 케어/냄새 제거 어필리에이트 큐레이션을 한 곳에서 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  keywords: [
    "핫딜모닝",
    "향기 케어",
    "남자 냄새 제거",
    "향수",
    "쿠팡 어필리에이트",
    "핫딜",
    "향기로운 남자",
  ],
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "오늘의 핫딜모닝 — 향기로운 남자 어필리에이트",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-body-gradient" lang="ko">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen text-slate-100`}
      >
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
