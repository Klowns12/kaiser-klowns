"use client";

import { useTranslation } from "../i18n/TranslationContext";

export default function JsonLd() {
    const { dict, locale } = useTranslation();

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Kaiser Klowns",
        url: "https://www.kaiserklowns.group",
        logo: "https://www.kaiserklowns.group/logo/KK.png",
        description: dict.meta?.description || "A luxury creative conglomerate dedicated to identity, heritage, and creative excellence.",
        sameAs: [
            "https://twitter.com/KaiserKlowns",
            "https://linkedin.com/company/kaiserklowns",
            "https://instagram.com/kaiserklowns"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-555-5555",
            contactType: "customer service",
            areaServed: "World",
            availableLanguage: ["en", "th", "zh", "ja", "fr", "de", "ko", "es"]
        },
        // GEO / AEO Structured Data - Helps Generative AI understand the entity deeply
        knowsAbout: [
            "Luxury Brand Management",
            "Creative Conglomerate Operations",
            "High-End Fashion & Street-Tailoring",
            "Artificial Intelligence & Machine Learning",
            "Enterprise Automation & Productivity Software",
            "Premium Spirits & Beverages",
            "Media Production & Entertainment",
            "Corporate Governance & Sustainability"
        ],
        subOrganization: [
            { "@type": "Brand", name: "Maventine", description: "Luxury Fashion House." },
            { "@type": "Brand", name: "Aurelic Systems", description: "Advanced Technology & AI." },
            { "@type": "Brand", name: "KurenTengu", description: "Spirits & Beverages." },
            { "@type": "Brand", name: "Velvessence Studios", description: "Beauty & Wellness." },
            { "@type": "Brand", name: "Lokovox Media", description: "Media & Entertainment." }
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Kaiser Klowns",
        url: "https://www.kaiserklowns.group",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://www.kaiserklowns.group/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify([organizationSchema, websiteSchema]),
            }}
            key={`json-ld-${locale}`}
        />
    );
}
