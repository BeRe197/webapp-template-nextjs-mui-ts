import GridItem from "@/components/grid/gridItem";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

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

    return (
        <GridItem size={{xs: 10, sm: 6, md: 5, lg: 4}} sx={{display: "flex", flexDirection: "row"}}>
            <Card>
                <CardMedia
                    component="img"
                    height="180"
                    image={newsItem.image.url}
                    alt={newsItem.title}
                />
                <CardContent sx={{display: "flex", flexDirection: "column"}}>
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
                        <Typography variant="body1" gutterBottom
                                    sx={{flexGrow: 1}}>{newsItem.shortDescription}</Typography>
                    ) : (
                        <Typography variant="body1" gutterBottom>
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
                    >
                        {btnText} &#8594;
                    </Button>
                </CardActions>
            </Card>
        </GridItem>
    );
}

export default NewsItem;
