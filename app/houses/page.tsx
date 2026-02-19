import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Houses — Kaiser Klowns",
    description: "Discover our five Houses — each with its own identity, heritage, and creative vision.",
};

const houses = [
    {
        name: "AURELIC SYSTEMS",
        sector: "Technology & Innovation",
        description: "Engineering the invisible architecture of tomorrow. Aurelic builds the technology platforms that power connected luxury experiences.",
        href: "/houses/aurelic",
        accent: "#4a6fa5",
        gradient: "from-[#0a0a1a] via-[#151525] to-[#05050a]",
        locked: false,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
        name: "LOKOVOX MEDIA",
        sector: "Media & Publishing",
        description: "The voice that shapes culture. Lokovox controls the narrative — from publishing to digital media — with editorial integrity.",
        href: "/houses/lokovox",
        accent: "#2a8a6a",
        gradient: "from-[#0a1a15] via-[#15252a] to-[#050a0a]",
        locked: false,
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    },
    {
        name: "MAVENTINE",
        sector: "Fashion & Leather Goods",
        description: "Where tradition meets audacious design. Maventine crafts luxury fashion and leather goods that define eras, not seasons.",
        href: "/houses/maventine",
        accent: "#c41e1e",
        gradient: "from-[#1a0a0a] via-[#2d1515] to-[#0a0505]",
        locked: true,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    },
    {
        name: "VELVESSENCE STUDIOS",
        sector: "Entertainment & Film",
        description: "Stories that move the unmovable. Velvessence produces entertainment that provokes, inspires, and transforms culture.",
        href: "/houses/velvessence",
        accent: "#8a4a8a",
        gradient: "from-[#150a1a] via-[#201525] to-[#0a050d]",
        locked: true,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    },
    {
        name: "KURENTENGU",
        sector: "Spirits & Lifestyle",
        description: "Ancient craft, modern ritual. KurenTengu curates spirits and lifestyle products that honor tradition while embracing the contemporary.",
        href: "/houses/kurentengu",
        accent: "#b8952a",
        gradient: "from-[#1a0a05] via-[#2d1a0a] to-[#0a0502]",
        locked: true,
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
    },
];

export default function HousesPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Houses" }]}
                title="Our Houses"
                subtitle="Five brands, each with its own identity, heritage, and creative vision — bound by an uncompromising commitment to excellence."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="space-y-6">
                        {houses.map((house) => {
                            const inner = (
                                <>
                                    {/* Background image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                                        style={{ backgroundImage: `url(${house.image})` }}
                                    />
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${house.gradient} ${house.locked ? 'opacity-85' : 'opacity-65'} transition-opacity duration-500 group-hover:opacity-55`} />

                                    {/* Lock badge */}
                                    {house.locked && (
                                        <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-sm z-10">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-60">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                                            </svg>
                                            <span className="text-[8px] tracking-[0.2em] uppercase text-white/50">Coming Soon</span>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="absolute inset-0 flex items-end p-8 md:p-12">
                                        <div className="flex-1">
                                            <p className="text-[10px] tracking-[0.3em] uppercase mb-2 transition-opacity duration-300" style={{ color: house.accent }}>
                                                {house.sector}
                                            </p>
                                            <h3 className={`text-white text-[22px] md:text-[32px] font-bold tracking-[0.08em] uppercase mb-2 ${house.locked ? 'opacity-50' : ''}`}>
                                                {house.name}
                                            </h3>
                                            <p className={`text-white/40 text-[12px] md:text-[13px] font-sans max-w-lg leading-[1.6] hidden md:block ${house.locked ? 'opacity-40' : ''}`}>
                                                {house.description}
                                            </p>
                                        </div>
                                        {!house.locked && (
                                            <div className="hidden md:flex items-center gap-2 text-white/40 text-[10px] tracking-[0.15em] uppercase group-hover:text-white/80 transition-colors">
                                                <span>Explore</span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Top accent line */}
                                    {!house.locked && (
                                        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-700" style={{ backgroundColor: house.accent }} />
                                    )}
                                </>
                            );

                            if (house.locked) {
                                return (
                                    <div key={house.name} className="group relative overflow-hidden h-[200px] md:h-[280px] cursor-default">
                                        {inner}
                                    </div>
                                );
                            }

                            return (
                                <Link key={house.name} href={house.href} className="group block relative overflow-hidden h-[200px] md:h-[280px]">
                                    {inner}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
