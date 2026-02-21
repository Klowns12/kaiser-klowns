"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import { useTranslation } from "../i18n/TranslationContext";

export default function NewsPage() {
    const { dict } = useTranslation();
    const { title, subtitle } = dict.pages.newsPage;
    const newsItems = dict.news.items;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.news.title }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="border-t border-foreground/8">
                        {newsItems.map((item, i) => {
                            const isPromo = 'isPromo' in item && item.isPromo;
                            const linkHref = item.slug ? `/news/${item.slug}` : (i === 2 || item.title.includes('Formula K') ? '/news/formula-k-partnership' : null);

                            return (
                                <div key={i} className={`py-6 border-b border-foreground/8 group transition-colors px-2 -mx-2 ${isPromo ? "bg-[#b8952a]/[0.02] hover:bg-[#b8952a]/[0.05] border-l-2 border-l-[#b8952a]" : "hover:bg-foreground/[0.02] border-l-2 border-l-transparent"
                                    }`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-[11px] font-sans ${isPromo ? "text-[#b8952a] font-bold" : "text-foreground/35"}`}>{item.date}</span>
                                        {isPromo && <span className="text-[9px] uppercase tracking-wider bg-[#b8952a]/20 text-[#b8952a] px-2 py-0.5 rounded-sm ring-1 ring-[#b8952a]/30">PROMO</span>}
                                    </div>
                                    <h3 className={`text-[15px] md:text-[18px] font-bold tracking-[0.03em] uppercase transition-opacity leading-[1.4] ${isPromo ? "text-[#b8952a] group-hover:opacity-80" : "text-foreground group-hover:opacity-70"
                                        }`}>
                                        {linkHref ? (
                                            <Link href={linkHref} className="hover:underline">{item.title}</Link>
                                        ) : (
                                            item.title
                                        )}
                                    </h3>
                                    <p className="mt-2 text-[12px] text-foreground/40 font-sans leading-[1.6] max-w-3xl">
                                        {item.excerpt}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
