"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../i18n/TranslationContext";
import type { Locale } from "../i18n/types";

const languages = [
    { code: "en" as Locale, label: "ENGLISH", short: "EN" },
    { code: "th" as Locale, label: "ไทย", short: "TH" },
    { code: "zh" as Locale, label: "中文", short: "中文" },
    { code: "ja" as Locale, label: "日本語", short: "JA" },
    { code: "fr" as Locale, label: "FRANÇAIS", short: "FR" },
    { code: "de" as Locale, label: "DEUTSCH", short: "DE" },
    { code: "ko" as Locale, label: "한국어", short: "KO" },
    { code: "es" as Locale, label: "ESPAÑOL", short: "ES" },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { locale, setLocale } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const current = languages.find((l) => l.code === locale) || languages[0];

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300 cursor-pointer py-1"
            >
                <span>{current.short}</span>
                <svg
                    width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            <div
                className={`absolute right-0 top-full mt-2 min-w-[140px] bg-background border border-foreground/10 shadow-lg transition-all duration-200 z-[60] ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                    }`}
            >
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => { setLocale(lang.code); setIsOpen(false); }}
                        className={`block w-full text-left px-4 py-2.5 text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer ${locale === lang.code
                            ? "text-foreground bg-foreground/5"
                            : "text-foreground/50 hover:text-foreground hover:bg-foreground/[0.03]"
                            }`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    );
}