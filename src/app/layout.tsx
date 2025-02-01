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
import {generateMetadata} from "@/components/utils/metadata";
//provider
import {ThemeProvider} from "@/provider/theme/themeprovider";
//style
import "@/assets/css/globals.css";
import "@/assets/css/globalicons.css";

export const metadata: Metadata = generateMetadata({
    title: "Webapp Template",
    description: "Template for a Webapp with Next.js and MUI",
    keywords: ["Next.js", "MUI", "Template"],
    openGraph: {
        title: 'Webapp Template',
        description: "Template for a Webapp with Next.js and MUI",
    },
    twitter: {
        card: 'summary_large_image',
        site: '@yourtwitterhandle',
    },
});

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
