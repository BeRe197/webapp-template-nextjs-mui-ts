import {FC, ReactNode} from "react";
import {default as MuiGrid, Grid2Props as MuiGridProps} from "@mui/material/Grid2";

interface GridProps extends MuiGridProps {
    children: ReactNode;
}

const Grid: FC<GridProps> = (props) => {
    const {children, ...rest} = props;
    return (
        <MuiGrid {...rest}>
            {children}
        </MuiGrid>
    );
};

export default Grid;
