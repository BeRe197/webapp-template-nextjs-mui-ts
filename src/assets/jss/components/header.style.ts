import {container} from "@/assets/jss/global.style";

const headerStyle = {
    appBar: {
        display: "flex",
        border: "0",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
    },
    flex: {
        flex: 1,
    },
    container: {
        ...container,
    },
};

export default headerStyle;
