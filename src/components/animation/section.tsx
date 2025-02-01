"use client";
import {ReactNode} from "react";
import {motion} from "framer-motion";
import Box from "@mui/material/Box";

interface props {
    children: ReactNode,
    style?: object,
    once?: boolean
}

const Section = ({children, style, once = false}: props) => {
    return (
        <Box component={motion.div}
             initial={{opacity: 0, y: 50}}
             whileInView={{opacity: 1, y: 0}}
             transition={{duration: 1, ease: "easeOut"}}
             viewport={{once: once}}
             style={style}
        >
            {children}
        </Box>
    );
};

export default Section;
