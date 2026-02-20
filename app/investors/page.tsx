"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../i18n/TranslationContext";

export default function InvestorsPage() {
    const { dict } = useTranslation();
    const { title, subtitle, highlights, reportsTitle, reports } = dict.pages.investors;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.investors }]}
                title={title}
                subtitle={subtitle}
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
                                {item.change && (
                                    <p className="mt-1 text-[11px] text-foreground/35 font-sans">
                                        {item.change}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reports */}
            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        {reportsTitle}
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
                                    PDF
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
