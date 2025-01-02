/** @jsxImportSource @emotion/react */
import {FC} from "react";
import {Button, ButtonProps} from "@mui/material";
import {css} from "@emotion/react";
import Box from "@mui/material/Box";
import {useRouter} from "next/navigation";

type BrandComponentProps = ButtonProps

const BrandComponent: FC<BrandComponentProps> = (props) => {
    const {...rest} = props;
    const router = useRouter();
    return (
        <Button
            onClick={() => {
                router.push("/");
            }}
            css={css`
                width: 10rem;
                margin-right: 1rem;
            `}
            {...rest}
        >
            <Box
                component="img"
                alt="Company Logo"
                src="logo.svg"
                color={"white"}
            />
        </Button>
    );
};

const brandName = "Muster Company";

export {
    BrandComponent,
    brandName,
};
