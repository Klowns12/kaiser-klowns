"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { useTranslation } from "../../i18n/TranslationContext";

export default function CraftsmanshipPage() {
    const { dict } = useTranslation();
    const { title, subtitle, principles, paragraphs } = dict.pages.craftsmanship;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.group, href: "/group" }, { label: title }]}
                title={title}
                subtitle={subtitle}
            />

            {/* Prose section */}
            <section className="pb-16 md:pb-24 bg-background">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    {paragraphs.map((p, i) => (
                        <p key={i} className="text-[14px] md:text-[15px] text-foreground/50 leading-[2] font-sans mb-8 last:mb-0">
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            {/* Principles grid */}
            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {principles.map((p) => (
                            <div key={p.title} className="p-8 md:p-10 border border-foreground/8">
                                <h3 className="text-[16px] font-bold tracking-[0.08em] uppercase text-foreground mb-4">{p.title}</h3>
                                <p className="text-[13px] text-foreground/45 leading-[1.8] font-sans">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
