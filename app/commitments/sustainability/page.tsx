import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
    title: "Sustainability — Kaiser Klowns",
    description: "Our sustainability strategy: carbon-neutral operations, ethical sourcing, and environmental stewardship.",
};

export default function SustainabilityPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Commitments", href: "/commitments" }, { label: "Sustainability" }]}
                title="Sustainability"
                subtitle="All five Houses achieved carbon-neutral operations in 2024. Our roadmap to net-zero targets every scope of emissions by 2030."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { value: "100%", label: "Carbon Neutral", desc: "All Houses since 2024" },
                            { value: "78%", label: "Renewable Energy", desc: "Across global operations" },
                            { value: "2030", label: "Net-Zero Target", desc: "Full scope emissions" },
                        ].map((s) => (
                            <div key={s.label} className="p-8 border border-foreground/8 text-center">
                                <p className="text-[36px] font-bold text-foreground">{s.value}</p>
                                <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-red font-semibold">{s.label}</p>
                                <p className="mt-1 text-[11px] text-foreground/40 font-sans">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl space-y-6 text-[14px] text-foreground/55 leading-[1.8] font-sans">
                        <p>Kaiser Klowns believes that sustainability is not a constraint on luxury — it is a prerequisite.  Our sustainability strategy addresses environmental impact across supply chains, operations, and product lifecycles.</p>
                        <p>Each House has developed bespoke sustainability roadmaps aligned with the UN Sustainable Development Goals. From Maventine's closed-loop leather sourcing to Aurelic Systems' carbon-aware computing, innovation drives every initiative.</p>
                        <p>We publish annual sustainability reports audited by independent third parties and have committed to Science Based Targets across all operations by 2028.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
