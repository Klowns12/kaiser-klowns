"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { useTranslation } from "../../i18n/TranslationContext";

export default function MissionPage() {
    const { dict } = useTranslation();
    const { title, subtitle, pillars } = dict.pages.mission;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ name: dict.nav.group, href: "/group" }, { name: dict.nav.mission }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pillars.map((p) => (
                            <div key={p.title} className="p-8 md:p-10 border border-foreground/8">
                                <h3 className="text-[16px] font-bold tracking-[0.08em] uppercase text-foreground mb-4">{p.title}</h3>
                                <p className="text-[13px] text-foreground/45 leading-[1.8] font-sans">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
