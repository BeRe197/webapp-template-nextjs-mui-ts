//mui
import {Box, Link, Stack, Typography} from "@mui/material";
import {Instagram, Facebook, Twitter, YouTube} from "@mui/icons-material";
//components
import GridContainer from "@/components/grid/gridContainer";
import Grid from "@/components/grid/gridItem";
import {BrandComponent, brandName} from "@/components/_global";
import IconButton from "@/components/button/iconButton";
//style
import footerStyle from "@/assets/jss/components/footer.style";

const Footer = () => {
    return (
        <Box component="footer" sx={footerStyle.footer}>
            <GridContainer spacing={3}>
                <Grid size={{xs: 12, sm: 6, md: 6}} sx={{display: "flex"}}>
                    <Box component={"div"} sx={{mx: "auto", textAlign: "center"}}>
                        <BrandComponent sx={{mb: 2}}/>
                        <Typography variant="body2" color="inherit" sx={{mb: 2}}>
                            &copy; {new Date().getFullYear()} {brandName}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{justifyContent: "center"}}>
                            <IconButton href="/" aria-label="Find more on Instagram"
                                        sx={{...footerStyle.socialBtn, color: "white"}}>
                                <Instagram fontSize="small"/>
                            </IconButton>
                            <IconButton href="/" aria-label="Find more on Facebook"
                                        sx={{...footerStyle.socialBtn, color: "white"}}>
                                <Facebook fontSize="small"/>
                            </IconButton>
                            <IconButton href="/" aria-label="Find more on Twitter"
                                        sx={{...footerStyle.socialBtn, color: "white"}}>
                                <Twitter fontSize="small"/>
                            </IconButton>
                            <IconButton href="/" aria-label="Find more on YouTube"
                                        sx={{...footerStyle.socialBtn, color: "white"}}>
                                <YouTube fontSize="small"/>
                            </IconButton>
                        </Stack>
                    </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 6}} sx={{display: "flex"}}>
                    <Box component={"div"} sx={{mx: "auto"}}>
                        <Typography variant="h6" gutterBottom>
                            Über uns
                        </Typography>
                        <GridContainer>
                            <Grid size={{xs: 12, sm: 12, md: 12}}>
                                <Link href="/impressum" color="inherit" variant="body2">
                                    Impressum
                                </Link>
                            </Grid>
                            <Grid size={{xs: 12, sm: 12, md: 12}}>
                                <Link href="/disclaimer" color="inherit" variant="body2">
                                    Disclaimer
                                </Link>
                            </Grid>
                            <Grid size={{xs: 12, sm: 12, md: 12}}>
                                <Link href="/datenschutz" color="inherit" variant="body2">
                                    Datenschutz
                                </Link>
                            </Grid>
                        </GridContainer>
                    </Box>
                </Grid>
            </GridContainer>
        </Box>
    );
};

export default Footer;
