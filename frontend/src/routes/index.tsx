import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// Middlewares
import RequireAuth from "middlewares/RequireAuth";

// Pages
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Login />} />

                <Route path="dashboard" element={<RequireAuth />}>
                    <Route path="" element={<Dashboard />} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
