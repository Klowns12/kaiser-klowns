"use client";

import Link from "next/link";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import { useTranslation } from "../i18n/TranslationContext";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function PageHeader({
    breadcrumbs,
    title,
    subtitle,
    children,
}: {
    breadcrumbs: BreadcrumbItem[];
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}) {
    const { dict } = useTranslation();

    return (
        <div className="pt-28 md:pt-36 pb-16 md:pb-20 bg-background">
            {/* Structured Data: Breadcrumb Schema for SEO/GEO */}
            <BreadcrumbJsonLd items={breadcrumbs.map(b => ({ name: b.label, href: b.href }))} />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
                    <Link href="/" className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 hover:text-foreground transition-colors">
                        {dict.common.home}
                    </Link>
                    {breadcrumbs.map((item, idx) => (
                        <span key={idx} className="flex items-center gap-2">
                            <span className="text-foreground/20 text-[10px]">/</span>
                            {item.href ? (
                                <Link href={item.href} className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 hover:text-foreground transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/70">
                                    {item.label}
                                </span>
                            )}
                        </span>
                    ))}
                </nav>

                {/* Title */}
                <h1 className="text-[32px] md:text-[52px] font-bold tracking-[0.04em] uppercase text-foreground leading-tight">
                    {title}
                </h1>

                {subtitle && (
                    <p className="mt-4 text-[13px] md:text-[15px] text-foreground/50 leading-[1.7] font-sans max-w-2xl">
                        {subtitle}
                    </p>
                )}

                <div className="mt-6 w-[40px] h-[2px] bg-red" />

                {children}
            </div>
        </div>
    );
}
