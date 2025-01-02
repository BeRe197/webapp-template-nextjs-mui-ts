import type {Metadata} from "next";
import {ReactNode} from "react";
//mui
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import Box from "@mui/material/Box";
//provider
import ThemeContextProvider from "@/provider/theme/themeprovider";
//style
import {container} from "@/assets/jss/global.style";
import "@/assets/css/globals.css";

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
                <Box component={"div"} sx={container}>
                    {children}
                </Box>
            </ThemeContextProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
        ;
}
