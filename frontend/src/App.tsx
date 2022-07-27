import Routes from "routes";
import Providers from "providers";

// Styles
import { ThemeProvider } from "@mui/material";
import Default from "styles/Themes/Default";
import "styles/Global.css";

const App = () => {
    return (
        <Providers>
            <ThemeProvider theme={Default}>
                <Routes />
            </ThemeProvider>
        </Providers>
    );
};

export default App;
