//Mui
import { Button, List, ListItem } from "@mui/material";
//components

//style
import headerlinksStyle from "@/assets/jss/components/headerlinks.style";

const HeaderLinks = () => {

    return (
        <List sx={headerlinksStyle.list}>
            <ListItem sx={headerlinksStyle.listItem}>
                <Button href={"/"} target="_blank" sx={headerlinksStyle.navLink}>
                    Instagram
                </Button>
            </ListItem>
            <ListItem sx={headerlinksStyle.listItem}>
                <Button href={"/"} target="_blank" sx={headerlinksStyle.navLink}>
                    Facebook
                </Button>
            </ListItem>
        </List>
    );
};

export default HeaderLinks;
