import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
    title: "Social Responsibility — Kaiser Klowns",
    description: "Community investment, apprenticeships, and talent development across the Kaiser Klowns group.",
};

export default function SocialPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Commitments", href: "/commitments" }, { label: "Social Responsibility" }]}
                title="Social Responsibility"
                subtitle="Investing in the communities where we operate through apprenticeships, education, and cultural preservation."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { value: "45+", label: "Community Programs", desc: "Active globally" },
                            { value: "200", label: "Scholarships", desc: "Awarded annually" },
                            { value: "12K+", label: "Volunteer Hours", desc: "Employee engagement" },
                        ].map((s) => (
                            <div key={s.label} className="p-8 border border-foreground/8 text-center">
                                <p className="text-[36px] font-bold text-foreground">{s.value}</p>
                                <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-red font-semibold">{s.label}</p>
                                <p className="mt-1 text-[11px] text-foreground/40 font-sans">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl space-y-6 text-[14px] text-foreground/55 leading-[1.8] font-sans">
                        <p>Our social responsibility strategy focuses on three pillars: preserving craftsmanship, developing talent, and empowering communities.</p>
                        <p>Through the Kaiser Klowns Foundation, we fund apprenticeship programs across traditional crafts — from leather working to distillation — ensuring that irreplaceable skills are passed to future generations.</p>
                        <p>Our scholarship program supports 200 students annually across design, technology, and business disciplines, with guaranteed internship placements across our Houses.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
