"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { useTranslation } from "../../i18n/TranslationContext";

export default function KeyFiguresPage() {
    const { dict } = useTranslation();
    const { title, subtitle, figures } = dict.pages.keyFigures;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.group, href: "/group" }, { label: dict.nav.keyFigures }]}
                title={title}
                subtitle={subtitle}
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
