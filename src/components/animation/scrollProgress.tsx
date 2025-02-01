"use client";
import {motion, useScroll} from "framer-motion";
import {useTheme, Box} from "@mui/material";

const ScrollProgress = () => {
    const {scrollYProgress} = useScroll();
    const theme = useTheme();

    return (
        <Box component={motion.div}
             id="scroll-indicator"
             style={{
                 scaleX: scrollYProgress,
                 position: "fixed",
                 top: 0,
                 left: 0,
                 right: 0,
                 height: 2,
                 originX: 0,
                 backgroundColor: theme.palette.primary.main,
                 zIndex: 99999,
                 borderRadius: "20rem"
             }}
        />
    );
};

export default ScrollProgress;
