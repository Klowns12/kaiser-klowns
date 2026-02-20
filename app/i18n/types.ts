export type Locale = 'en' | 'th' | 'zh' | 'ja' | 'fr' | 'de' | 'ko' | 'es';

export const locales: Locale[] = ['en', 'th', 'zh', 'ja', 'fr', 'de', 'ko', 'es'];
export const defaultLocale: Locale = 'en';

export interface Dictionary {
    meta: {
        title: string;
        description: string;
        keywords: string;
    };
    nav: {
        group: string;
        houses: string;
        commitments: string;
        careers: string;
        investors: string;
        press: string;
        partners: string;
        contact: string;
        search: string;
        popularSearches: string;
        noResults: string;
        history: string;
        mission: string;
        governance: string;
        keyFigures: string;
        allHouses: string;
        sustainability: string;
        socialResponsibility: string;
        environment: string;
        joinUs: string;
        openPositions: string;
        comingSoon: string;
        viewAll: string;
    };
    hero: {
        tagline: string;
        cta: string;
        scroll: string;
    };
    houses: {
        sectionLabel: string;
        sectionTitle: string;
        explore: string;
        aurelic: { tagline: string; description: string };
        lokovox: { tagline: string; description: string };
        maventine: { tagline: string; description: string };
        velvessence: { tagline: string; description: string };
        kurentengu: { tagline: string; description: string };
    };
    houseDetails: {
        about: string;
        highlightsLabel: string;
        foundedLabel: string;
        headquartersLabel: string;
        employeesLabel: string;
        sectorLabel: string;
        backToAll: string;
        maventine: {
            name: string;
            sector: string;
            tagline: string;
            description: string;
            founded: string;
            headquarters: string;
            employees: string;
            highlights: string[];
        };
        aurelic: {
            name: string;
            sector: string;
            tagline: string;
            description: string;
            founded: string;
            headquarters: string;
            employees: string;
            highlights: string[];
        };
        kurentengu: {
            name: string;
            sector: string;
            tagline: string;
            description: string;
            founded: string;
            headquarters: string;
            employees: string;
            highlights: string[];
        };
        velvessence: {
            name: string;
            sector: string;
            tagline: string;
            description: string;
            founded: string;
            headquarters: string;
            employees: string;
            highlights: string[];
        };
        lokovox: {
            name: string;
            sector: string;
            tagline: string;
            description: string;
            founded: string;
            headquarters: string;
            employees: string;
            highlights: string[];
        };
    };
    philosophy: {
        label: string;
        quote1: string;
        quote2: string;
        attribution: string;
        body: string;
    };
    news: {
        label: string;
        title: string;
        seeAll: string;
        items: Array<{ date: string; title: string; excerpt: string }>;
    };
    footer: {
        description: string;
        groupLabel: string;
        housesLabel: string;
        connectLabel: string;
        rights: string;
    };
    common: {
        home: string;
        explore: string;
        comingSoon: string;
        readMore: string;
        backTo: string;
        details: string;
    };
    pages: {
        group: {
            title: string;
            subtitle: string;
            cards: Array<{ title: string; description: string; cta: string }>;
        };
        history: {
            title: string;
            subtitle: string;
            events: Array<{ year: string; title: string; description: string }>;
        };
        mission: {
            title: string;
            subtitle: string;
            pillars: Array<{ title: string; description: string }>;
        };
        governance: {
            title: string;
            subtitle: string;
            leaders: Array<{ name: string; role: string }>;
            principlesTitle: string;
            principles: Array<{ title: string; description: string }>;
        };
        keyFigures: {
            title: string;
            subtitle: string;
            figures: Array<{ value: string; label: string; description: string }>;
        };
        craftsmanship: {
            title: string;
            subtitle: string;
            principles: Array<{ title: string; description: string }>;
            paragraphs: string[];
        };
        housesPage: {
            title: string;
            subtitle: string;
        };
        investors: {
            title: string;
            subtitle: string;
            highlights: Array<{ value: string; label: string; change: string }>;
            reportsTitle: string;
            reports: Array<{ title: string; date: string }>;
        };
        careers: {
            title: string;
            subtitle: string;
            valuesTitle: string;
            values: Array<{ title: string; description: string }>;
            positionsTitle: string;
            positions: Array<{ title: string; location: string; type: string }>;
        };
        press: {
            title: string;
            subtitle: string;
            releases: Array<{ date: string; title: string; excerpt: string }>;
        };
        contact: {
            title: string;
            subtitle: string;
            formLabels: { name: string; email: string; company: string; subject: string; message: string; send: string };
            officesTitle: string;
            offices: Array<{ city: string; address: string; phone: string }>;
        };
        commitments: {
            title: string;
            subtitle: string;
            sections: Array<{ title: string; description: string; stats: Array<{ value: string; label: string }> }>;
        };
        sustainability: { title: string; subtitle: string; stats: Array<{ value: string; label: string; desc: string }>; paragraphs: string[] };
        social: { title: string; subtitle: string; stats: Array<{ value: string; label: string; desc: string }>; paragraphs: string[] };
        environment: { title: string; subtitle: string; stats: Array<{ value: string; label: string; desc: string }>; paragraphs: string[] };
        partners: {
            title: string;
            subtitle: string;
            items: Array<{ name: string; type: string; description: string }>;
        };
        formulaK: {
            title: string;
            subtitle: string;
            paragraphs: string[];
            backLabel: string;
        };
        newsPage: {
            title: string;
            subtitle: string;
        };
        maventineTokyo: {
            title: string;
            subtitle: string;
            paragraphs: string[];
            backLabel: string;
        };
        aurelicPlatform: {
            title: string;
            subtitle: string;
            paragraphs: string[];
            backLabel: string;
        };
    };
}
