"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import FAQJsonLd from "../components/FAQJsonLd";
import Link from "next/link";
import { useTranslation } from "../i18n/TranslationContext";

const groupFaqs = [
    { question: "What is Kaiser Klowns?", answer: "Kaiser Klowns is a luxury creative conglomerate dedicated to the long-term development of its Houses, spanning fashion, technology, spirits, entertainment, and media." },
    { question: "How many Houses does Kaiser Klowns have?", answer: "Kaiser Klowns operates five distinct Houses: Maventine (Fashion), Aurelic Systems (Technology), KurenTengu (Spirits), Velvessence Studios (Entertainment), and Lokovox Media (Media)." },
    { question: "When was Kaiser Klowns founded?", answer: "Kaiser Klowns was founded in 2018 with the vision to create a conglomerate where creativity drives commerce." },
    { question: "How many countries does Kaiser Klowns operate in?", answer: "Kaiser Klowns operates in over 12 countries across three continents with more than 4,200 employees." },
];

const yearTags = ["EST. 2018", "CORE", "STANDARDS", "IMPACT"];
const hrefs = ["/group/history", "/group/mission", "/group/governance", "/group/key-figures"];

export default function GroupPage() {
    const { dict } = useTranslation();
    const cards = dict.pages.group.cards;

    return (
        <>
            <Navbar />
            <FAQJsonLd faqs={groupFaqs} />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.group }]}
                title={dict.pages.group.title}
                subtitle={dict.pages.group.subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cards.map((item, i) => (
                            <Link
                                key={hrefs[i]}
                                href={hrefs[i]}
                                className="group block p-8 md:p-10 border border-foreground/8 hover:border-foreground/20 transition-all duration-500"
                            >
                                <p className="text-[10px] tracking-[0.25em] uppercase text-red/80 mb-3">
                                    {yearTags[i]}
                                </p>
                                <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.05em] uppercase text-foreground mb-3 group-hover:opacity-70 transition-opacity">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] text-foreground/45 leading-[1.7] font-sans">
                                    {item.description}
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/30 group-hover:text-foreground/60 transition-colors">
                                    <span>{item.cta}</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
