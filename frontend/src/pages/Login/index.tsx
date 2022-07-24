import { useState } from "react";
import { TextField, Button } from "@mui/material";
import * as S from "./styles";

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    return (
        <S.LoginContainer>
            <S.LoginBox>
                <TextField
                    name="email"
                    placeholder="Email:"
                    type="email"
                    fullWidth
                    value={login.email}
                    onChange={handleChange}
                />

                <TextField
                    name="password"
                    placeholder="Senha:"
                    type="password"
                    fullWidth
                    value={login.password}
                    onChange={handleChange}
                />

                <Button variant="contained" color="primary" fullWidth>
                    Entrar
                </Button>
            </S.LoginBox>
        </S.LoginContainer>
    );
};

export default Login;
