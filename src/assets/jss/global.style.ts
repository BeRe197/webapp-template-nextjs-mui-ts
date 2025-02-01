const containerFluid = {
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
};
const container = {
    ...containerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px",
    },
    "@media (max-width: 576px)": {
        paddingRight: "15px",
        paddingLeft: "15px",
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px",
    },
};
const btnAnimation = {
    width: 'fit-content',
    animation: 'fadeIn 0.5s ease-in 0.4s',
    transition: "all .5s ease-in-out",
    "&:hover": {
        /*  Making button bigger on hover  */
        transform: "scale(1.08) perspective(1px)"
    },
    "&:active": {
        transform: "translate(0px, 5px)",
        WebkitTransform: "translate(0px, 5px)",
        boxShadow: "0px 1px 0px 0px"
    }
}

export {
    container,
    btnAnimation,
};
