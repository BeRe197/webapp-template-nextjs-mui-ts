"use client";
import {cloneElement, ReactElement, useState} from "react";
//Mui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Container, useScrollTrigger, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
//components
import ThemeModeSwitch from "@/components/switch/themeModeSwitch";
import HeaderLinks from "@/components/header/headerlinks";
import {BrandComponent} from "@/components/_global";
import IconButton from "@/components/button/iconButton";
import AnimatedDrawer from "@/components/animation/animatedDrawer";
//style
import headerStyle from "@/assets/jss/components/header.style";

interface Props {
    children?: ReactElement<{ elevation?: number, sx?: object }>;
}

const ElevationScroll = (props: Props) => {
    const {children} = props;
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
    });

    return children
        ? cloneElement(children, {
            elevation: trigger ? 4 : 0,
            sx: {
                backgroundColor: trigger ? theme.palette.header.scroll + " !important" : theme.palette.header.main,
                color: trigger ? theme.palette.header.scrollColor : theme.palette.header.color,
            },
        })
        : null;
};

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const configOptions = (
        <ThemeModeSwitch/>
    );

    return (
        <ElevationScroll>
            <AppBar position="fixed" sx={headerStyle.appBar}>
                <Container>
                    <Toolbar disableGutters>
                        <Box
                            component="div"
                            sx={headerStyle.flex}
                        >
                            <BrandComponent/>
                        </Box>
                        <Box
                            sx={{
                                display: {
                                    xs: "none !important",
                                    sm: "none !important",
                                    md: "block !important",
                                    lg: "block !important",
                                },
                            }}
                        >
                            <HeaderLinks/>
                        </Box>
                        {configOptions}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            sx={{display: {md: "none !important"}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </Container>
                <AnimatedDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}
                                headerLinks={<HeaderLinks width={"100%"}/>}/>
            </AppBar>
        </ElevationScroll>
    );
};

export default Header;
