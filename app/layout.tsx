import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClientProviders } from "./ClientProviders";

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
  title: "Kaiser Klowns — The Creative Empire",
  description:
    "A luxury creative conglomerate dedicated to the long-term development of each of its Houses, preserving their identity, heritage, and creative excellence.",
  openGraph: {
    title: "Kaiser Klowns — The Creative Empire",
    description:
      "Five houses. One vision. Fashion, technology, spirits, entertainment, and media — bound by an uncompromising commitment to excellence.",
    type: "website",
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
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
