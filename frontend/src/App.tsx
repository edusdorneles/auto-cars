import Routes from "routes";
import { AuthContextProvider } from "providers/AuthContext";

// Styles
import { ThemeProvider } from "@mui/material";
import Default from "styles/Themes/Default";
import "styles/Global.css";

const App = () => {
    return (
        <AuthContextProvider>
            <ThemeProvider theme={Default}>
                <Routes />
            </ThemeProvider>
        </AuthContextProvider>
    );
};

export default App;
