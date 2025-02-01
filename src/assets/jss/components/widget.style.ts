import {container, btnAnimation, focusAnimation} from "@/assets/jss/global.style";

const widgetStyle = {
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
            background: "#EEEEEE",
        },
        "& > div": {
            ...container
        },
    },
};
export default widgetStyle;
