"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../i18n/TranslationContext";

export default function PressPage() {
    const { dict } = useTranslation();
    const { title, subtitle, releases } = dict.pages.press;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ name: dict.nav.press }]}
                title={title}
                subtitle={subtitle}
            />

            <section className="pb-24 md:pb-32 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="border-t border-foreground/8">
                        {releases.map((item) => (
                            <div key={item.title} className="py-6 border-b border-foreground/8 group cursor-pointer hover:bg-foreground/[0.02] transition-colors px-2 -mx-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[11px] text-foreground/35 font-sans">{item.date}</span>
                                </div>
                                <h3 className="text-[15px] md:text-[18px] font-bold tracking-[0.03em] uppercase text-foreground group-hover:opacity-70 transition-opacity leading-[1.4]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-[12px] text-foreground/40 font-sans leading-[1.6] max-w-3xl">
                                    {item.excerpt}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
