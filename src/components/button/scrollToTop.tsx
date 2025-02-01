"use client";
import {MouseEvent, ReactElement} from 'react';
import {motion} from "framer-motion";
import {useTheme, Fade, Fab, Box, useScrollTrigger} from "@mui/material";
//style
import {focusAnimation} from "@/assets/jss/global.style";
//icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
    children?: ReactElement<unknown>;
}

function ScrollTop(props: Props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{position: 'fixed', bottom: 16, right: 16}}
            >
                <Box component={motion.div}
                     initial={{opacity: 0, y: 50}}
                     animate={{opacity: trigger ? 1 : 0, y: trigger ? 0 : 50}}
                     transition={{duration: 1, ease: "easeOut"}}
                >
                    {children}
                </Box>
            </Box>
        </Fade>
    );
}

export default function BackToTop(props: Props) {
    const theme = useTheme();

    return (
        <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top"
                 sx={{
                     ...focusAnimation,
                     backgroundColor: theme.palette.background.paper,
                 }}>
                <KeyboardArrowUpIcon color={"primary"}/>
            </Fab>
        </ScrollTop>
    );
}
