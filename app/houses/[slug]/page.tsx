import { notFound } from "next/navigation";
import HouseDetailClient from "./HouseDetailClient";

const houseData: Record<string, {
    name: string;
    description: string;
    accent: string;
    gradient: string;
}> = {
    maventine: {
        name: "MAVENTINE",
        description: "Maventine is Kaiser Klowns' luxury fashion house, where street-tailoring meets high fashion with philosophical depth. Built on the DNA of Luxury Street-Tailoring, Maventine represents the visual identity of the entire group — silence, taste, and refinement distilled into wearable art. Every piece speaks to those who understand that true luxury is felt, not flaunted.",
        accent: "#c41e1e",
        gradient: "from-[#1a0a0a] via-[#2d1515] to-[#0a0505]",
    },
    aurelic: {
        name: "AURELIC SYSTEMS",
        description: "Aurelic Systems is the technological backbone and long-term revenue engine of Kaiser Klowns. From AI-driven platforms to enterprise software, Aurelic builds the invisible infrastructure that powers the group and beyond. With proprietary products like Arkai, Aello, Alfa, and KlownsNexus Office Suite, Aurelic operates at the intersection of innovation and practical impact.",
        accent: "#4a6fa5",
        gradient: "from-[#0a0a1a] via-[#151525] to-[#05050a]",
    },
    kurentengu: {
        name: "KURENTENGU",
        description: "KurenTengu is Kaiser Klowns' interactive entertainment division, creating games and virtual worlds rooted in mythology and legend. More than a game studio, KurenTengu builds entire universes — IP-driven worlds designed to expand across gaming, storytelling, and media. Every game is a gateway into a deeper mythology.",
        accent: "#b8952a",
        gradient: "from-[#1a0a05] via-[#2d1a0a] to-[#0a0502]",
    },
    velvessence: {
        name: "VELVESSENCE STUDIOS",
        description: "Velvessence Studios is the storytelling heart of Kaiser Klowns — where emotion, philosophy, and visual artistry converge. From brand films and cinematic productions to music identity and fine art, Velvessence crafts the narratives that give the group its soul. Every frame, every note, every image is designed to move the unmovable.",
        accent: "#8a4a8a",
        gradient: "from-[#150a1a] via-[#201525] to-[#0a050d]",
    },
    lokovox: {
        name: "LOKOVOX MEDIA",
        description: "Lokovox Media is Kaiser Klowns' in-house marketing and branding agency — and also serves external clients. Responsible for the strategic positioning of every House in the group, Lokovox handles brand strategy, content creation, advertising campaigns, and media planning. Where other agencies follow trends, Lokovox defines them.",
        accent: "#2a8a6a",
        gradient: "from-[#0a1a15] via-[#15252a] to-[#050a0a]",
    },
};

export function generateStaticParams() {
    return Object.keys(houseData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const house = houseData[slug];
    if (!house) return { title: "House — Kaiser Klowns" };
    return {
        title: `${house.name} — Kaiser Klowns`,
        description: house.description,
    };
}

export default async function HouseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const house = houseData[slug];
    if (!house) notFound();

    return (
        <HouseDetailClient
            slug={slug}
            houseConfig={{
                accent: house.accent,
                gradient: house.gradient
            }}
        />
    );
}
