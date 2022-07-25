import { Container } from "@mui/material";
import { Header } from "./Header";

// Types
type Props = {
    children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Container maxWidth="md">{children}</Container>
        </>
    );
};
