"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { useTranslation } from "../../i18n/TranslationContext";

export default function EnvironmentPage() {
    const { dict } = useTranslation();
    const { title, subtitle, stats, paragraphs } = dict.pages.environment;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.commitments, href: "/commitments" }, { label: dict.nav.environment }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {stats.map((s) => (
                            <div key={s.label} className="p-8 border border-foreground/8 text-center">
                                <p className="text-[36px] font-bold text-foreground">{s.value}</p>
                                <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-red font-semibold">{s.label}</p>
                                <p className="mt-1 text-[11px] text-foreground/40 font-sans">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl space-y-6 text-[14px] text-foreground/55 leading-[1.8] font-sans">
                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
