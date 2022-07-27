import { AuthContextProvider } from "./AuthContext";
import { DashboardContextProvider } from "./DashboardContext";

type Props = {
    children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
    return (
        <AuthContextProvider>
            <DashboardContextProvider>{children}</DashboardContextProvider>
        </AuthContextProvider>
    );
};

export default Providers;
