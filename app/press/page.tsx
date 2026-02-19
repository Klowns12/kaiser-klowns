import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

export const metadata = {
    title: "Press — Kaiser Klowns",
    description: "Press releases, media contacts, and news from Kaiser Klowns.",
};

const pressReleases = [
    { date: "February 14, 2026", title: "Kaiser Klowns Announces Strategic Partnership with Formula K Racing", category: "GROUP" },
    { date: "January 28, 2026", title: "Maventine Unveils Spring Collection at Tokyo Fashion Week", category: "MAVENTINE" },
    { date: "January 15, 2026", title: "Aurelic Systems Launches Next-Generation Connected Platform", category: "AURELIC" },
    { date: "December 12, 2025", title: "KurenTengu Expands into Southeast Asian Markets", category: "KURENTENGU" },
    { date: "November 20, 2025", title: "Velvessence Studios Signs Three-Picture Deal with Major Distributor", category: "VELVESSENCE" },
    { date: "October 5, 2025", title: "Lokovox Media Acquires Digital Publishing Platform", category: "LOKOVOX" },
    { date: "September 15, 2025", title: "Kaiser Klowns Reports Record Q3 Revenue Growth of 18%", category: "GROUP" },
];

export default function PressPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Press" }]}
                title="Press Room"
                subtitle="For press inquiries, please contact press@kaiserklowns.com"
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="border-t border-foreground/8">
                        {pressReleases.map((item) => (
                            <div key={item.title} className="py-6 border-b border-foreground/8 group cursor-pointer hover:bg-foreground/[0.02] transition-colors px-2 -mx-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] tracking-[0.15em] uppercase text-red">{item.category}</span>
                                    <span className="text-foreground/15">·</span>
                                    <span className="text-[11px] text-foreground/35 font-sans">{item.date}</span>
                                </div>
                                <h3 className="text-[15px] md:text-[18px] font-bold tracking-[0.03em] uppercase text-foreground group-hover:opacity-70 transition-opacity leading-[1.4]">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
