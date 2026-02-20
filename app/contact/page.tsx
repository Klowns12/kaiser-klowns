"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../i18n/TranslationContext";

export default function ContactPage() {
    const { dict } = useTranslation();
    const { title, subtitle, formLabels, officesTitle, offices } = dict.pages.contact;

    return (
        <>
            <Navbar />
            <PageHeader
                breadcrumbs={[{ label: dict.nav.contact }]}
                title={title}
                subtitle={subtitle}
            />

            {/* Contact form */}
            <section className="pb-16 md:pb-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="max-w-2xl">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.name}</label>
                                    <input type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.email}</label>
                                    <input type="email" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.company}</label>
                                <input type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.subject}</label>
                                <input type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.message}</label>
                                <textarea rows={5} className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors resize-none" />
                            </div>
                            <button className="mt-2 px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase font-bold hover:opacity-80 transition-opacity">
                                {formLabels.send}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global offices */}
            <section className="pb-24 md:pb-32 bg-background border-t border-foreground/8">
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20">
                    <h2 className="text-[22px] md:text-[28px] font-bold tracking-[0.05em] uppercase text-foreground mb-10">
                        {officesTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offices.map((office) => (
                            <div key={office.city} className="border-l border-foreground/10 pl-6">
                                <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground">
                                    {office.city}
                                </h3>
                                <p className="mt-3 text-[12px] text-foreground/40 leading-[1.7] font-sans whitespace-pre-line">
                                    {office.address}
                                </p>
                                <p className="mt-2 text-[12px] text-foreground/50 font-sans">
                                    {office.phone}
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
