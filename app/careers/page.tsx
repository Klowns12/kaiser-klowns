import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Careers — Kaiser Klowns",
    description: "Join the creative empire. Explore career opportunities across our five Houses.",
};

const values = [
    { icon: "✦", title: "Creativity First", description: "We believe in the power of creative thinking to solve every challenge." },
    { icon: "◆", title: "Excellence Always", description: "Good enough is never enough. We pursue mastery in everything we do." },
    { icon: "●", title: "Global Perspective", description: "Teams across 12 countries bring diverse viewpoints to every project." },
    { icon: "■", title: "Entrepreneurial Spirit", description: "Each House operates with the agility of a startup within the strength of a conglomerate." },
];

const openRoles = [
    { title: "Creative Director", house: "Maventine", location: "Paris", type: "Full-time" },
    { title: "Senior Platform Engineer", house: "Aurelic Systems", location: "Tokyo", type: "Full-time" },
    { title: "Brand Strategist", house: "KurenTengu", location: "Bangkok", type: "Full-time" },
    { title: "Executive Producer", house: "Velvessence Studios", location: "Los Angeles", type: "Full-time" },
    { title: "Editorial Director", house: "Lokovox Media", location: "London", type: "Full-time" },
    { title: "VP of Corporate Development", house: "Group", location: "New York", type: "Full-time" },
];

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Careers" }]}
                title="Join the Empire"
                subtitle="We're building the future of creativity. Join a team of 4,200+ professionals across five Houses and twelve countries."
            />

            {/* Values */}
            <section className="pb-20 md:pb-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="p-6 md:p-8 border border-foreground/8">
                                <span className="text-[24px] text-red">{v.icon}</span>
                                <h3 className="mt-4 text-[14px] font-bold tracking-[0.08em] uppercase text-foreground">{v.title}</h3>
                                <p className="mt-2 text-[12px] text-foreground/45 leading-[1.7] font-sans">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open roles */}
            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        Open Positions
                    </h2>
                    <div className="border-t border-foreground/8">
                        {openRoles.map((role) => (
                            <div key={role.title} className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-foreground/8 group cursor-pointer hover:bg-foreground/[0.02] transition-colors px-2 -mx-2 gap-2">
                                <div>
                                    <h3 className="text-[14px] font-bold tracking-[0.03em] uppercase text-foreground group-hover:opacity-70 transition-opacity">
                                        {role.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[10px] tracking-[0.1em] uppercase text-red">{role.house}</span>
                                        <span className="text-foreground/15">·</span>
                                        <span className="text-[11px] text-foreground/35 font-sans">{role.location}</span>
                                    </div>
                                </div>
                                <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 border border-foreground/12 px-3 py-1.5 self-start md:self-auto">
                                    {role.type}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
