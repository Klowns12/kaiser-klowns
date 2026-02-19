"use client";

import { useEffect, useRef, useState } from "react";

const figures = [
    { value: 5, suffix: "", label: "HOUSES", description: "Creative brands under one vision" },
    { value: 12, suffix: "+", label: "COUNTRIES", description: "Global presence across markets" },
    { value: 4200, suffix: "+", label: "EMPLOYEES", description: "Talented professionals worldwide" },
    { value: 2.8, suffix: "B", label: "REVENUE", description: "Annual revenue in USD" },
];

function AnimatedCounter({
    target,
    suffix,
    isVisible,
}: {
    target: number;
    suffix: string;
    isVisible: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = Math.min(target, increment * step);

            // Use easeOutQuart for smooth deceleration
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Number((target * eased).toFixed(target % 1 !== 0 ? 1 : 0)));

            if (step >= steps) {
                setCount(target);
                clearInterval(timer);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    const displayValue = target >= 1000 && target % 1 === 0
        ? count.toLocaleString()
        : count;

    return (
        <span>
            {displayValue}{suffix}
        </span>
    );
}

export default function KeyFigures() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        entry.target.querySelectorAll(".reveal").forEach((el) => {
                            el.classList.add("visible");
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-background border-y border-foreground/[0.06]"
        >
            {/* Section header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
                <div className="reveal text-center">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/40 mb-3">
                        Group Overview
                    </p>
                    <h2 className="text-[28px] md:text-[42px] font-bold tracking-[0.05em] uppercase text-foreground leading-tight">
                        Key Figures
                    </h2>
                    <div className="mt-4 mx-auto w-[40px] h-[2px] bg-red" />
                </div>
            </div>

            {/* Figures grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {figures.map((fig, idx) => (
                        <div
                            key={fig.label}
                            className={`reveal reveal-delay-${idx + 1} text-center md:border-r last:border-r-0 border-foreground/[0.06]`}
                        >
                            {/* Number */}
                            <div className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-foreground leading-none tracking-tight">
                                <AnimatedCounter
                                    target={fig.value}
                                    suffix={fig.suffix}
                                    isVisible={isVisible}
                                />
                            </div>

                            {/* Label */}
                            <p className="mt-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-red font-semibold">
                                {fig.label}
                            </p>

                            {/* Description */}
                            <p className="mt-2 text-[11px] md:text-[12px] text-foreground/40 font-sans px-4">
                                {fig.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
