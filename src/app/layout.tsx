import type {Metadata} from "next";
import {ReactNode} from "react";
//mui
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import Box from "@mui/material/Box";
import {CssBaseline} from "@mui/material";
//components
import BackToTop from "@/components/button/scrollToTop";
import ScrollProgress from "@/components/animation/scrollProgress";
import Header from "@/components/header";
import Footer from "@/components/footer";
//provider
import {ThemeProvider} from "@/provider/theme/themeprovider";
//style
import "@/assets/css/globals.css";
import "@/assets/css/globalicons.css";

export const metadata: Metadata = {
    title: "Webapp Template",
    description: "Template for a Webapp with Next.js and MUI",
    keywords: "Next.js, MUI, Template",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ThemeProvider>
                <Header/>
                <CssBaseline/>
                <ScrollProgress/>
                <Box component={"div"} id="back-to-top-anchor"/>
                {children}
                <BackToTop/>
                <Footer/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
