import {createTheme, PaletteOptions} from '@mui/material/styles';
import {Source_Sans_3} from "next/font/google";

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
        header: {
            main: string;
            scroll: string;
            color: string;
            scrollColor: string;
        };
        footer?: {
            main: string;
        };
    }

    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
        header?: {
            main: string;
            scroll: string;
            color: string;
            scrollColor: string;
        };
        footer?: {
            main: string;
        };
    }

    interface TypeBackground {
        odd: string;
    }
}

const fontStyle = Source_Sans_3({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const PRIMARY_COLOR = '#E30039';

const getDesignTokens = (mode: 'light' | 'dark'): PaletteOptions => ({
    mode,
    primary: {
        main: PRIMARY_COLOR,
        light: mode === 'light' ? '#ff1a53' : '#ff3366',
        dark: mode === 'light' ? '#b3002d' : '#cc0033',
        contrastText: '#ffffff',
    },
    secondary: {
        main: mode === 'light' ? '#424242' : '#bdbdbd',
        light: mode === 'light' ? '#6d6d6d' : '#e0e0e0',
        dark: mode === 'light' ? '#1b1b1b' : '#8d8d8d',
        contrastText: mode === 'light' ? '#ffffff' : '#000000',
    },
    neutral: {
        main: mode === 'light' ? '#f5f5f5' : '#262626',
        light: mode === 'light' ? '#ffffff' : '#404040',
        dark: mode === 'light' ? '#e0e0e0' : '#171717',
        contrastText: mode === 'light' ? '#000000' : '#ffffff',
    },
    background: {
        default: mode === 'light' ? '#ffffff' : '#212528',
        paper: mode === 'light' ? '#ffffff' : '#272b2e',
        odd: mode === 'light' ? '#EEEEEE' : '#272b2e',
    },
    text: {
        primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
        secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
    },
    header: {
        main: "rgba(255,255,255,0)",
        scroll: mode === 'light' ? '#ffffff' : '#212528',
        color: '#ffffff',
        scrollColor: mode === 'light' ? "#000" : "#fff",
    },
    footer: {
        main: mode === 'light' ? '#263238' : '#35393b',
    }
});

export const getTheme = (mode: 'light' | 'dark') => {
    const themeOptions = getDesignTokens(mode);

    return createTheme({
        palette: themeOptions,
        typography: {
            fontFamily: fontStyle.style.fontFamily,
            fontSize: 14,
            fontWeightLight: 200,
            fontWeightRegular: 300,
            fontWeightMedium: 400,
            fontWeightBold: 500,
            h1: {
                fontWeight: 600,
                fontSize: '2.5rem',
            },
            h2: {
                fontWeight: 500,
                fontSize: '2rem',
            },
            h3: {
                fontWeight: 500,
                fontSize: '1.75rem',
            },
            h4: {
                fontWeight: 500,
                fontSize: '1.5rem',
            },
            h5: {
                fontWeight: 400,
                fontSize: '1.25rem',
            },
            h6: {
                fontWeight: 400,
                fontSize: '1rem',
            },
        },
        shape: {
            borderRadius: 10,
        },
        spacing: 8,
        components: {
            MuiFab: {
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor: mode === 'light'
                                ? '#eeeeee'
                                : '#35393b',
                        },
                    },
                },
            },
        }
    });
};
