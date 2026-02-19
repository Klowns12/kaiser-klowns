import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
    title: "History — Kaiser Klowns",
    description: "The story of Kaiser Klowns — from inception to creative empire.",
};

const timeline = [
    { year: "2018", title: "The Beginning", description: "Kaiser Klowns is founded with a bold vision: to create a conglomerate where creativity drives commerce. The first House, Maventine, is established." },
    { year: "2019", title: "Expansion", description: "Aurelic Systems and KurenTengu join the family, bringing technology and spirits into the portfolio. Operations expand to 5 countries." },
    { year: "2020", title: "Creative Empire", description: "Velvessence Studios and Lokovox Media complete the five-House structure. The empire now spans fashion, technology, spirits, entertainment, and media." },
    { year: "2022", title: "Global Scale", description: "Operations reach 10 countries. Revenue crosses $1 billion for the first time. Kaiser Klowns establishes its reputation as a force in creative commerce." },
    { year: "2024", title: "Sustainable Future", description: "All Houses achieve carbon-neutral operations. The group commits to 100% sustainable sourcing by 2030." },
    { year: "2026", title: "The Present", description: "Five houses, twelve countries, 4,200+ employees. Kaiser Klowns continues to architect legacies across every creative domain." },
];

export default function HistoryPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Group", href: "/group" }, { label: "History" }]}
                title="Our History"
                subtitle="From a single vision to a global creative empire."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="relative pl-8 md:pl-12 border-l border-foreground/10">
                        {timeline.map((item) => (
                            <div key={item.year} className="relative mb-12 last:mb-0">
                                <div className="absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] w-[10px] h-[10px] rounded-full bg-red border-2 border-background" />
                                <p className="text-[11px] tracking-[0.2em] uppercase text-red font-bold mb-2">{item.year}</p>
                                <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.05em] uppercase text-foreground mb-2">{item.title}</h3>
                                <p className="text-[13px] text-foreground/45 leading-[1.7] font-sans max-w-2xl">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
