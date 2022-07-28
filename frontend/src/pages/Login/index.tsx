import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuthContext } from "providers/AuthContext";
import * as S from "./styles";

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuthContext();
    const [login, setLogin] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            await loginUser(login.email, login.password);
            navigate("/dashboard");
        } catch (error: any) {
            setError(error.response.data.msg);
        }

        setLogin({ email: "", password: "" });
        setLoading(false);
    };

    return (
        <S.LoginContainer>
            <S.LoginBox elevation={6}>
                <S.LoginImage src="/images/autocars-logo.png" alt="AutoCars - Logo" />

                <S.LoginInput
                    fullWidth
                    name="email"
                    placeholder="Email:"
                    type="email"
                    size="small"
                    value={login.email}
                    onChange={handleChange}
                />

                <S.LoginInput
                    fullWidth
                    name="password"
                    placeholder="Senha:"
                    type="password"
                    size="small"
                    value={login.password}
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    onClick={() => handleSubmit()}
                    disabled={loading}
                >
                    Entrar
                </Button>

                <S.LoginError>{error}</S.LoginError>
            </S.LoginBox>
        </S.LoginContainer>
    );
};

export default Login;
