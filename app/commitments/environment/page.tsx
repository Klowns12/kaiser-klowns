import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
    title: "Environment — Kaiser Klowns",
    description: "Environmental stewardship: sustainable sourcing, waste reduction, and water conservation.",
};

export default function EnvironmentPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Commitments", href: "/commitments" }, { label: "Environment" }]}
                title="Environment"
                subtitle="Every product, every process, every decision — evaluated for its environmental impact."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { value: "85%", label: "Sustainable Sourcing", desc: "Across all raw materials" },
                            { value: "62%", label: "Waste Reduction", desc: "vs. 2020 baseline" },
                            { value: "70%", label: "Water Recycled", desc: "In production processes" },
                        ].map((s) => (
                            <div key={s.label} className="p-8 border border-foreground/8 text-center">
                                <p className="text-[36px] font-bold text-foreground">{s.value}</p>
                                <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-red font-semibold">{s.label}</p>
                                <p className="mt-1 text-[11px] text-foreground/40 font-sans">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl space-y-6 text-[14px] text-foreground/55 leading-[1.8] font-sans">
                        <p>We are pioneers in sustainable luxury — proving that excellence and environmental responsibility are not at odds, but inseparable.</p>
                        <p>Our environmental strategy encompasses biodiversity protection in our supply chain, circular design principles, and investments in regenerative agriculture for natural materials.</p>
                        <p>All Houses participate in annual environmental impact assessments and publish verified metrics as part of our commitment to full transparency.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
