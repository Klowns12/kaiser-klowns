import type { Metadata } from "next";

const houseData: Record<string, { name: string; description: string }> = {
    maventine: {
        name: "MAVENTINE",
        description: "Maventine is Kaiser Klowns' luxury fashion house, where street-tailoring meets high fashion with philosophical depth. Built on the DNA of Luxury Street-Tailoring, Maventine represents the visual identity of the entire group — silence, taste, and refinement distilled into wearable art. Every piece speaks to those who understand that true luxury is felt, not flaunted.",
    },
    aurelic: {
        name: "AURELIC SYSTEMS",
        description: "Aurelic Systems is the technological backbone and long-term revenue engine of Kaiser Klowns. From AI-driven platforms to enterprise software, Aurelic builds the invisible infrastructure that powers the group and beyond. With proprietary products like Arkai, DevStudio Rumba, Alfa, and KlownsNexus Office Suite, Aurelic operates at the intersection of innovation and practical impact.",
    },
    kurentengu: {
        name: "KURENTENGU",
        description: "KurenTengu is Kaiser Klowns' interactive entertainment division, creating games and virtual worlds rooted in mythology and legend. More than a game studio, KurenTengu builds entire universes — IP-driven worlds designed to expand across gaming, storytelling, and media. Every game is a gateway into a deeper mythology.",
    },
    velvessence: {
        name: "VELVESSENCE STUDIOS",
        description: "Velvessence Studios is the storytelling heart of Kaiser Klowns — where emotion, philosophy, and visual artistry converge. From brand films and cinematic productions to music identity and fine art, Velvessence crafts the narratives that give the group its soul. Every frame, every note, every image is designed to move the unmovable.",
    },
    lokovox: {
        name: "LOKOVOX MEDIA",
        description: "Lokovox Media is Kaiser Klowns' in-house marketing and branding agency — and also serves external clients. Responsible for the strategic positioning of every House in the group, Lokovox handles brand strategy, content creation, advertising campaigns, and media planning. Where other agencies follow trends, Lokovox defines them.",
    },
};

export function generateStaticParams() {
    return Object.keys(houseData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const house = houseData[slug];

    if (!house) return { title: "House — Kaiser Klowns" };

    return {
        title: `${house.name} — Kaiser Klowns`,
        description: house.description,
        openGraph: {
            title: `${house.name} — Kaiser Klowns`,
            description: house.description,
            url: `https://www.kaiserklowns.group/houses/${slug}`,
            images: [{ url: "/logo/KK.png", width: 1200, height: 630, alt: house.name }],
        },
        alternates: { canonical: `https://www.kaiserklowns.group/houses/${slug}` },
    };
}

export default function HouseDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
