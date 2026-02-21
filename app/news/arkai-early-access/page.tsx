"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../i18n/TranslationContext";

export default function ArkaiPromoPage() {
    const { dict } = useTranslation();
    const { title, subtitle, paragraphs, backLabel } = dict.pages.arkaiPromo;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.news.title, href: "/news" }, { label: title }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="w-full aspect-[21/9] relative mb-12 overflow-hidden bg-foreground/5 brightness-90 contrast-125 rounded-sm">
                        <Image
                            src="/news/arkai-promo.png"
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="space-y-6 text-[14px] text-foreground/55 leading-[1.8] font-sans relative">
                        {/* Decorative promo accent */}
                        <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b8952a] via-[#b8952a]/50 to-transparent hidden md:block"></div>
                        {paragraphs.map((p, i) => (
                            <p key={i} className={i === 0 ? "text-[16px] text-[#b8952a] font-medium" : ""}>
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-foreground/8 flex justify-between items-center">
                        <Link href="/news" className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                            </svg>
                            {backLabel}
                        </Link>

                        <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase bg-[#b8952a] text-black hover:bg-[#c9a63b] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(184,149,42,0.3)] hover:shadow-[0_0_30px_rgba(184,149,42,0.5)]">
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
