import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const HeaderContainer = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export const HeaderLogo = styled("img")({
    height: "40px"
});

export const HeaderNav = styled("nav")({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
});
