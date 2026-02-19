"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);

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
            className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
        >
            {/* Subtle diagonal pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        white 0px,
                        white 1px,
                        transparent 1px,
                        transparent 20px
                    )`,
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                {/* Label */}
                <div className="reveal">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-6">
                        Partner With Us
                    </p>
                </div>

                {/* Heading */}
                <div className="reveal reveal-delay-1">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[42px] font-bold tracking-[0.03em] uppercase text-white/90 leading-[1.3]">
                        Ready to shape the<br />
                        <span className="text-[#b8952a]">future together?</span>
                    </h2>
                </div>

                {/* Description */}
                <div className="reveal reveal-delay-2 mt-6">
                    <p className="text-white/35 text-[13px] md:text-[14px] leading-[1.8] font-sans max-w-xl mx-auto">
                        Whether you&apos;re an investor, a potential partner, or a future
                        collaborator — we&apos;d love to hear from you.
                    </p>
                </div>

                {/* CTA buttons */}
                <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-8 py-3.5 text-[10px] md:text-[11px] tracking-[0.25em] uppercase bg-white text-[#0a0a0a] hover:bg-white/90 transition-all duration-300"
                    >
                        <span>Contact Us</span>
                        <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                    <Link
                        href="/investors"
                        className="inline-flex items-center gap-3 px-8 py-3.5 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/60 border border-white/15 hover:border-white/40 hover:text-white transition-all duration-300"
                    >
                        <span>Investor Relations</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
