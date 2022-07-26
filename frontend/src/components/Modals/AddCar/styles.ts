import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const ModalContainer = styled("div")({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "4px"
});

export const ModalForm = styled("form")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end"
});

export const ModalTextField = styled(TextField)({
    marginBottom: "8px",
    width: "100%",
    height: "100%"
});

export const ModalAlerts = styled("div")({
    width: "100%",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
});

export const ModalButtons = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    "& button": {
        marginLeft: "8px"
    }
});
