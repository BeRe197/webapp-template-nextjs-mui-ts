"use client";
import {useState} from 'react';
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
// components
import IconButton from "@/components/button/iconButton";
// style
import {btnAnimation} from "@/assets/jss/global.style";

interface HeroPage {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage: string;
}

const heroPages: HeroPage[] = [
    {
        title: "Welcome to Our Platform",
        subtitle: "Discover amazing features that will transform your experience",
        buttonText: "Get Started",
        buttonLink: "/get-started",
        backgroundImage: "https://cdn.pixabay.com/photo/2024/12/20/11/53/architect-9280053_1280.jpg",
    },
    {
        title: "Powerful Solutions",
        subtitle: "Built for modern businesses and teams",
        buttonText: "Learn More",
        buttonLink: "/solutions",
        backgroundImage: "https://cdn.pixabay.com/photo/2017/09/09/14/41/surfer-2732200_1280.jpg",
    },
    {
        title: "Join Our Community",
        subtitle: "Connect with like-minded professionals",
        buttonText: "Join Now",
        buttonLink: "/join",
        backgroundImage: "https://cdn.pixabay.com/photo/2022/10/26/14/16/harbour-7548583_1280.jpg",
    },
];

const HeroSection = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = heroPages.length;

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const currentPage = heroPages[activeStep];

    return (
        <Box sx={{position: 'relative', width: '100%', height: '70vh'}}>
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
                }}
            >
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
                    {currentPage.title}
                </Typography>

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
    );
};

export default HeroSection;
