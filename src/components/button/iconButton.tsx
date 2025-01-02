import {FC, ReactNode} from "react";
import {default as MuiIconButton, IconButtonProps as MuiIconButtonProps} from "@mui/material/IconButton";

interface IconButtonProps extends MuiIconButtonProps {
    children: ReactNode;
    href?: string;
}

const IconButton: FC<IconButtonProps> = (props) => {
    const {children, ...rest} = props;
    return (
        <MuiIconButton {...rest}>
            {children}
        </MuiIconButton>
    );
};

export default IconButton;
