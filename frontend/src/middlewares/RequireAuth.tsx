import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "providers/AuthContext";

const RequireAuth = () => {
    const { user, isAuthenticated } = useAuthContext();

    if (!user || !isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default RequireAuth;
