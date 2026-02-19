import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

export const metadata = {
    title: "Commitments — Kaiser Klowns",
    description: "Our commitment to sustainability, social responsibility, and environmental stewardship.",
};

const commitments = [
    {
        title: "Sustainability",
        description: "We are committed to building a business that sustains — not depletes — the resources it depends on. All five Houses achieved carbon-neutral operations in 2024, with a roadmap to net-zero by 2030.",
        stats: [
            { label: "Carbon Neutral", value: "2024" },
            { label: "Net-Zero Target", value: "2030" },
            { label: "Renewable Energy", value: "78%" },
        ],
    },
    {
        title: "Social Responsibility",
        description: "We invest in the communities where we operate. From apprenticeship programs preserving traditional craftsmanship to educational partnerships supporting the next generation of creative talent.",
        stats: [
            { label: "Community Programs", value: "45+" },
            { label: "Scholarships", value: "200/yr" },
            { label: "Volunteer Hours", value: "12K+" },
        ],
    },
    {
        title: "Environment",
        description: "Every product, every process, every decision is evaluated for its environmental impact. We are pioneers in sustainable luxury — proving that excellence and responsibility go hand in hand.",
        stats: [
            { label: "Sustainable Sourcing", value: "85%" },
            { label: "Waste Reduction", value: "62%" },
            { label: "Water Recycled", value: "70%" },
        ],
    },
];

export default function CommitmentsPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Commitments" }]}
                title="Our Commitments"
                subtitle="Building a creative empire that contributes positively to society and the planet."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                    {commitments.map((c) => (
                        <div key={c.title} className="border border-foreground/8 p-8 md:p-12">
                            <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-4">
                                {c.title}
                            </h2>
                            <p className="text-[13px] md:text-[14px] text-foreground/45 leading-[1.8] font-sans max-w-3xl mb-8">
                                {c.description}
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                {c.stats.map((s) => (
                                    <div key={s.label} className="text-center p-4 bg-foreground/[0.02] border border-foreground/5">
                                        <p className="text-[24px] md:text-[32px] font-bold text-foreground">{s.value}</p>
                                        <p className="mt-1 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-red">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
