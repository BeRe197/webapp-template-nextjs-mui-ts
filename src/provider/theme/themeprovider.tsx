"use client"
import {createContext, ReactNode, useMemo} from "react";
//mui
import {PaletteMode, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//theme
import theme from "@/provider/theme/theme";
//components
import Header from "@/components/header";
import Footer from "@/components/footer";
import useLocalStorage from "@/components/hooks/useLocalStorage";

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

export default function ThemeContextProvider({children}: Readonly<{ children: ReactNode; }>) {
    const [mode, setMode] = useLocalStorage<PaletteMode>("themeMode", "light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        [setMode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme(mode)}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Header/>
                {children}
                <Footer/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
