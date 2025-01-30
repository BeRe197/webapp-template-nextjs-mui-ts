import GridContainer from "@/components/grid/gridContainer";
import GridItem from "@/components/grid/gridItem";
import {
    removeSpecialCharacters,
    replaceWhitespaceByHyphen
} from "@/components/utils/utils";
import {Typography, Box, useTheme, Button} from "@mui/material";
import {default as MUITimeline} from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
//style
import widgetStyle from "@/assets/jss/components/widget.style";
//icon
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useMediaQuery} from "@mui/system";
import {useRouter} from "next/navigation";

interface Props {
    name: string;
    items: {
        id: string;
        title: string;
        date: string;
    }[];
    button?: {
        text: string;
        url: string;
    };
}

const Timeline = ({name, items, button}: Props) => {
    const theme = useTheme();
    const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
    const router = useRouter();

    const renderTimelineItems = (items: Props['items']) => (
        items.map((item, index, array) => (
            <TimelineItem key={item.id} sx={index !== array.length - 1 ? {} : {minHeight: 0}}>
                <TimelineOppositeContent>
                    {new Intl.DateTimeFormat("de-DE", {month: "long", day: "2-digit"}).format(new Date(item.date))}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    {index !== array.length - 1 &&
                        <TimelineConnector sx={{backgroundColor: theme.palette.primary.main}}/>}
                </TimelineSeparator>
                <TimelineContent>{item.title}</TimelineContent>
            </TimelineItem>
        ))
    );

    return (
        <GridItem size={{xs: 12, sm: 12, md: 12}} sx={widgetStyle.item}>
            <Box sx={{textAlign: "center"}}>
                <Typography
                    variant="h2"
                    component="h1"
                    id={replaceWhitespaceByHyphen(removeSpecialCharacters(name))}
                    className="title"
                >
                    {name}
                </Typography>
                <GridContainer columnSpacing={4}>
                    {smBreakpoint ? (
                        <>
                            <GridItem size={{xs: 12, sm: 6, md: 6}}>
                                <MUITimeline>
                                    {renderTimelineItems(items.slice(0, Math.ceil(items.length / 2)))}
                                </MUITimeline>
                            </GridItem>
                            <GridItem size={{xs: 12, sm: 6, md: 6}}>
                                <MUITimeline>
                                    {renderTimelineItems(items.slice(Math.ceil(items.length / 2)))}
                                </MUITimeline>
                            </GridItem>
                        </>
                    ) : (
                        <GridItem size={{xs: 12, sm: 6, md: 6}}>
                            <MUITimeline>
                                {renderTimelineItems(items)}
                            </MUITimeline>
                        </GridItem>
                    )}
                </GridContainer>
                <Button
                    color="primary"
                    variant="outlined"
                    endIcon={<KeyboardArrowRightIcon sx={{ml: "-4px"}}/>}
                    onClick={() => router.push(button?.url ?? "/")}
                >
                    {button?.text ?? "View all"}
                </Button>
            </Box>
        </GridItem>
    );
};

export default Timeline;
