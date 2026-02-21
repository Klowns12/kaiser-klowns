import { MetadataRoute } from 'next';

const baseUrl = 'https://www.kaiserklowns.group';


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
        '/news',
        '/news/formula-k-partnership',
        '/news/aurelic-platform',
        '/news/maventine-tokyo',
        '/news/arkai-work-assistant',
        '/news/arkai-early-access',
        '/houses/maventine',
        '/houses/aurelic-systems',
        '/houses/kurentengu',
        '/houses/velvessence-studios',
        '/houses/lokovox-media'
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    routes.forEach((route) => {
        sitemapEntries.push({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.8,
        });
    });

    return sitemapEntries;
}
