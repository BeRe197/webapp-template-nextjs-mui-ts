"use client";
// Widgets
import Text from "./text";
import Grid from "@/widgets/grid";
import TextAndImage from "@/widgets/textAndImage";

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

type Section = TextSection | GridSection | TextAndImageSection;

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
        default:
            return <></>;
    }
}

export default Widgets;
