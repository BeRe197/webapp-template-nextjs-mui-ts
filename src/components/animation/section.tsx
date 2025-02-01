"use client";
import {ReactNode} from "react";
import {motion} from "framer-motion";

interface props {
    children: ReactNode,
    style?: object,
    once?: boolean
}

const Section = ({children, style, once = false}: props) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{once: once}}
            className="my-20 p-10 bg-gray-100 rounded-lg"
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default Section;
