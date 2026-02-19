import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

const houseData: Record<string, {
    name: string;
    sector: string;
    tagline: string;
    description: string;
    founded: string;
    headquarters: string;
    employees: string;
    accent: string;
    gradient: string;
    highlights: string[];
}> = {
    maventine: {
        name: "MAVENTINE",
        sector: "Fashion & Leather Goods",
        tagline: "Where tradition meets audacious design.",
        description: "Maventine is Kaiser Klowns' flagship fashion house, creating luxury goods that define eras rather than follow seasons. With ateliers across three continents and a commitment to sustainable craftsmanship, Maventine has established itself as the standard-bearer for next-generation luxury.",
        founded: "2018",
        headquarters: "Paris, France",
        employees: "1,200+",
        accent: "#c41e1e",
        gradient: "from-[#1a0a0a] via-[#2d1515] to-[#0a0505]",
        highlights: [
            "Featured in Vogue, Harper's Bazaar, and WWD",
            "2025 CFDA International Design Award",
            "Carbon-neutral production since 2024",
            "Flagship stores in Paris, Tokyo, and New York",
        ],
    },
    aurelic: {
        name: "AURELIC SYSTEMS",
        sector: "Technology & Innovation",
        tagline: "Engineering the invisible architecture of tomorrow.",
        description: "Aurelic Systems builds the technology platforms that power connected luxury experiences. From AI-driven personalization engines to blockchain authentication, Aurelic operates at the intersection of cutting-edge technology and premium brand experiences.",
        founded: "2019",
        headquarters: "Tokyo, Japan",
        employees: "850+",
        accent: "#4a6fa5",
        gradient: "from-[#0a0a1a] via-[#151525] to-[#05050a]",
        highlights: [
            "Proprietary AI platform serving 50M+ users",
            "ISO 27001 certified infrastructure",
            "Partners with leading luxury brands globally",
            "R&D centers in Tokyo, Berlin, and Palo Alto",
        ],
    },
    kurentengu: {
        name: "KURENTENGU",
        sector: "Spirits & Lifestyle",
        tagline: "Ancient craft, modern ritual.",
        description: "KurenTengu curates spirits and lifestyle products that honor centuries of tradition while embracing the contemporary sensibility. From rare Japanese whisky to artisanal sake, every product in the KurenTengu portfolio tells a story of mastery.",
        founded: "2019",
        headquarters: "Bangkok, Thailand",
        employees: "600+",
        accent: "#b8952a",
        gradient: "from-[#1a0a05] via-[#2d1a0a] to-[#0a0502]",
        highlights: [
            "Portfolio includes 12 premium spirit brands",
            "Master distillers across Japan, Scotland, and Thailand",
            "Winner of 2025 International Spirits Award",
            "Growing presence in luxury hospitality sector",
        ],
    },
    velvessence: {
        name: "VELVESSENCE STUDIOS",
        sector: "Entertainment & Film",
        tagline: "Stories that move the unmovable.",
        description: "Velvessence Studios produces entertainment that provokes, inspires, and transforms culture. From feature films to immersive experiences, Velvessence operates at the frontier of storytelling, pushing boundaries while maintaining the highest production values.",
        founded: "2020",
        headquarters: "Los Angeles, USA",
        employees: "850+",
        accent: "#8a4a8a",
        gradient: "from-[#150a1a] via-[#201525] to-[#0a050d]",
        highlights: [
            "Three-picture deal with major global distributor",
            "Award-winning original series on streaming platforms",
            "State-of-the-art production facilities in LA and London",
            "Interactive experience division launching 2026",
        ],
    },
    lokovox: {
        name: "LOKOVOX MEDIA",
        sector: "Media & Publishing",
        tagline: "The voice that shapes culture.",
        description: "Lokovox Media controls the narrative — from publishing to digital media — with editorial integrity and creative ambition. Operating premium publications, digital platforms, and content studios, Lokovox shapes the cultural conversation across markets.",
        founded: "2020",
        headquarters: "London, UK",
        employees: "700+",
        accent: "#2a8a6a",
        gradient: "from-[#0a1a15] via-[#15252a] to-[#050a0a]",
        highlights: [
            "Seven premium publications across five countries",
            "Digital audience of 25M+ monthly readers",
            "Industry-leading editorial standards",
            "Acquired leading digital publishing platform in 2025",
        ],
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
        <>
            <Navbar />

            {/* Hero banner */}
            <div className={`relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br ${house.gradient} overflow-hidden`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: house.accent }}>
                        {house.sector}
                    </p>
                    <h1 className="text-[36px] md:text-[60px] font-bold tracking-[0.04em] uppercase text-white leading-tight">
                        {house.name}
                    </h1>
                    <p className="mt-4 text-white/50 text-[16px] md:text-[18px] italic font-sans">
                        {house.tagline}
                    </p>
                    <div className="mt-6 w-[40px] h-[2px]" style={{ backgroundColor: house.accent }} />
                </div>
            </div>

            {/* Content */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.05em] uppercase text-foreground mb-6">
                            About
                        </h2>
                        <p className="text-[14px] text-foreground/60 leading-[1.8] font-sans">
                            {house.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-12">
                            <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground mb-6">
                                Highlights
                            </h3>
                            <ul className="space-y-3">
                                {house.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-3 text-[13px] text-foreground/50 font-sans leading-[1.6]">
                                        <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: house.accent }} />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {[
                            { label: "Founded", value: house.founded },
                            { label: "Headquarters", value: house.headquarters },
                            { label: "Employees", value: house.employees },
                            { label: "Sector", value: house.sector },
                        ].map((item) => (
                            <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: house.accent + '40' }}>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/35">{item.label}</p>
                                <p className="mt-1 text-[14px] font-bold tracking-[0.03em] text-foreground">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back to Houses */}
            <section className="pb-16 md:pb-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <Link
                        href="/houses"
                        className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to All Houses
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
