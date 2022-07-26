import styled from "@emotion/styled";
import { TableContainer as TableContainerMui, Button, TablePagination as TablePaginationMui } from "@mui/material";

export const AddButton = styled(Button)({
    margin: "16px 0px"
});

export const TableContainer = styled(TableContainerMui)({
    width: "100%",
    height: "100%",
    padding: "0px"
});

export const TableButton = styled(Button)({
    marginRight: "6px"
});

export const TablePagination = styled(TablePaginationMui)({
    display: "flex",
    justifyContent: "flex-end"
});
