"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../i18n/TranslationContext";

export default function HeroSection() {
    const [loaded, setLoaded] = useState(false);
    const [taglineVisible, setTaglineVisible] = useState(false);
    const { dict } = useTranslation();

    useEffect(() => {
        const t1 = setTimeout(() => setLoaded(true), 300);
        const t2 = setTimeout(() => setTaglineVisible(true), 1200);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    return (
        <section
            id="hero"
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0d]"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1920&q=80)`,
                    transform: loaded ? 'scale(1)' : 'scale(1.1)',
                }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Decorative corner lines */}
            <div className="absolute top-12 left-12 w-16 h-16 border-l border-t border-white/10 hidden md:block" />
            <div className="absolute top-12 right-12 w-16 h-16 border-r border-t border-white/10 hidden md:block" />
            <div className="absolute bottom-12 left-12 w-16 h-16 border-l border-b border-white/10 hidden md:block" />
            <div className="absolute bottom-12 right-12 w-16 h-16 border-r border-b border-white/10 hidden md:block" />

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Logo */}
                <div
                    className="transition-all duration-1000 ease-out"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'scale(1)' : 'scale(0.8)',
                    }}
                >
                    <Image
                        src="/logo/favicon copy.ico"
                        alt="Kaiser Klowns"
                        width={180}
                        height={180}
                        priority
                        className="w-[120px] md:w-[180px] h-auto invert"
                    />
                </div>

                {/* Decorative line */}
                <div
                    className="mt-8 h-[1px] bg-white/30 transition-all duration-700 ease-out"
                    style={{
                        width: loaded ? '60px' : '0px',
                        transitionDelay: '800ms',
                    }}
                />

                {/* Tagline */}
                <div className="mt-8 overflow-hidden">
                    <p
                        className="text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-white/60 transition-all duration-700"
                        style={{
                            opacity: taglineVisible ? 1 : 0,
                            transform: taglineVisible ? 'translateY(0)' : 'translateY(20px)',
                        }}
                    >
                        {dict.hero.tagline}
                    </p>
                </div>

                {/* CTA */}
                <div
                    className="mt-12 transition-all duration-700"
                    style={{
                        opacity: taglineVisible ? 1 : 0,
                        transform: taglineVisible ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: '300ms',
                    }}
                >
                    <a
                        href="#houses"
                        className="group relative inline-flex items-center gap-3 px-8 py-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-500"
                    >
                        <span>{dict.hero.cta}</span>
                        <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                            className="transform group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700"
                style={{
                    opacity: taglineVisible ? 1 : 0,
                    transitionDelay: '600ms',
                }}
            >
                <span className="text-[9px] tracking-[0.3em] uppercase text-white/30">{dict.hero.scroll}</span>
                <div className="w-[1px] h-8 bg-white/15 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/40 animate-float" />
                </div>
            </div>
        </section>
    );
}
