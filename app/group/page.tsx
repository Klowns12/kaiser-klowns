import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Group — Kaiser Klowns",
    description: "Learn about Kaiser Klowns, the creative conglomerate shaping the future of fashion, technology, spirits, entertainment, and media.",
};

const sections = [
    {
        title: "Our History",
        description: "From a single vision to a global creative empire. Kaiser Klowns was founded with one belief: that the greatest ideas emerge at the intersection of artistry and commerce.",
        href: "/group/history",
        year: "EST. 2018",
    },
    {
        title: "Mission & Values",
        description: "To nurture creativity in all its forms. We invest in visionary brands, empower entrepreneurial talent, and champion excellence that endures.",
        href: "/group/mission",
        year: "CORE",
    },
    {
        title: "Governance & Ethics",
        description: "A commitment to transparency, responsibility, and integrity across every level of our organization.",
        href: "/group/governance",
        year: "STANDARDS",
    },
    {
        title: "Key Figures",
        description: "Five houses, twelve countries, over four thousand employees — the numbers behind the empire.",
        href: "/group/key-figures",
        year: "IMPACT",
    },
];

export default function GroupPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Group" }]}
                title="The Group"
                subtitle="Kaiser Klowns is a creative conglomerate dedicated to the long-term development of its Houses. Five brands, one vision — united by an uncompromising commitment to excellence."
            />

            {/* Sections grid */}
            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group block p-8 md:p-10 border border-foreground/8 hover:border-foreground/20 transition-all duration-500"
                            >
                                <p className="text-[10px] tracking-[0.25em] uppercase text-red/80 mb-3">
                                    {item.year}
                                </p>
                                <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.05em] uppercase text-foreground mb-3 group-hover:opacity-70 transition-opacity">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] text-foreground/45 leading-[1.7] font-sans">
                                    {item.description}
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/30 group-hover:text-foreground/60 transition-colors">
                                    <span>Learn More</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
