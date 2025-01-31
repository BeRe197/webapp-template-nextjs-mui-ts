import Image from "next/image";
import DOMPurify from "dompurify";
import {Typography, Box, Button} from "@mui/material";
// components
import GridContainer from "@/components/grid/gridContainer";
import GridItem from "@/components/grid/gridItem";
import useEmailScript from "@/components/hooks/useEmailScript";
import {
    addIDsToHeader,
    removeSpecialCharacters,
    replaceEmailWidthFunction,
    replaceWhitespaceByHyphen
} from "@/components/utils/utils";
import Section from "@/components/animation/section";
// style
import widgetStyle from "@/assets/jss/components/widget.style";

interface props {
    name: string;
    text: string;
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

const TextAndImage = ({name, text, image, button, ltr = true}: props) => {
    useEmailScript();

    return (
        <GridItem size={{xs: 12, sm: 12, md: 12}} sx={widgetStyle.item}>
            <Section>
                <GridContainer spacing={3} sx={ltr ? {flexDirection: "row"} : {flexDirection: "row-reverse"}}>
                    <GridItem size={{xs: 12, sm: 12, md: 6}}>
                        <Typography
                            variant="h2"
                            component="h1"
                            id={replaceWhitespaceByHyphen(removeSpecialCharacters(name))}
                            className={"title"}
                        >
                            {name}
                        </Typography>
                        <Box component={"div"}
                             dangerouslySetInnerHTML={{
                                 __html: addIDsToHeader(
                                     replaceEmailWidthFunction(
                                         DOMPurify.sanitize(text, {
                                             ADD_TAGS: ["iframe"],
                                             ADD_ATTR: [
                                                 "allow",
                                                 "allowfullscreen",
                                                 "frameborder",
                                                 "scrolling",
                                             ],
                                         })
                                     )
                                 ),
                             }}
                             style={{textAlign: "left"}}
                        />
                        {button ?
                            <Button
                                variant="contained"
                                size="large"
                                href={button.link}
                                sx={widgetStyle.btnAnimation}
                            >
                                {button.text}
                            </Button>
                            : null
                        }
                    </GridItem>
                    <GridItem size={{xs: 12, sm: 12, md: 6}}>
                        <Box sx={{position: "relative", width: "100%", paddingBottom: "56.25%"}}>
                            <Image src={image.url} alt={image.fileName} loading="lazy"
                                   style={{maxWidth: "100%"}} layout={"fill"} objectFit={"cover"}/>
                        </Box>
                    </GridItem>
                </GridContainer>
            </Section>
        </GridItem>
    );
};

export default TextAndImage;
