"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../i18n/TranslationContext";

export default function CareersPage() {
    const { dict } = useTranslation();
    const { title, subtitle, valuesTitle, values, positionsTitle, positions } = dict.pages.careers;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.careers }]}
                title={title}
                subtitle={subtitle}
            />

            {/* Values */}
            <section className="pb-20 md:pb-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        {valuesTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="p-6 md:p-8 border border-foreground/8">
                                <h3 className="text-[14px] font-bold tracking-[0.08em] uppercase text-foreground">{v.title}</h3>
                                <p className="mt-2 text-[12px] text-foreground/45 leading-[1.7] font-sans">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open positions */}
            <section id="positions" className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        {positionsTitle}
                    </h2>
                    <div className="border-t border-foreground/8">
                        {positions.map((role) => (
                            <div key={role.title} className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-foreground/8 group cursor-pointer hover:bg-foreground/[0.02] transition-colors px-2 -mx-2 gap-2">
                                <div>
                                    <h3 className="text-[14px] font-bold tracking-[0.03em] uppercase text-foreground group-hover:opacity-70 transition-opacity">
                                        {role.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-1">
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
