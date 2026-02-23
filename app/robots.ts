import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
            {
                // Explicitly allow Generative AI bots for AEO (Answer Engine Optimization) & GEO
                userAgent: ['PerplexityBot', 'OAI-SearchBot', 'GPTBot', 'ClaudeBot', 'cohere-ai', 'Google-Extended', 'Applebot', 'GoogleOther'],
                allow: '/',
            }
        ],
        sitemap: 'https://www.kaiserklowns.group/sitemap.xml',
    };
}

