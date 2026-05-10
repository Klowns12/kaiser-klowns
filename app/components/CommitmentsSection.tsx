"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "../i18n/TranslationContext";
import Link from "next/link";

export default function CommitmentsSection() {
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
            className="relative py-24 md:py-32 bg-background border-t border-foreground/[0.05]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-4">
                        {dict.pages.commitments.title}
                    </p>
                    <h2 className="text-[28px] md:text-[36px] font-bold tracking-[0.05em] uppercase text-foreground leading-tight mb-6">
                        {dict.pages.group.responsibilityHeadline}
                    </h2>
                    <div className="w-[40px] h-[2px] bg-red mx-auto mb-6" />
                    <p className="text-[14px] md:text-[15px] leading-[1.8] text-foreground/70 font-sans">
                        {dict.pages.commitments.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Environment / Sustainability */}
                    <div className="reveal reveal-delay-1 group p-8 border border-foreground/[0.05] hover:border-foreground/20 transition-colors bg-foreground/[0.02]">
                        <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground mb-4">
                            {dict.nav.environment}
                        </h3>
                        <p className="text-[13px] text-foreground/60 leading-[1.6] font-sans mb-6">
                            {dict.pages.commitments.sections[0]?.description || "Pioneering sustainable luxury through carbon-neutral operations and conscious design."}
                        </p>
                        <Link href="/group/commitments" className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                            {dict.common.explore} <span className="text-red">→</span>
                        </Link>
                    </div>

                    {/* Social Responsibility */}
                    <div className="reveal reveal-delay-2 group p-8 border border-foreground/[0.05] hover:border-foreground/20 transition-colors bg-foreground/[0.02]">
                        <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground mb-4">
                            {dict.nav.socialResponsibility}
                        </h3>
                        <p className="text-[13px] text-foreground/60 leading-[1.6] font-sans mb-6">
                            {dict.pages.commitments.sections[1]?.description || "Investing in local talent and communities across Thailand through education and opportunity."}
                        </p>
                        <Link href="/group/commitments" className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                            {dict.common.explore} <span className="text-red">→</span>
                        </Link>
                    </div>

                    {/* Governance */}
                    <div className="reveal reveal-delay-3 group p-8 border border-foreground/[0.05] hover:border-foreground/20 transition-colors bg-foreground/[0.02]">
                        <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground mb-4">
                            {dict.nav.governance}
                        </h3>
                        <p className="text-[13px] text-foreground/60 leading-[1.6] font-sans mb-6">
                            Transparent leadership, ethical practices, and an unwavering commitment to long-term sustainable growth over short-term gains.
                        </p>
                        <Link href="/group/governance" className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                            {dict.common.explore} <span className="text-red">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
