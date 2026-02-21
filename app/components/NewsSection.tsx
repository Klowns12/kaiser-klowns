"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "../i18n/TranslationContext";

const newsColors = ["#c41e1e", "#b8952a", "#4a6fa5"];
const newsCategories = ["GROUP", "HOUSES", "INNOVATION"];
const newsHrefs = ["/news/formula-k-partnership", "/news/maventine-tokyo", "/news/aurelic-platform"];

export default function NewsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { dict } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const els = sectionRef.current?.querySelectorAll(".reveal");
        els?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-background"
        >
            {/* Section header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20">
                <div className="reveal flex items-end justify-between">
                    <div>
                        <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-3">
                            {dict.news.label}
                        </p>
                        <h2 className="text-[28px] md:text-[42px] font-bold tracking-[0.05em] uppercase text-foreground leading-tight">
                            {dict.news.title}
                        </h2>
                        <div className="mt-4 w-[40px] h-[2px] bg-red" />
                    </div>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300 group"
                    >
                        <span>{dict.news.seeAll}</span>
                        <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* News cards */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {dict.news.items.slice(0, 3).map((item, idx) => {
                        const isPromo = 'isPromo' in item && item.isPromo;
                        // Use item slug if present, otherwise fallback to standard newsLinks or generic /news
                        const linkHref = 'slug' in item && item.slug ? `/news/${item.slug}` : (newsHrefs[idx] || '/news');
                        const cat = isPromo ? 'PROMO' : (newsCategories[idx] || 'NEWS');
                        const col = isPromo ? '#b8952a' : (newsColors[idx] || '#4a6fa5');

                        return (
                            <Link
                                key={`${linkHref}-${idx}`}
                                href={linkHref}
                                className={`reveal reveal-delay-${idx + 1} group block`}
                            >
                                {/* Card image area */}
                                <div className="relative h-[220px] md:h-[260px] overflow-hidden mb-5">
                                    <div
                                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                                        style={{
                                            background: `linear-gradient(135deg, ${col}15 0%, ${col}08 50%, #0a0a0a 100%)`,
                                        }}
                                    />
                                    {/* Decorative element */}
                                    <div className="absolute bottom-4 right-4 text-[60px] md:text-[80px] font-bold text-white/[0.03] leading-none tracking-tighter select-none">
                                        {String(idx + 1).padStart(2, "0")}
                                    </div>
                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className="text-[9px] tracking-[0.2em] uppercase px-3 py-1.5"
                                            style={{
                                                backgroundColor: `${col}15`,
                                                color: col,
                                                border: `1px solid ${col}30`,
                                            }}
                                        >
                                            {cat}
                                        </span>
                                    </div>
                                </div>

                                {/* Card content */}
                                <div>
                                    <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/35 mb-2">
                                        {item.date}
                                    </p>
                                    <h3 className={`text-[14px] md:text-[16px] font-bold tracking-[0.03em] uppercase leading-[1.4] mb-3 group-hover:opacity-70 transition-opacity duration-300 ${isPromo ? 'text-[#b8952a]' : 'text-foreground'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-[12px] md:text-[13px] text-foreground/45 leading-[1.6] font-sans">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-10 flex justify-center md:hidden">
                    <Link
                        href="/news"
                        className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300 border border-foreground/15 px-6 py-3"
                    >
                        <span>{dict.news.seeAll}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
