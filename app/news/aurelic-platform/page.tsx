"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import { useTranslation } from "../../i18n/TranslationContext";

export default function AurelicPlatformPage() {
    const { dict } = useTranslation();
    const { title, subtitle, paragraphs, backLabel } = dict.pages.aurelicPlatform;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.news.title, href: "/news" }, { label: title }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <div className="space-y-6 text-[14px] text-foreground/55 leading-[1.8] font-sans">
                        {paragraphs.map((p, i) => (
                            <p key={i} className={i === 0 ? "text-[16px] text-foreground/70 font-medium" : ""}>
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-foreground/8">
                        <Link href="/news" className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                            </svg>
                            {backLabel}
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
