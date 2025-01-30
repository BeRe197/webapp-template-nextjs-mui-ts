"use client";
import {Source_Sans_3} from "next/font/google";
import {createTheme, PaletteMode} from "@mui/material/styles";

// Augment the palette to include custom color
declare module '@mui/material/styles' {
    interface Palette {
        header: {
            main: string;
            scroll: string;
            color: string;
            scrollColor: string;
        };
    }

    interface PaletteOptions {
        header?: PaletteOptions['primary'];
    }
}

const fontStyle = Source_Sans_3({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const colors = {
    primary: {
        main: "#E30039",
        dark: "#7d3245",
    },
    secondary: {
        main: "#68AE63",
        dark: "#3c473b",
    },
    error: {
        main: "#DD5A29",
        dark: "#785447",
    },
    warning: {
        main: "#ffb800",
    },
    white: {
        main: "#fff",
    },
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {
        paper: "#fff",
        default: "#f4f6f8",
        footer: "#263238",
    },
    header: {
        main: "rgba(255,255,255,0)",
        scroll: "#fff",
        color: "#fff",
        scrollColor: "#000",
    },
};

const theme = (mode: PaletteMode) => createTheme({
    palette: {
        mode: mode || "light",
        ...colors,
    },
    typography: {
        fontFamily: fontStyle.style.fontFamily,
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 400,
        fontWeightBold: 500,
        h2: {
            fontSize: "2.5rem",
            fontWeight: 300,
            lineHeight: 1.25,
        },
        h3: {
            fontSize: "2.1rem",
            fontWeight: 300,
            lineHeight: 1.25,
        },
        h4: {
            fontSize: "1.8rem",
            fontWeight: 300,
            lineHeight: 1.25,
        },
    },
    shape: {
        borderRadius: 20,
    },
    spacing: 8,
});

export default theme;
