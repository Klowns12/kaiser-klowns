import { MetadataRoute } from 'next';

const baseUrl = 'https://www.kaiserklowns.group';
const locales = ['en', 'th', 'zh', 'ja', 'fr', 'de', 'ko', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/group',
        '/houses',
        '/commitments',
        '/careers',
        '/investors',
        '/press',
        '/partners',
        '/contact',
        '/history',
        '/mission',
        '/governance',
        '/key-figures',
        '/sustainability',
        '/social-responsibility',
        '/environment',
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    routes.forEach((route) => {
        // Automatically generate language alternates for each route
        const alternates = locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${route}`;
            return acc;
        }, {} as Record<string, string>);

        sitemapEntries.push({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.8,
            alternates: {
                languages: alternates,
            }
        });
    });

    return sitemapEntries;
}
