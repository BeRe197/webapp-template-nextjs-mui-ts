import Image from "next/image";
import {Typography, Box} from "@mui/material";
//components
import GridItem from "@/components/grid/gridItem";
import GridContainer from "@/components/grid/gridContainer";
//style
import widgetStyle from "@/assets/jss/components/widget.style";

interface Props {
    items: [{
        id: string;
        title: string;
        subtitle: string;
        image: string;
    }],
    columnSpacing?: number;
}

const Grid = ({items, columnSpacing = 15}: Props) => {
    return (
        <GridItem size={{xs: 12, sm: 12, md: 12}} sx={widgetStyle.item}>
            <GridContainer columnSpacing={columnSpacing}>
                {items.map((item) => (
                    <GridItem key={item.id} size={{xs: 12, sm: 6, md: 4}}>
                        <Box sx={{textAlign: "center", position: "relative"}}>
                            <Box sx={{position: "relative", width: "100%", paddingBottom: "56.25%"}}>
                                <Image src={item.image} alt={item.title} loading="lazy"
                                       style={{maxWidth: "100%"}} layout={"fill"} objectFit={"cover"}/>
                            </Box>
                            <Typography variant="h4" component="h2" className={"title"} sx={{mt: 1}}>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {item.subtitle}
                            </Typography>
                        </Box>
                    </GridItem>
                ))}
            </GridContainer>
        </GridItem>
    );
}

export default Grid;
