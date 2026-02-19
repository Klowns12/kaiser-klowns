import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
    title: "Mission — Kaiser Klowns",
    description: "Our mission, values, and guiding principles.",
};

const pillars = [
    { title: "Creative Excellence", description: "We invest in visionary talent and give them the freedom to push boundaries. Excellence is not a goal — it is the minimum standard." },
    { title: "Long-Term Vision", description: "We build for decades, not quarters. Every decision is weighed against its impact on the legacy we're creating." },
    { title: "Heritage & Innovation", description: "We honor the traditions that give our Houses their soul while embracing the innovations that secure their future." },
    { title: "Responsible Growth", description: "Growth must serve all stakeholders — our people, our communities, and our planet. Sustainability is woven into every aspect of our operations." },
];

export default function MissionPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Group", href: "/group" }, { label: "Mission" }]}
                title="Mission & Values"
                subtitle="To nurture creativity in all its forms. We invest in visionary brands, empower entrepreneurial talent, and champion excellence that endures."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pillars.map((p) => (
                            <div key={p.title} className="p-8 md:p-10 border border-foreground/8">
                                <h3 className="text-[16px] font-bold tracking-[0.08em] uppercase text-foreground mb-4">{p.title}</h3>
                                <p className="text-[13px] text-foreground/45 leading-[1.8] font-sans">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
