import HeroSection from "@/components/hero/heroSection";
import GridContainer from "@/components/grid/gridContainer";
import Widgets from "@/widgets";

const intros = {
    heroPages: [
        {
            title: "Welcome to Our Platform",
            subtitle: "Discover amazing features that will transform your experience",
            buttonText: "Get Started",
            buttonLink: "/get-started",
            backgroundImage: "https://cdn.pixabay.com/photo/2024/12/20/11/53/architect-9280053_1280.jpg",
        },
        {
            title: "Powerful Solutions",
            subtitle: "Built for modern businesses and teams",
            buttonText: "Learn More",
            buttonLink: "/solutions",
            backgroundImage: "https://cdn.pixabay.com/photo/2017/09/09/14/41/surfer-2732200_1280.jpg",
        },
        {
            title: "Join Our Community",
            subtitle: "Connect with like-minded professionals",
            buttonText: "Join Now",
            buttonLink: "/join",
            backgroundImage: "https://cdn.pixabay.com/photo/2022/10/26/14/16/harbour-7548583_1280.jpg",
        },
    ],
    sections: [{
        id: "1",
        __typename: "Text",
        name: "Explore Boundless Horizons",
        text: {
            html: "<p>Your Gateway to <b>Innovation</b>, <b>Inspiration</b>, and <b>Connection—Discover</b> ideas that transform, stories that inspire, and solutions that bring the world <b>closer together</b>.</p>",
        },
        emphasized: true,
    }, {
        id: "2",
        __typename: "Grid",
        items: [{
            id: "1",
            title: "Discover",
            subtitle: "Explore the latest trends and insights",
            image: "discover_tune",
            icon: true
        }, {
            id: "2",
            title: "Engage",
            subtitle: "Connect with a global community",
            image: "code_blocks",
            icon: true
        }, {
            id: "3",
            title: "Transform",
            subtitle: "Unlock the power of innovation",
            image: "transform",
            icon: true
        }]
    }, {
        id: "3",
        __typename: "TextAndImage",
        name: "Join Our Community",
        text: {
            html: "<p>Connect with like-minded professionals and <b>explore</b> ideas that <b>transform</b> the world.</p>",
        },
        image: {
            url: "https://cdn.pixabay.com/photo/2024/09/20/01/37/dubai-creek-9060098_1280.jpg",
            fileName: "dubai-creek-9060098_1280.jpg"
        },
        button: {
            text: "Join Now",
            link: "/join"
        },
        ltr: false,
    }, {
        id: "4",
        __typename: "News",
        name: "Latest News",
        pageInfo: {
            pageSize: 3
        },
        items: [{
            id: "1",
            title: "Discover the Future",
            subtitle: "Explore the latest trends and insights",
            image: {
                url: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg"
            },
            updatedAt: "2022-01-01T00:00:00Z",
            __typename: "NewsItems",
            shortDescription: "Explore the latest trends and insights that are shaping the future of business and technology.",
            sections: [{
                text: {
                    text: "Explore the latest trends and insights that are shaping the future of business and technology."
                }
            }],
            url: "/news/1"
        }, {
            id: "2",
            title: "Engage with the Community",
            subtitle: "Connect with a global community",
            image: {
                url: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg"
            },
            updatedAt: "2022-01-01T00:00:00Z",
            __typename: "NewsItems",
            shortDescription: "Connect with a global community and engage with like-minded professionals.",
            sections: [{
                text: {
                    text: "Connect with a global community and engage with like-minded professionals."
                }
            }],
            url: "/news/2"
        }, {
            id: "3",
            title: "Transform Your Business",
            subtitle: "Unlock the power of innovation",
            image: {
                url: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg"
            },
            updatedAt: "2022-01-01T00:00:00Z",
            __typename: "NewsItems",
            shortDescription: "Unlock the power of innovation and transform your business with the latest insights and trends. Unlock the power of innovation.",
            sections: [{
                text: {
                    text: "Unlock the power of innovation and transform your business with the latest insights and trends."
                }
            }],
            url: "/news/3"
        }]
    }, {
        id: "5",
        __typename: "Timeline",
        name: "Our Story",
        items: [{
            id: "1",
            title: "Surfing",
            date: "2020-01-01T00:00:00Z",
        }, {
            id: "2",
            title: "Hiking",
            date: "2021-01-02T00:00:00Z",
        }, {
            id: "3",
            title: "Camping",
            date: "2022-01-03T00:00:00Z",
        }, {
            id: "4",
            title: "Skiing",
            date: "2023-02-05T00:00:00Z",
        }, {
            id: "5",
            title: "Snowboarding",
            date: "2024-06-05T00:00:00Z",
        }, {
            id: "6",
            title: "Mountain Biking",
            date: "2025-07-03T00:00:00Z",
        }],
        button: {
            text: "Learn More",
            url: "/our-story"
        }
    }]
};

export default function Home() {
    return (
        <>
            <HeroSection heroPages={intros.heroPages}/>
            <main>
                <GridContainer>
                    {intros.sections.map((section) => {
                        // @ts-ignore
                        return <Widgets key={section.id} section={section}/>;
                    })}
                </GridContainer>
            </main>
        </>
    );
}
