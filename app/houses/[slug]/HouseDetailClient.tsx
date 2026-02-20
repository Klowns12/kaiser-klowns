'use client';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useTranslation } from "../../i18n/TranslationContext";

interface HouseDetailClientProps {
    slug: string;
    houseConfig: {
        accent: string;
        gradient: string;
    };
}

type HouseSpecificDetails = {
    name: string;
    sector: string;
    tagline: string;
    description: string;
    founded: string;
    headquarters: string;
    employees: string;
    highlights: string[];
};

export default function HouseDetailClient({ slug, houseConfig }: HouseDetailClientProps) {
    const { dict } = useTranslation();
    const houseDetails = dict.houseDetails;
    const house = houseDetails[slug as keyof typeof houseDetails] as unknown as HouseSpecificDetails | undefined;

    if (!house || typeof house === 'string') return null;

    return (
        <>
            <Navbar />

            {/* Hero banner */}
            <div className={`relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br ${houseConfig.gradient} overflow-hidden`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: houseConfig.accent }}>
                        {house.sector}
                    </p>
                    <h1 className="text-[36px] md:text-[60px] font-bold tracking-[0.04em] uppercase text-white leading-tight">
                        {house.name}
                    </h1>
                    <p className="mt-4 text-white/50 text-[16px] md:text-[18px] italic font-sans">
                        {house.tagline}
                    </p>
                    <div className="mt-6 w-[40px] h-[2px]" style={{ backgroundColor: houseConfig.accent }} />
                </div>
            </div>

            {/* Content */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.05em] uppercase text-foreground mb-6">
                            {houseDetails.about}
                        </h2>
                        <p className="text-[14px] text-foreground/60 leading-[1.8] font-sans">
                            {house.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-12">
                            <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground mb-6">
                                {houseDetails.highlightsLabel}
                            </h3>
                            <ul className="space-y-3">
                                {house.highlights.map((h: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3 text-[13px] text-foreground/50 font-sans leading-[1.6]">
                                        <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: houseConfig.accent }} />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {[
                            { label: houseDetails.foundedLabel, value: house.founded },
                            { label: houseDetails.headquartersLabel, value: house.headquarters },
                            { label: houseDetails.employeesLabel, value: house.employees },
                            { label: houseDetails.sectorLabel, value: house.sector },
                        ].map((item) => (
                            <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: houseConfig.accent + '40' }}>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/35">{item.label}</p>
                                <p className="mt-1 text-[14px] font-bold tracking-[0.03em] text-foreground">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back to Houses */}
            <section className="pb-16 md:pb-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <Link
                        href="/houses"
                        className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        {houseDetails.backToAll}
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
