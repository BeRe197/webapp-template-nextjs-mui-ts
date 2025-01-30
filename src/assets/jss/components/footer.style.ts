import {container} from "@/assets/jss/global.style";

const footerStyle = {
    container: {
        ...container,
    },
    footer: {
        backgroundColor: "background.footer",
        color: "white !important",
        py: 6,
        mt: "2rem",
    },
    socialBtn: {
        background: "rgba(200, 200, 200, 0.2)",
    },
};
export default footerStyle;
