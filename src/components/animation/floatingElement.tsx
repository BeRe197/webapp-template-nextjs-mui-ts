import {ReactNode} from "react";
import {motion} from "framer-motion";
import Box from "@mui/material/Box";

const FloatingElement = ({children, range = 5}: { children: ReactNode, range?: number }) => {
    return (
        <Box component={motion.div}
             animate={{y: [0, -range, 0]}}
             transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
             className="w-20 h-20 bg-blue-500 rounded-full"
        >
            {children}
        </Box>
    );
};

export default FloatingElement;
