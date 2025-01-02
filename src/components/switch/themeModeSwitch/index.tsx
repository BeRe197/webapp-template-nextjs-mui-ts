"use client"
import { useContext } from "react";
//Mui
import { IconButton, useTheme } from "@mui/material";
//context
import { ColorModeContext } from "@/provider/theme/themeprovider";
//Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeModeSwitch = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/>}
        </IconButton>
    );
};

export default ThemeModeSwitch;
