"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "../i18n/TranslationContext";
import type { Dictionary } from "../i18n/types";

const houses = [
    {
        name: "AURELIC SYSTEMS",
        dictKey: "aurelic" as const,
        href: "/houses/aurelic",
        gradient: "from-[#0a0a1a] via-[#151525] to-[#05050a]",
        accent: "#4a6fa5",
        locked: false,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
        name: "LOKOVOX MEDIA",
        dictKey: "lokovox" as const,
        href: "/houses/lokovox",
        gradient: "from-[#0a1a15] via-[#15252a] to-[#050a0a]",
        accent: "#2a8a6a",
        locked: false,
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    },
    {
        name: "MAVENTINE",
        dictKey: "maventine" as const,
        href: "/houses/maventine",
        gradient: "from-[#1a0a0a] via-[#2d1515] to-[#0a0505]",
        accent: "#c41e1e",
        locked: true,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    },
    {
        name: "VELVESSENCE STUDIOS",
        dictKey: "velvessence" as const,
        href: "/houses/velvessence",
        gradient: "from-[#150a1a] via-[#201525] to-[#0a050d]",
        accent: "#8a4a8a",
        locked: true,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    },
    {
        name: "KURENTENGU",
        dictKey: "kurentengu" as const,
        href: "/houses/kurentengu",
        gradient: "from-[#1a0a05] via-[#2d1a0a] to-[#0a0502]",
        accent: "#b8952a",
        locked: true,
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
    },
];

export default function HousesGrid() {
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
            { threshold: 0.15 }
        );

        const els = sectionRef.current?.querySelectorAll(".reveal");
        els?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="houses"
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-background"
        >
            {/* Section header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
                <div className="reveal">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-3">
                        {dict.houses.sectionLabel}
                    </p>
                    <h2 className="text-[28px] md:text-[42px] font-bold tracking-[0.05em] uppercase text-foreground leading-tight">
                        {dict.houses.sectionTitle}
                    </h2>
                    <div className="mt-4 w-[40px] h-[2px] bg-red" />
                </div>
            </div>

            {/* Houses Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Row 1: 2 cards (Aurelic + Lokovox — clickable) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
                    {houses.slice(0, 2).map((house, idx) => (
                        <HouseCard key={house.name} house={house} delay={idx} tall dict={dict} />
                    ))}
                </div>

                {/* Row 2: 3 cards (Maventine, Velvessence, KurenTengu — locked) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {houses.slice(2).map((house, idx) => (
                        <HouseCard key={house.name} house={house} delay={idx + 2} dict={dict} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HouseCard({
    house,
    delay,
    tall,
    dict,
}: {
    house: (typeof houses)[0];
    delay: number;
    tall?: boolean;
    dict: Dictionary;
}) {
    const houseDict = dict.houses[house.dictKey];
    const inner = (
        <>
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${house.image})` }}
            />
            {/* Gradient overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${house.gradient} ${house.locked ? 'opacity-85' : 'opacity-70'} transition-opacity duration-500 group-hover:opacity-60`}
            />

            {/* Decorative pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Accent line on hover */}
            {!house.locked && (
                <div
                    className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-700 ease-out"
                    style={{ backgroundColor: house.accent }}
                />
            )}

            {/* Lock badge */}
            {house.locked && (
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-60">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span className="text-[8px] tracking-[0.2em] uppercase text-white/50">{dict.common.comingSoon}</span>
                </div>
            )}

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                {/* Tagline */}
                <p
                    className={`text-[10px] tracking-[0.25em] uppercase mb-2 ${house.locked ? 'opacity-40' : 'opacity-0 group-hover:opacity-100'} translate-y-3 group-hover:translate-y-0 transition-all duration-500`}
                    style={{ color: house.accent }}
                >
                    {houseDict.tagline}
                </p>

                {/* Name */}
                <h3 className={`text-white text-[18px] md:text-[22px] font-bold tracking-[0.1em] uppercase mb-2 ${house.locked ? 'opacity-50' : ''}`}>
                    {house.name}
                </h3>

                {/* Description */}
                <p className={`text-white/50 text-[12px] tracking-[0.05em] max-w-[280px] ${house.locked ? 'opacity-30' : 'opacity-0 group-hover:opacity-100'} translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100`}>
                    {houseDict.description}
                </p>

                {/* Explore arrow (only for unlocked) */}
                {!house.locked && (
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 delay-200">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">
                            {dict.houses.explore}
                        </span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-60">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                )}
            </div>
        </>
    );

    if (house.locked) {
        return (
            <div
                className={`reveal reveal-delay-${delay + 1} group relative block overflow-hidden cursor-default ${tall ? "h-[380px] md:h-[480px]" : "h-[320px] md:h-[380px]"}`}
            >
                {inner}
            </div>
        );
    }

    return (
        <Link
            href={house.href}
            className={`reveal reveal-delay-${delay + 1} group relative block overflow-hidden ${tall ? "h-[380px] md:h-[480px]" : "h-[320px] md:h-[380px]"}`}
        >
            {inner}
        </Link>
    );
}
