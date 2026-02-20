"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { useTranslation } from "../../i18n/TranslationContext";

export default function HistoryPage() {
    const { dict } = useTranslation();
    const { title, subtitle, events } = dict.pages.history;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.group, href: "/group" }, { label: dict.nav.history }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="relative pl-8 md:pl-12 border-l border-foreground/10">
                        {events.map((item) => (
                            <div key={item.year} className="relative mb-12 last:mb-0">
                                <div className="absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] w-[10px] h-[10px] rounded-full bg-red border-2 border-background" />
                                <p className="text-[11px] tracking-[0.2em] uppercase text-red font-bold mb-2">{item.year}</p>
                                <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.05em] uppercase text-foreground mb-2">{item.title}</h3>
                                <p className="text-[13px] text-foreground/45 leading-[1.7] font-sans max-w-2xl">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
