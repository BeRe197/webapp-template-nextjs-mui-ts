import type {Metadata} from "next";
import {ReactNode} from "react";
//mui
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import Box from "@mui/material/Box";
//components
import BackToTop from "@/components/button/scrollToTop";
//provider
import ThemeContextProvider from "@/provider/theme/themeprovider";
//style
import "@/assets/css/globals.css";
import "@/assets/css/globalicons.css";
import ScrollProgress from "@/components/animation/scrollProgress";

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
            <ThemeContextProvider>
                <ScrollProgress/>
                <Box component={"div"} id="back-to-top-anchor"/>
                {children}
                <BackToTop/>
            </ThemeContextProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
        ;
}
