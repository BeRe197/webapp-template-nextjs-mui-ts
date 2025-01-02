const headerlinksStyle = {
    list: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        color: "inherit",
    },
    listItem: {
        float: "left",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        color: "inherit",
    },
    navLink: {
        padding: "0.9375rem",
        fontWeight: "400",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        color: "inherit",
        "&:hover,&:focus": {
            background: "rgba(200, 200, 200, 0.2)",
        },
    },
};
export default headerlinksStyle;
