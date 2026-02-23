"use client";

import { useTranslation } from "../i18n/TranslationContext";

export default function JsonLd() {
    const { dict, locale } = useTranslation();

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.wikidata.org/wiki/Q138424910",
        name: "Kaiser Klowns",
        legalName: "Kaiser Klowns Group",
        url: "https://www.kaiserklowns.group",
        logo: "https://www.kaiserklowns.group/logo/KK.png",
        image: "https://www.kaiserklowns.group/logo/KK.png",
        description: dict.meta?.description || "A luxury creative conglomerate dedicated to identity, heritage, and creative excellence.",
        foundingDate: "2025-09",
        founder: {
            "@type": "Person",
            name: "Kaiser Klowns Founder"
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bangkok",
            addressCountry: "TH"
        },
        areaServed: "Worldwide",
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "50+"
        },
        naics: "551112",
        sameAs: [
            "https://www.wikidata.org/wiki/Q138424910",
            "https://twitter.com/KaiserKlowns",
            "https://linkedin.com/company/kaiserklowns",
            "https://instagram.com/kaiserklowns"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: "contact@kaiserklowns.group",
            contactType: "customer service",
            areaServed: "Worldwide",
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
            { "@type": "Organization", name: "Maventine", description: "Luxury Fashion House specializing in high-end fashion and street-tailoring.", url: "https://www.kaiserklowns.group/houses/maventine" },
            { "@type": "Organization", name: "Aurelic Systems", description: "Advanced Technology & AI company building enterprise automation and productivity software.", url: "https://www.kaiserklowns.group/houses/aurelic-systems" },
            { "@type": "Organization", name: "KurenTengu", description: "Premium Spirits & Beverages brand crafting artisanal drink experiences.", url: "https://www.kaiserklowns.group/houses/kurentengu" },
            { "@type": "Organization", name: "Velvessence Studios", description: "Beauty & Wellness studio creating premium self-care innovations.", url: "https://www.kaiserklowns.group/houses/velvessence-studios" },
            { "@type": "Organization", name: "Lokovox Media", description: "Media & Entertainment company producing creative content and storytelling.", url: "https://www.kaiserklowns.group/houses/lokovox-media" }
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
