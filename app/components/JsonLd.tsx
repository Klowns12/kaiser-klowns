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

    // WebPage schema
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Kaiser Klowns — The Creative Empire",
        url: "https://www.kaiserklowns.group",
        description: "Kaiser Klowns is a premier luxury creative conglomerate managing five distinct Houses across fashion, technology, spirits, beauty, and media.",
        isPartOf: { "@type": "WebSite", url: "https://www.kaiserklowns.group" },
        about: { "@id": "https://www.wikidata.org/wiki/Q138424910" },
        inLanguage: locale || "en"
    };

    // BreadcrumbList schema for homepage
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kaiserklowns.group" },
            { "@type": "ListItem", position: 2, name: "Houses", item: "https://www.kaiserklowns.group/houses" },
            { "@type": "ListItem", position: 3, name: "Group", item: "https://www.kaiserklowns.group/group" },
            { "@type": "ListItem", position: 4, name: "News", item: "https://www.kaiserklowns.group/news" },
            { "@type": "ListItem", position: 5, name: "Contact", item: "https://www.kaiserklowns.group/contact" }
        ]
    };

    // ImageObject schema for logo
    const imageObjectSchema = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        contentUrl: "https://www.kaiserklowns.group/logo/KK.png",
        name: "Kaiser Klowns Logo",
        description: "Official logo of Kaiser Klowns Group — a luxury creative conglomerate",
        width: "512",
        height: "512",
        representativeOfPage: true
    };

    // LocalBusiness schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Kaiser Klowns Group",
        image: "https://www.kaiserklowns.group/logo/KK.png",
        url: "https://www.kaiserklowns.group",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bangkok",
            addressCountry: "TH"
        },
        priceRange: "$$$",
        openingHours: "Mo-Fr 09:00-18:00"
    };

    // FAQPage schema — common questions about Kaiser Klowns
    const faqPageSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is Kaiser Klowns?",
                acceptedAnswer: { "@type": "Answer", text: "Kaiser Klowns is a luxury creative conglomerate founded in September 2025, managing five distinct Houses: Maventine (Fashion), Aurelic Systems (AI & Technology), KurenTengu (Spirits & Beverages), Velvessence Studios (Beauty & Wellness), and Lokovox Media (Media & Entertainment)." }
            },
            {
                "@type": "Question",
                name: "Where is Kaiser Klowns headquartered?",
                acceptedAnswer: { "@type": "Answer", text: "Kaiser Klowns Group is headquartered in Bangkok, Thailand, with operations serving clients worldwide." }
            },
            {
                "@type": "Question",
                name: "What services does Aurelic Systems provide?",
                acceptedAnswer: { "@type": "Answer", text: "Aurelic Systems specializes in advanced technology and AI, providing enterprise automation and productivity software including the Arkai Work Assistant platform." }
            }
        ]
    };

    // Article schema — latest featured content
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Kaiser Klowns — Bridging Heritage and Innovation",
        description: "Five houses. One vision. Fashion, technology, spirits, beauty, and media — bound by an uncompromising commitment to excellence.",
        image: "https://www.kaiserklowns.group/logo/KK.png",
        author: { "@type": "Organization", name: "Kaiser Klowns" },
        publisher: {
            "@type": "Organization",
            name: "Kaiser Klowns",
            logo: { "@type": "ImageObject", url: "https://www.kaiserklowns.group/logo/KK.png" }
        },
        datePublished: "2025-09-01",
        dateModified: new Date().toISOString().split("T")[0],
        mainEntityOfPage: "https://www.kaiserklowns.group"
    };

    // Product schema — representing the Houses as offerings
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Arkai Work Assistant",
        description: "AI-powered enterprise productivity platform by Aurelic Systems, a Kaiser Klowns House.",
        brand: { "@type": "Brand", name: "Aurelic Systems" },
        url: "https://www.kaiserklowns.group/houses/aurelic-systems",
        image: "https://www.kaiserklowns.group/logo/KK.png",
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: "https://www.kaiserklowns.group/houses/aurelic-systems",
            priceCurrency: "USD",
            price: "0",
            description: "Contact for enterprise pricing"
        }
    };

    // CreativeWorkSeries — representing the Houses portfolio
    const creativeWorkSeriesSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWorkSeries",
        name: "Kaiser Klowns Houses",
        description: "A portfolio of five distinct Houses under the Kaiser Klowns creative conglomerate, spanning fashion, technology, spirits, beauty, and media.",
        url: "https://www.kaiserklowns.group/houses",
        publisher: { "@type": "Organization", name: "Kaiser Klowns" }
    };

    // HowTo schema — explaining how to partner with Kaiser Klowns
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Partner with Kaiser Klowns",
        description: "Step-by-step guide on establishing a B2B partnership or enterprise AI integration with Kaiser Klowns Group.",
        step: [
            {
                "@type": "HowToStep",
                name: "Initial Contact",
                text: "Reach out via our official contact form or email at contact@kaiserklowns.group."
            },
            {
                "@type": "HowToStep",
                name: "Consultation",
                text: "Our enterprise team will schedule a consultation to understand your requirements."
            },
            {
                "@type": "HowToStep",
                name: "Proposal & Integration",
                text: "We will presenting a tailored partnership proposal or technical integration plan."
            }
        ]
    };

    // Review & AggregateRating schema
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Arkai Work Assistant",
        image: "https://www.kaiserklowns.group/logo/KK.png",
        description: "AI-powered enterprise productivity platform by Aurelic Systems.",
        brand: { "@type": "Brand", name: "Aurelic Systems" },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "85"
        },
        review: {
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5"
            },
            author: {
                "@type": "Person",
                name: "Enterprise Tech Review"
            },
            reviewBody: "A transformative AI platform that seamlessly integrates into enterprise workflows."
        }
    };

    // NewsArticle schema
    const newsArticleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: "Kaiser Klowns Announces Formula K Partnership",
        image: ["https://www.kaiserklowns.group/logo/KK.png"],
        datePublished: "2025-09-15T08:00:00+08:00",
        dateModified: "2025-09-15T09:20:00+08:00",
        author: [{
            "@type": "Organization",
            name: "Kaiser Klowns Press Office",
            url: "https://www.kaiserklowns.group/press"
        }]
    };

    // BlogPosting schema
    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "The Future of Luxury and AI Integration",
        image: "https://www.kaiserklowns.group/logo/KK.png",
        editor: "Kaiser Klowns Insights",
        keywords: "luxury, AI, enterprise, innovation",
        url: "https://www.kaiserklowns.group/news",
        datePublished: "2025-10-01",
        dateCreated: "2025-10-01",
        dateModified: "2025-10-01",
        description: "Exploring how artificial intelligence is reshaping the landscape of luxury brand management.",
        author: {
            "@type": "Organization",
            name: "Kaiser Klowns"
        }
    };

    // QAPage schema
    const qaPageSchema = {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
            "@type": "Question",
            name: "What industries does Kaiser Klowns operate in?",
            text: "Does the conglomerate focus only on fashion?",
            answerCount: 1,
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaiser Klowns operates across 5 distinct industries through its Houses: Fashion (Maventine), Technology & AI (Aurelic Systems), Spirits (KurenTengu), Beauty (Velvessence Studios), and Media (Lokovox Media).",
                upvoteCount: 15,
                url: "https://www.kaiserklowns.group/houses"
            }
        }
    };

    // VideoObject schema
    const videoObjectSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Kaiser Klowns Brand Manifesto",
        description: "The official brand manifesto and vision of Kaiser Klowns Group.",
        thumbnailUrl: "https://www.kaiserklowns.group/logo/KK.png",
        uploadDate: "2025-09-01T08:00:00+08:00",
        duration: "PT2M30S",
        contentUrl: "https://www.kaiserklowns.group",
        embedUrl: "https://www.kaiserklowns.group"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify([
                    organizationSchema,
                    websiteSchema,
                    webPageSchema,
                    breadcrumbSchema,
                    imageObjectSchema,
                    localBusinessSchema,
                    faqPageSchema,
                    articleSchema,
                    productSchema,
                    creativeWorkSeriesSchema,
                    howToSchema,
                    reviewSchema,
                    newsArticleSchema,
                    blogPostingSchema,
                    qaPageSchema,
                    videoObjectSchema
                ]),
            }}
            key={`json-ld-${locale}`}
        />
    );
}

