"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../i18n/TranslationContext";

export default function CommitmentsPage() {
    const { dict } = useTranslation();
    const { title, subtitle, sections } = dict.pages.commitments;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.commitments }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                    {sections.map((c) => (
                        <div key={c.title} className="border border-foreground/8 p-8 md:p-12">
                            <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-4">
                                {c.title}
                            </h2>
                            <p className="text-[13px] md:text-[14px] text-foreground/45 leading-[1.8] font-sans max-w-3xl mb-8">
                                {c.description}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
