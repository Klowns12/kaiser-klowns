import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Partners & Innovation — Kaiser Klowns",
    description: "Strategic partnerships, innovation programs, and business development opportunities.",
};

const partnerships = [
    { name: "Formula K Racing", type: "Sports Partnership", description: "A landmark partnership bringing the Kaiser Klowns creative vision to the world of international motor racing.", href: "/news/formula-k-partnership" },
    { name: "Global Craft Alliance", type: "Sustainability", description: "A coalition of luxury houses committed to preserving artisanal craftsmanship traditions worldwide." },
    { name: "Tokyo Tech Accelerator", type: "Technology", description: "Joint accelerator program with Aurelic Systems, supporting early-stage technology companies in connected experiences." },
    { name: "UNESCO Cultural Heritage", type: "Cultural", description: "Supporting the preservation of intangible cultural heritage through craftsmanship documentation and education." },
];

export default function PartnersPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Partners" }]}
                title="Partners & Innovation"
                subtitle="We believe in the power of partnership. Kaiser Klowns collaborates with organizations that share our vision for creative excellence."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="space-y-6">
                        {partnerships.map((p) => (
                            <div key={p.name} className="p-8 md:p-10 border border-foreground/8 hover:border-foreground/15 transition-all duration-300 group">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-red mb-2">{p.type}</p>
                                        <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.05em] uppercase text-foreground mb-3">{p.name}</h3>
                                        <p className="text-[13px] text-foreground/45 leading-[1.7] font-sans max-w-xl">{p.description}</p>
                                    </div>
                                    {p.href && (
                                        <Link href={p.href} className="shrink-0 ml-6 text-[10px] tracking-[0.15em] uppercase text-foreground/40 border border-foreground/12 px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">
                                            Details
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
