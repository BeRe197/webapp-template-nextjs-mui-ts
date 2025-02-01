"use client";
import {MouseEvent} from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
//style
import {focusAnimation} from "@/assets/jss/global.style";
//icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
    children?: React.ReactElement<unknown>;
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
                {children}
            </Box>
        </Fade>
    );
}

export default function BackToTop(props: Props) {
    return (
        <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top" sx={focusAnimation}>
                <KeyboardArrowUpIcon color={"primary"}/>
            </Fab>
        </ScrollTop>
    );
}
