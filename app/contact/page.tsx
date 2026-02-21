"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import { useTranslation } from "../i18n/TranslationContext";

export default function ContactPage() {
    const { dict } = useTranslation();
    const { title, subtitle, formLabels, officesTitle, offices } = dict.pages.contact;

    const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error("Failed to send");
            setStatus("success");
            setFormData({ name: "", email: "", company: "", subject: "", message: "" });

            // Revert success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            // Revert error message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

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
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {status === "success" && (
                                <div className="p-4 mb-4 border border-[#b8952a]/30 bg-[#b8952a]/5 text-[#b8952a] text-[12px] font-sans">
                                    Thank you. Your message has been received. We will be in touch shortly.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="p-4 mb-4 border border-red-500/30 bg-red-500/5 text-red-500 text-[12px] font-sans">
                                    There was an error sending your message. Please try again later.
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.name}</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors placeholder:text-foreground/20" placeholder="John Doe" disabled={status === "loading"} />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.email}</label>
                                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors placeholder:text-foreground/20" placeholder="john@example.com" disabled={status === "loading"} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.company}</label>
                                <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors placeholder:text-foreground/20" placeholder="Organization name (optional)" disabled={status === "loading"} />
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.subject}</label>
                                <input name="subject" value={formData.subject} onChange={handleChange} type="text" className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors placeholder:text-foreground/20" placeholder="How can we help?" disabled={status === "loading"} />
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2">{formLabels.message}</label>
                                <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-transparent border border-foreground/15 px-4 py-3 text-[13px] font-sans text-foreground outline-none focus:border-foreground/40 transition-colors resize-none placeholder:text-foreground/20" placeholder="Your message..." disabled={status === "loading"} />
                            </div>
                            <button type="submit" disabled={status === "loading"} className="mt-2 px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase font-bold hover:opacity-80 transition-opacity disabled:opacity-50 flex items-center gap-3">
                                {status === "loading" ? "Sending..." : formLabels.send}
                            </button>
                        </form>
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
