import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';

const baseUrl = 'https://www.kaiserklowns.group';

function getAppRoutes(dir: string, baseRoute = ''): string[] {
    let routes: string[] = [];
    const absolutePath = path.join(process.cwd(), 'app', dir);
    if (!fs.existsSync(absolutePath)) return routes;

    const entries = fs.readdirSync(absolutePath, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isDirectory()) {
            if (entry.name.startsWith('(') || entry.name.startsWith('_') || entry.name.startsWith('[')) {
                continue;
            }
            const newBaseRoute = `${baseRoute}/${entry.name}`;
            
            // check if there is a page.tsx inside
            if (fs.existsSync(path.join(absolutePath, entry.name, 'page.tsx'))) {
                routes.push(newBaseRoute);
            }
            
            // recurse
            const childRoutes = getAppRoutes(path.join(dir, entry.name), newBaseRoute);
            routes.push(...childRoutes);
        }
    }
    return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
    // Top level page
    const allRoutes = [''];
    allRoutes.push(...getAppRoutes(''));

    const sitemapEntries: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    return sitemapEntries;
}
