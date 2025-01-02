import { useState } from "react";
//Mui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
//components
import ThemeModeSwitch from "@/components/switch/themeModeSwitch";
import HeaderLinks from "@/components/header/headerlinks";
import { BrandComponent } from "@/components/_global";
import IconButton from "@/components/button/iconButton";
//style
import headerStyle from "@/assets/jss/components/header.style";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const configOptions = (
        <ThemeModeSwitch/>
    );

    return (
        <AppBar position="sticky" sx={headerStyle.appBar}>
            <Container sx={headerStyle.container}>
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
                                md: "none !important",
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
                        sx={{ display: { lg: "none !important" } }}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </Container>
            <Drawer
                variant="temporary"
                anchor={"right"}
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { lg: "none !important", md: "block !important" } }}
            >
                <Box component={"div"} onClick={handleDrawerToggle}>
                    <HeaderLinks/>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
