import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
    title: "Key Figures — Kaiser Klowns",
    description: "The numbers behind the Kaiser Klowns creative empire.",
};

const figures = [
    { value: "5", label: "HOUSES", description: "Fashion, Technology, Spirits, Entertainment, and Media" },
    { value: "12+", label: "COUNTRIES", description: "Global operations spanning three continents" },
    { value: "4,200+", label: "EMPLOYEES", description: "Talented professionals driving creative excellence" },
    { value: "$2.8B", label: "REVENUE", description: "FY 2025 consolidated revenue" },
    { value: "22.4%", label: "OPERATING MARGIN", description: "Record profitability driven by operational excellence" },
    { value: "$18.6B", label: "MARKET CAP", description: "As of February 2026" },
];

export default function KeyFiguresPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Group", href: "/group" }, { label: "Key Figures" }]}
                title="Key Figures"
                subtitle="The numbers that define our creative empire."
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {figures.map((f) => (
                            <div key={f.label} className="p-6 md:p-10 border border-foreground/8 text-center">
                                <p className="text-[36px] md:text-[52px] font-bold text-foreground leading-none">{f.value}</p>
                                <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-red font-semibold">{f.label}</p>
                                <p className="mt-2 text-[11px] md:text-[12px] text-foreground/40 font-sans">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
