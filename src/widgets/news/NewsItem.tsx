import GridItem from "@/components/grid/gridItem";
import {Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme} from "@mui/material";
import {useRouter} from "next/navigation";
// style
import widgetStyle from "@/assets/jss/components/widget.style";

const maxLengthDescription = 150;
const btnText = "Mehr erfahren";
const defaultDescription =
    'Du möchtest mehr erfahren? Dann klicke auf "' + btnText + '".';
const newsItemsTypename = "NewsItems";

interface NewsItem {
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
}

const NewsItem = ({newsItem}: { newsItem: NewsItem }) => {
    const router = useRouter();
    const theme = useTheme();
    const styles = widgetStyle(theme);

    return (
        <GridItem size={{xs: 10, sm: 6, md: 4, lg: 3}}>
            <Card sx={{display: "flex", flexDirection: "column", height: "100%", ...styles.focusAnimation}}>
                <CardMedia
                    component="img"
                    height="180"
                    image={newsItem.image.url}
                    alt={newsItem.title}
                    sx={{padding: "1rem", borderRadius: "24px"}}
                />
                <CardContent sx={{padding: "0 1rem", flexGrow: 1}}>
                    <Typography variant="caption" gutterBottom sx={{display: 'block'}}>
                        {new Intl.DateTimeFormat("de-DE", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(newsItem.updatedAt))}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {newsItem.title}
                    </Typography>
                    {newsItem.__typename === newsItemsTypename ? (
                        <Typography variant="body1"
                                    gutterBottom sx={{margin: 0}}>{newsItem.shortDescription}</Typography>
                    ) : (
                        <Typography variant="body1" gutterBottom sx={{margin: 0}}>
                            {newsItem.sections?.[0].text
                                ? newsItem.sections[0].text?.text
                                    .replace(/(\\n)+/g, " ")
                                    .split("", maxLengthDescription)
                                    .reduce(
                                        (o: string, c: string) =>
                                            o.length === maxLengthDescription - 1
                                                ? `${o}${c}...`
                                                : `${o}${c}`,
                                        ""
                                    )
                                : newsItem.sections?.[0].textimage
                                    ? newsItem.sections[0].textimage?.text
                                        .replace(/(\\n)+/g, " ")
                                        .split("", maxLengthDescription)
                                        .reduce(
                                            (o: string, c: string) =>
                                                o.length === maxLengthDescription - 1
                                                    ? `${o}${c}...`
                                                    : `${o}${c}`,
                                            ""
                                        )
                                    : defaultDescription}
                        </Typography>
                    )}
                </CardContent>
                <CardActions sx={{justifyContent: "center"}}>
                    <Button
                        color="primary"
                        onClick={() => {
                            router.push(
                                (newsItem.__typename === newsItemsTypename ? "/news/" : "/") +
                                newsItem.url
                            );
                        }}
                        fullWidth={true}
                    >
                        {btnText} &#8594;
                    </Button>
                </CardActions>
            </Card>
        </GridItem>
    );
}

export default NewsItem;
