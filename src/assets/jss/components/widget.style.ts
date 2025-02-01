import {container, btnAnimation, focusAnimation} from "@/assets/jss/global.style";
import {PaletteOptions} from "@mui/material/styles";

const widgetStyle = (theme: { palette: PaletteOptions }) => ({
    btnAnimation: {
        ...btnAnimation,
    },
    focusAnimation: {
        ...focusAnimation,
    },
    item: {
        pt: "2rem",
        pb: "2rem",
        "&:nth-child(even)": {
            background: theme.palette.background?.paper,
        },
        "& > div": {
            ...container
        },
    },
});
export default widgetStyle;
