import styled from "@emotion/styled";

export const LoginContainer = styled("main")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "var(--primary-color)"
});

export const LoginBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "4px",
    padding: "20px"
});
