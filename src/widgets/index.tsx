"use client";
// Widgets
import Text from "@/widgets/text";
import Grid from "@/widgets/grid";
import TextAndImage from "@/widgets/textAndImage";
import News from "@/widgets/news";

interface TextSection {
    __typename: "Text";
    id: string;
    name: string;
    text: { html: string };
    emphasized?: boolean;
}

interface GridSection {
    __typename: "Grid";
    id: string;
    items: [{
        id: string;
        title: string;
        subtitle: string;
        image: string;
    }];
}

interface TextAndImageSection {
    __typename: "TextAndImage";
    id: string;
    name: string;
    text: { html: string };
    image: {
        url: string;
        fileName: string;
    };
    button?: {
        text: string;
        link: string;
    };
    ltr?: boolean;
}

interface NewsSection {
    __typename: "News";
    id: string;
    name: string;
    items: [{
        id: string;
        title: string;
        subtitle: string;
        image: {
            url: string;
        };
        updatedAt: string;
        __typename: string;
        shortDescription?: string;
        sections?: {
            text?: {
                text: string;
            };
            textimage?: {
                text: string;
            };
        }[];
        url: string;
    }];
    pageInfo: {
        pageSize: number;
    };
    iNewsPerPage?: number;
}

type Section = TextSection | GridSection | TextAndImageSection | NewsSection;

interface Props {
    section: Section;
}

const Widgets = ({section}: Props) => {
    switch (section.__typename) {
        case "Text":
            return <Text key={section.id} name={section.name} text={section.text.html}
                         emphasized={section.emphasized}/>;
        case "Grid":
            return <Grid key={section.id} items={section.items}/>;
        case "TextAndImage":
            return <TextAndImage key={section.id} name={section.name} text={section.text.html} image={section.image}
                                 button={section.button} ltr={section.ltr}/>;
        case "News":
            return <News key={section.id} name={section.name} items={section.items} pageInfo={section.pageInfo}
                         iNewsPerPage={section.iNewsPerPage}/>;
        default:
            return <></>;
    }
}

export default Widgets;
