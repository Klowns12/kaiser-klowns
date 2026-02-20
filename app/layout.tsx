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
    "A luxury creative conglomerate dedicated to the long-term development of each of its Houses, preserving their identity, heritage, and creative excellence.",
  keywords: [
    "Kaiser Klowns",
    "Luxury Conglomerate",
    "Creative Empire",
    "Fashion",
    "Technology",
    "Maventine",
    "Aurelic Systems",
    "KurenTengu",
    "Velvessence",
    "Lokovox",
  ],
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
    languages: {
      "en-US": "https://www.kaiserklowns.group/en",
      "th-TH": "https://www.kaiserklowns.group/th",
    },
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
