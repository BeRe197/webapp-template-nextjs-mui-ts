import DOMPurify from "dompurify";
import GridItem from "@/components/grid/gridItem";
import useEmailScript from "@/components/hooks/useEmailScript";
import {
    addIDsToHeader,
    removeSpecialCharacters,
    replaceEmailWidthFunction,
    replaceWhitespaceByHyphen
} from "@/components/utils/utils";
import {Typography, Box} from "@mui/material";
//style
import widgetStyle from "@/assets/jss/components/widget.style";

interface Props {
    name: string;
    text: string;
    emphasized?: boolean;
}

const Text = ({name, text, emphasized = false}: Props) => {
    useEmailScript();

    return (
        <GridItem size={{xs: 12, sm: 12, md: 12}} sx={widgetStyle.item}>
            <Box sx={emphasized ? {textAlign: "center", maxWidth: "600px", margin: "0 auto"} : {}}>
                <Typography
                    variant="h2"
                    component="h1"
                    id={replaceWhitespaceByHyphen(removeSpecialCharacters(name))}
                    className={"title"}
                >
                    {name}
                </Typography>
                <Box component={"div"}
                     sx={emphasized ? {fontSize: "1.5rem", lineHeight: "3rem", hyphens: "none"} : {}}
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
                />
            </Box>
        </GridItem>
    );
}

export default Text;
