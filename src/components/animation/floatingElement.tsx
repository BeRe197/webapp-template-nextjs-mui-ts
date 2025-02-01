import {motion} from "framer-motion";
import {ReactNode} from "react";

const FloatingElement = ({children, range = 5}: { children: ReactNode, range?: number }) => {
    return (
        <motion.div
            animate={{y: [0, -range, 0]}}
            transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
            className="w-20 h-20 bg-blue-500 rounded-full"
        >
            {children}
        </motion.div>
    );
};

export default FloatingElement;
