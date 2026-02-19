import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Investors — Kaiser Klowns",
    description: "Investor relations, financial reports, and shareholder information for Kaiser Klowns.",
};

const highlights = [
    { label: "Revenue", value: "$2.8B", note: "FY 2025" },
    { label: "Operating Margin", value: "22.4%", note: "+3.1pp YoY" },
    { label: "Market Cap", value: "$18.6B", note: "As of Feb 2026" },
    { label: "Dividend", value: "$4.20", note: "Per share" },
];

const reports = [
    { title: "Annual Report 2025", type: "PDF", date: "January 2026" },
    { title: "Q3 2025 Results", type: "PDF", date: "October 2025" },
    { title: "Half-Year Report 2025", type: "PDF", date: "July 2025" },
    { title: "Q1 2025 Results", type: "PDF", date: "April 2025" },
];

export default function InvestorsPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: "Investors" }]}
                title="Investor Relations"
                subtitle="Kaiser Klowns is committed to providing transparent, timely, and comprehensive information to the investment community."
            />

            {/* Key financial highlights */}
            <section className="pb-16 md:pb-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {highlights.map((item) => (
                            <div key={item.label} className="p-6 md:p-8 border border-foreground/8 text-center">
                                <p className="text-[32px] md:text-[42px] font-bold text-foreground leading-none">
                                    {item.value}
                                </p>
                                <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-red font-semibold">
                                    {item.label}
                                </p>
                                <p className="mt-1 text-[11px] text-foreground/35 font-sans">
                                    {item.note}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reports */}
            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        Financial Reports
                    </h2>
                    <div className="space-y-0 border-t border-foreground/8">
                        {reports.map((report) => (
                            <div key={report.title} className="flex items-center justify-between py-5 border-b border-foreground/8 group cursor-pointer hover:bg-foreground/[0.02] transition-colors px-2 -mx-2">
                                <div>
                                    <h3 className="text-[14px] font-bold tracking-[0.03em] uppercase text-foreground group-hover:opacity-70 transition-opacity">
                                        {report.title}
                                    </h3>
                                    <p className="mt-1 text-[11px] text-foreground/35 font-sans">
                                        {report.date}
                                    </p>
                                </div>
                                <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 border border-foreground/12 px-3 py-1.5">
                                    {report.type}
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
