//Mui
import {Button, List, ListItem} from "@mui/material";
//components

//style
import headerlinksStyle from "@/assets/jss/components/headerlinks.style";

const HeaderLinks = ({width = "auto"}: { width?: string }) => {

    return (
        <List sx={headerlinksStyle.list}>
            <ListItem sx={{...headerlinksStyle.listItem, width: width}}>
                <Button href={"/"} target="_blank" sx={{...headerlinksStyle.navLink, width: width}}>
                    Instagram
                </Button>
            </ListItem>
            <ListItem sx={{...headerlinksStyle.listItem, width: width}}>
                <Button href={"/"} target="_blank" sx={{...headerlinksStyle.navLink, width: width}}>
                    Facebook
                </Button>
            </ListItem>
        </List>
    );
};

export default HeaderLinks;
