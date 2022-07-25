import styled from "@emotion/styled";
import { Paper, TextField } from "@mui/material";

export const LoginContainer = styled("main")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "var(--primary-color)"
});

export const LoginBox = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "4px",
    padding: "20px"
});

export const LoginInput = styled(TextField)({
    marginBottom: "8px"
});

export const LoginError = styled("div")({
    marginTop: "8px",
    color: "var(--error-color)"
});
