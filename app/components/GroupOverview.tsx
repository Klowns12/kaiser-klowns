"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "../i18n/TranslationContext";
import Link from "next/link";

export default function GroupOverview() {
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
            { threshold: 0.2 }
        );

        const els = sectionRef.current?.querySelectorAll(".reveal");
        els?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-background border-b border-foreground/[0.05]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="reveal">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-4">
                        {dict.pages.group.title}
                    </p>
                    <h2 className="text-[28px] md:text-[42px] font-bold tracking-[0.05em] uppercase text-foreground leading-tight mb-6">
                        {dict.pages.group.overviewTitle}
                    </h2>
                    <div className="w-[40px] h-[2px] bg-red mb-8" />
                    <p className="text-[14px] md:text-[15px] leading-[1.8] text-foreground/70 font-sans mb-8">
                        {dict.pages.group.subtitle}
                    </p>
                    <Link
                        href="/group"
                        className="group inline-flex items-center gap-3 px-8 py-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-foreground border border-foreground/20 hover:border-foreground/60 transition-all duration-500"
                    >
                        <span>{dict.common.explore}</span>
                        <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                            className="transform group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
                <div className="reveal reveal-delay-2 hidden md:block relative h-[400px] overflow-hidden group">
                    {/* Placeholder Image from Unsplash - Moody Architecture / Abstract Luxury */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')` }}
                    />
                    {/* Dark gradient overlay to make it blend with the background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-l from-background/50 via-transparent to-transparent" />
                    
                    {/* Decorative border */}
                    <div className="absolute inset-0 border border-foreground/10" />
                </div>
            </div>
        </section>
    );
}
