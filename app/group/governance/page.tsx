import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
    title: "Governance — Kaiser Klowns",
    description: "Corporate governance, ethics, and compliance at Kaiser Klowns.",
};

const leaders = [
    { role: "Chairman & CEO", name: "— —", description: "Founding visionary behind the Kaiser Klowns empire." },
    { role: "Chief Operating Officer", name: "— —", description: "Oversees day-to-day operations across all five Houses." },
    { role: "Chief Financial Officer", name: "— —", description: "Manages financial strategy and investor relations." },
    { role: "General Counsel", name: "— —", description: "Leads legal affairs, governance, and compliance." },
];

const principles = [
    "Transparency in all financial and operational reporting",
    "Independent board oversight with diverse representation",
    "Zero-tolerance policy on corruption and bribery",
    "Whistleblower protection and confidential reporting channels",
    "Annual third-party governance audits",
    "Stakeholder engagement and community impact assessments",
];

export default function GovernancePage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Group", href: "/group" }, { label: "Governance" }]}
                title="Governance & Ethics"
                subtitle="We hold ourselves to the highest standards of corporate governance, transparency, and ethical conduct."
            />

            <section className="pb-16 md:pb-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        Leadership
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leaders.map((l) => (
                            <div key={l.role} className="p-6 border border-foreground/8">
                                <p className="text-[10px] tracking-[0.15em] uppercase text-red mb-2">{l.role}</p>
                                <h3 className="text-[16px] font-bold tracking-[0.05em] text-foreground mb-2">{l.name}</h3>
                                <p className="text-[12px] text-foreground/40 font-sans leading-[1.6]">{l.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        Our Principles
                    </h2>
                    <ul className="space-y-4 max-w-3xl">
                        {principles.map((p) => (
                            <li key={p} className="flex items-start gap-4 text-[13px] text-foreground/50 font-sans leading-[1.6]">
                                <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 shrink-0" />
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    );
}
