"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import { useTranslation } from "../../i18n/TranslationContext";

export default function GovernancePage() {
    const { dict } = useTranslation();
    const { title, subtitle, leaders, principlesTitle, principles } = dict.pages.governance;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.group, href: "/group" }, { label: dict.nav.governance }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-16 md:pb-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        {principlesTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leaders.map((l) => (
                            <div key={l.name} className="p-6 border border-foreground/8">
                                <h3 className="text-[16px] font-bold tracking-[0.05em] text-foreground mb-2">{l.name}</h3>
                                <p className="text-[10px] tracking-[0.15em] uppercase text-red">{l.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.05em] uppercase text-foreground mb-8">
                        {principlesTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {principles.map((p) => (
                            <div key={p.title} className="p-6 border border-foreground/8">
                                <h3 className="text-[14px] font-bold tracking-[0.08em] uppercase text-foreground mb-3">{p.title}</h3>
                                <p className="text-[12px] text-foreground/45 leading-[1.7] font-sans">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
