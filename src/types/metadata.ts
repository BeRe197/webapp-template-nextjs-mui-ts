export type Metadata = {
    title: string;
    description: string;
    keywords?: string[];
    openGraph?: {
        title: string;
        description: string;
        images?: string[];
        url?: string;
        siteName?: string;
        type?: 'website' | 'article';
    };
    twitter?: {
        card: 'summary' | 'summary_large_image';
        site?: string;
        creator?: string;
        title?: string;
        description?: string;
        image?: string;
    };
    alternates?: {
        canonical?: string;
        languages?: Record<string, string>;
    };
    robots?: {
        index?: boolean;
        follow?: boolean;
        nocache?: boolean;
        googleBot?: {
            index?: boolean;
            follow?: boolean;
            noimageindex?: boolean;
        };
    };
    verification?: {
        google?: string;
    };
};
