import {Metadata} from '@/types/metadata';
import Head from "next/head";

const generateMetadata = ({
                              title,
                              description,
                              keywords = [],
                              openGraph,
                              twitter,
                              alternates,
                              robots,
                              verification,
                          }: Metadata): Metadata => {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title: openGraph?.title || title,
            description: openGraph?.description || description,
            images: openGraph?.images || [],
            url: openGraph?.url,
            siteName: openGraph?.siteName || 'Your Site Name', //TODO: Change this
            type: openGraph?.type || 'website',
        },
        twitter: {
            card: twitter?.card || 'summary',
            site: twitter?.site,
            creator: twitter?.creator,
            title: twitter?.title || title,
            description: twitter?.description || description,
            image: twitter?.image,
        },
        alternates: {
            canonical: alternates?.canonical,
            languages: alternates?.languages,
        },
        robots: {
            index: robots?.index ?? true,
            follow: robots?.follow ?? true,
            nocache: robots?.nocache ?? false,
            googleBot: {
                index: robots?.googleBot?.index ?? true,
                follow: robots?.googleBot?.follow ?? true,
                noimageindex: robots?.googleBot?.noimageindex ?? false,
            },
        },
        verification: {
            google: verification?.google,
            // Add other search engine verification codes as needed
        }
    };
}

interface SEOProps {
    title: string
    description?: string
    canonical?: string
    jsonLd?: never
}

const SEOHead = ({
                     canonical,
                     jsonLd
                 }: SEOProps) => {
    return (
        <Head>
            {canonical && <link rel="canonical" href={canonical}/>}
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd)
                    }}
                />
            )}
        </Head>
    )
}

const createOrganizationJsonLd = () => {
    //TODO: Change this
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Your Company Name',
        url: 'https://www.yourwebsite.com',
        logo: 'https://www.yourwebsite.com/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-555-5555',
            contactType: 'Customer service'
        },
        sameAs: [
            'https://www.facebook.com/yourpage',
            'https://www.twitter.com/yourhandle',
            'https://www.linkedin.com/company/yourcompany'
        ]
    }
}

export {generateMetadata, SEOHead, createOrganizationJsonLd};
