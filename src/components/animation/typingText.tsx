import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Typography, Box} from "@mui/material";

const TypingText = ({words}: { words: string[] }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(words[index].slice(0, text.length + 1));
            if (text === words[index]) {
                setTimeout(() => {
                    setIndex((index + 1) % words.length);
                    setText("");
                }, 2000);
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [text, index, words]);

    return (
        <Box component={motion.div} animate={{y: [0, -2, 0]}}
             transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}>
            <Typography
                variant="h2"
                component="h1"
                color={"white"}
                sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    animation: 'fadeIn 0.5s ease-in',
                }}
            >
                {text} <span className="animate-pulse">|</span>
            </Typography>
        </Box>
    );
};

export default TypingText;
