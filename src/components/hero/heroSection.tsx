"use client";
import {useEffect, useState} from 'react';
import {
    Box,
    Typography,
    Button,
    MobileStepper,
    useTheme,
    Paper,
    Container,
    alpha,
} from '@mui/material';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import {AnimatePresence, motion} from "framer-motion";
// components
import IconButton from "@/components/button/iconButton";
import TypingText from "@/components/animation/typingText";
// style
import {btnAnimation, container} from "@/assets/jss/global.style";

interface HeroPage {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage: string;
}

const HeroSection = ({heroPages}: { heroPages: HeroPage[] }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = heroPages.length;

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    useEffect(() => {
        // Autoplay - rotate every X seconds
        const timeout = setTimeout(() => {
            setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
        }, 6000);
        return () => clearTimeout(timeout);
    }, [activeStep, maxSteps]);

    const currentPage = heroPages[activeStep];

    return (
        <AnimatePresence mode="wait">
            <Box sx={{position: 'relative', width: '100%', height: '60vh'}}
                 component={motion.div}
                 drag="x"
                 dragConstraints={{left: 0, right: 0}}
                 onDragEnd={(event, info) => {
                     if (info.offset.x < -100) {
                         setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
                     } else if (info.offset.x > 100) {
                         setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
                     }
                 }}>
                {/* Background Image */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${currentPage.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: "fixed",
                        backgroundRepeat: "no-repeat",
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.25)', // Dark overlay
                        },
                    }}
                    component={motion.div}
                    key={activeStep}
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -20}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                />

                {/* Content */}
                <Container
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                        color: 'white',
                        '& .MuiContainer-root': {
                            padding: 'inherit',
                        },
                        ...container
                    }}
                >
                    <TypingText words={[currentPage.title]}/>

                    <Typography
                        variant="h5"
                        color={"white"}
                        sx={{
                            mb: 4,
                            animation: 'fadeIn 0.5s ease-in 0.2s',
                        }}
                    >
                        {currentPage.subtitle}
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        href={currentPage.buttonLink}
                        sx={btnAnimation}
                    >
                        {currentPage.buttonText}
                    </Button>
                </Container>

                {/* Pagination Dots */}
                <Paper
                    square
                    elevation={0}
                    sx={{
                        position: 'absolute',
                        bottom: 32,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        zIndex: 1,
                    }}
                >
                    <MobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            backgroundColor: 'transparent',
                            '& .MuiMobileStepper-dot': {
                                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.3),
                            },
                            '& .MuiMobileStepper-dotActive': {
                                backgroundColor: 'primary.main',
                            },
                            '& .Mui-disabled': {
                                color: (theme) => alpha(theme.palette.primary.main, 0.3),
                            },
                        }}
                        nextButton={
                            <IconButton
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                                color={"primary"}
                            >
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft/>
                                ) : (
                                    <KeyboardArrowRight/>
                                )}
                            </IconButton>
                        }
                        backButton={
                            <IconButton
                                size="small"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                color={"primary"}
                            >
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight/>
                                ) : (
                                    <KeyboardArrowLeft/>
                                )}
                            </IconButton>
                        }
                    />
                </Paper>

                {/* CSS Animation */}
                <style jsx global>{`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </Box>
        </AnimatePresence>
    );
};

export default HeroSection;
