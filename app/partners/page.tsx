"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import { useTranslation } from "../i18n/TranslationContext";

export default function PartnersPage() {
    const { dict } = useTranslation();
    const { title, subtitle, items } = dict.pages.partners;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.partners }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="space-y-6">
                        {items.map((p) => (
                            <div key={p.name} className="p-8 md:p-10 border border-foreground/8 hover:border-foreground/15 transition-all duration-300 group">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-red mb-2">{p.type}</p>
                                        <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.05em] uppercase text-foreground mb-3">{p.name}</h3>
                                        <p className="text-[13px] text-foreground/45 leading-[1.7] font-sans max-w-xl">{p.description}</p>
                                    </div>
                                    {p.name === 'Formula K Racing' && (
                                        <Link href="/news/formula-k-partnership" className="shrink-0 ml-6 text-[10px] tracking-[0.15em] uppercase text-foreground/40 border border-foreground/12 px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">
                                            {dict.common.details}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
