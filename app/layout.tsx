import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClientProviders } from "./ClientProviders";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const engraversMT = localFont({
  src: "../public/fonts/engravers-mt.ttf",
  variable: "--font-engravers-mt",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaiserklowns.group"),
  title: {
    default: "Kaiser Klowns — The Creative Empire",
    template: "%s | Kaiser Klowns",
  },
  description:
    "Kaiser Klowns is a premier luxury creative conglomerate managing five distinct Houses: Maventine, Aurelic Systems, KurenTengu, Velvessence Studios, and Lokovox Media. We bridge the gap between uncompromising heritage and visionary innovation.",
  keywords: [
    // ── Branded + B2B Global — ค้นหาแล้วเจอเราที่ 1 เสมอ ──
    "Kaiser Klowns",
    "Kaiser Klowns Group",
    "Aurelic Systems AI",
    "Arkai Work Assistant",
    "Maventine Fashion",
    // ── Branded + Accessible Thai — คนไทยค้นหาแล้วเจอเราทันที ──
    "Kaiser Klowns บริษัท",
    "Maventine แบรนด์เสื้อผ้า",
    "Aurelic Systems รับทำ AI",
    "Lokovox Media ผลิตสื่อ",
    "KurenTengu เครื่องดื่ม"
  ],
  category: "Corporate",
  authors: [{ name: "Kaiser Klowns" }],
  creator: "Kaiser Klowns",
  publisher: "Kaiser Klowns",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.kaiserklowns.group",
  },
  openGraph: {
    title: "Kaiser Klowns — The Creative Empire",
    description:
      "Five houses. One vision. Fashion, technology, spirits, entertainment, and media — bound by an uncompromising commitment to excellence.",
    url: "https://www.kaiserklowns.group",
    siteName: "Kaiser Klowns",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/KK.png",
        width: 1200,
        height: 630,
        alt: "Kaiser Klowns Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaiser Klowns — The Creative Empire",
    description:
      "Five houses. One vision. Fashion, technology, spirits, entertainment, and media.",
    images: ["/logo/KK.png"],
    creator: "@KaiserKlowns",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${engraversMT.variable} antialiased`}
      >
        <ClientProviders>
          <JsonLd />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
