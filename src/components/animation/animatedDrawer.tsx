"use client";
import {ReactNode} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Drawer, Box} from "@mui/material";

interface Props {
    drawerOpen: boolean;
    handleDrawerToggle: () => void;
    headerLinks: ReactNode;
}

const drawerVariants = {
    hidden: {x: "100%", opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 120}
    },
    exit: {x: "100%", opacity: 0, transition: {duration: 0.4, ease: "easeInOut"}},
};

const AnimatedDrawer = ({drawerOpen, handleDrawerToggle, headerLinks}: Props) => {
    return (
        <AnimatePresence>
            {drawerOpen && (
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    sx={{display: {lg: "none !important", md: "none !important", sm: "block !important"}}}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={handleDrawerToggle}
                        variants={drawerVariants}
                    >
                        <Box component="div" onClick={handleDrawerToggle} sx={{width: 250, p: 2}}>
                            {headerLinks}
                        </Box>
                    </motion.div>
                </Drawer>
            )}
        </AnimatePresence>
    );
};

export default AnimatedDrawer;
