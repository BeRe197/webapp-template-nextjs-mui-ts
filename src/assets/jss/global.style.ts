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

const focusAnimation = {
    transition: "all .3s ease-in-out",
    "&:hover": {
        transform: "scale(1.08) perspective(1px)"
    }
};

const btnAnimation = {
    width: 'fit-content',
    animation: 'fadeIn 0.5s ease-in 0.4s',
    "&:active": {
        transform: "translate(0px, 5px)",
        WebkitTransform: "translate(0px, 5px)",
    },
    ...focusAnimation
};

export {
    container,
    btnAnimation,
    focusAnimation,
};
