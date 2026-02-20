const baseUrl = 'https://www.kaiserklowns.group';

interface BreadcrumbItem {
    name: string;
    href?: string;
}

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
    const allItems = [{ name: 'Home', href: '/' }, ...items];

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: allItems.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.name,
            item: item.href ? `${baseUrl}${item.href}` : undefined,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
