import {FC, ReactNode} from "react";
import Grid from "@mui/material/Grid2";
import {Grid2Props as MuiGridProps} from "@mui/material/Grid2/Grid2";

interface GridContainerProps extends MuiGridProps {
    children: ReactNode;
}

const GridContainer: FC<GridContainerProps> = (props) => {
    const {children, ...rest} = props;
    return (
        <Grid container {...rest}>
            {children}
        </Grid>
    );
};

export default GridContainer;
