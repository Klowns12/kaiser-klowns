"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "../i18n/TranslationContext";
import Link from "next/link";

export default function CareersSection() {
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
            className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="reveal">
                        <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-4">
                            {dict.nav.careers}
                        </p>
                        <h2 className="text-[28px] md:text-[42px] font-bold tracking-[0.05em] uppercase text-white leading-tight mb-6">
                            {dict.pages.group.careersHeadline}
                        </h2>
                        <div className="w-[40px] h-[2px] bg-red mb-8" />
                        <p className="text-[14px] md:text-[15px] leading-[1.8] text-white/70 font-sans mb-10 max-w-lg">
                            {dict.pages.careers.subtitle}
                        </p>
                        
                        <Link
                            href="/careers"
                            className="group inline-flex items-center gap-3 px-8 py-3 text-[11px] tracking-[0.2em] uppercase text-black bg-white hover:bg-white/90 transition-all duration-300 font-bold"
                        >
                            <span>{dict.pages.careers.title}</span>
                            <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                className="transform group-hover:translate-x-1 transition-transform duration-300"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="reveal reveal-delay-2 relative h-[300px] lg:h-[400px] w-full overflow-hidden group">
                        {/* Abstract Corporate/People Placeholder from Unsplash */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center grayscale opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />
                        
                        <div className="absolute bottom-6 right-6 flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/20">
                                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Tech</span>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/20">
                                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Art</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
