import { useNavigate } from "react-router-dom";
import { AppBar, Container, Button } from "@mui/material";
import * as S from "./styles";

export const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("@auto-cars:user");
        navigate("/");
    };

    return (
        <AppBar position="static">
            <Container maxWidth="md">
                <S.HeaderContainer disableGutters>
                    <S.HeaderLogo src="/images/autocars-logo-white.png" alt="AutoCars - Logo" />

                    <S.HeaderNav>
                        <Button variant="text" color="inherit" onClick={logout}>
                            Sair
                        </Button>
                    </S.HeaderNav>
                </S.HeaderContainer>
            </Container>
        </AppBar>
    );
};
