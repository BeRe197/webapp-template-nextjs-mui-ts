import {MetadataRoute} from 'next';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Fetch your dynamic routes here
    //TODO: Change this

    return [
        {
            url: 'https://yoursite.com', //TODO: Change this
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://yoursite.com/about', //TODO: Change this
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
