"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "../i18n/TranslationContext";

export default function PhilosophySection() {
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
            className="relative py-32 md:py-44 bg-[#0a0a0a] overflow-hidden"
        >
            {/* Subtle radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#b8952a]/5 to-transparent blur-3xl" />
            </div>

            {/* Decorative vertical lines */}
            <div className="absolute top-0 left-[15%] w-[1px] h-full bg-white/[0.03] hidden md:block" />
            <div className="absolute top-0 right-[15%] w-[1px] h-full bg-white/[0.03] hidden md:block" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                {/* Small label */}
                <div className="reveal">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8952a]/60 mb-10">
                        {dict.philosophy.label}
                    </p>
                </div>

                {/* Quote */}
                <div className="reveal reveal-delay-1">
                    <blockquote className="text-[22px] md:text-[36px] lg:text-[42px] leading-[1.3] text-white/90 font-bold tracking-[0.02em]">
                        {dict.philosophy.quote1}
                        <br />
                        <span className="text-[#b8952a]">{dict.philosophy.quote2}</span>
                    </blockquote>
                </div>

                {/* Decorative line */}
                <div className="reveal reveal-delay-2 flex justify-center mt-10">
                    <div className="w-[40px] h-[1px] bg-[#b8952a]/30" />
                </div>

                {/* Attribution */}
                <div className="reveal reveal-delay-3 mt-8">
                    <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase">
                        {dict.philosophy.attribution}
                    </p>
                </div>

                {/* Supporting text */}
                <div className="reveal reveal-delay-4 mt-16 max-w-2xl mx-auto">
                    <p className="text-white/40 text-[13px] md:text-[14px] leading-[1.8] tracking-wide font-sans">
                        {dict.philosophy.body}
                    </p>
                </div>
            </div>
        </section>
    );
}
