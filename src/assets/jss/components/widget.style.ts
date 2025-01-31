import {container, btnAnimation} from "@/assets/jss/global.style";

const widgetStyle = {
    btnAnimation: {
        ...btnAnimation,
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
