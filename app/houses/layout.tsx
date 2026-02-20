import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Houses — Kaiser Klowns",
    description: "Discover our five Houses — each with its own identity, heritage, and creative vision.",
    openGraph: {
        title: "Houses — Kaiser Klowns",
        description: "Discover our five Houses — each with its own identity, heritage, and creative vision.",
        url: "https://www.kaiserklowns.group/houses",
        images: [{ url: "/logo/KK.png", width: 1200, height: 630, alt: "Kaiser Klowns Houses" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Houses — Kaiser Klowns",
        description: "Five brands, each with its own identity, heritage, and creative vision.",
    },
    alternates: { canonical: "https://www.kaiserklowns.group/houses" },
};

export default function HousesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
