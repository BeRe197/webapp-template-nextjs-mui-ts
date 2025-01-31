import {Pagination, Typography, Box} from "@mui/material";
// components
import GridContainer from "@/components/grid/gridContainer";
import GridItem from "@/components/grid/gridItem";
import {removeSpecialCharacters, replaceWhitespaceByHyphen} from "@/components/utils/utils";
import NewsItem from "@/widgets/news/NewsItem";
// style
import widgetStyle from "@/assets/jss/components/widget.style";
import {ChangeEvent} from "react";

interface props {
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

const News = ({name, items, pageInfo, iNewsPerPage = 3}: props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        //TODO: Implement pagination
    };

    return (
        <GridItem size={{xs: 12, sm: 12, md: 12}} sx={widgetStyle.item}>
            <Box component={"div"} sx={{textAlign: "center"}}>
                <Typography
                    variant="h2"
                    component="h1"
                    id={replaceWhitespaceByHyphen(removeSpecialCharacters(name))}
                    className={"title"}
                    sx={{mb: 2}}
                >
                    {name}
                </Typography>
                <GridContainer
                    rowSpacing={4}
                    columnSpacing={4}
                    justifyContent="center"
                >
                    {items.map((item) => (
                        <NewsItem key={item.id} newsItem={item}/>
                    ))}
                    <GridItem size={{xs: 12, sm: 12, md: 12}}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Pagination
                                count={Math.ceil(
                                    pageInfo.pageSize / iNewsPerPage
                                )}
                                color="primary"
                                onChange={handleChange}
                            />
                        </Box>
                    </GridItem>
                </GridContainer>
            </Box>
        </GridItem>
    );
}

export default News;
