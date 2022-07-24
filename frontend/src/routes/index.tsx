import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// Pages
import Login from "pages/Login";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Login />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
