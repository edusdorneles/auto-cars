import React, { useState, createContext, useContext, SetStateAction, Dispatch } from "react";
import { login } from "services/AuthService";

// Types
type AuthContextType = {
    user: User | {};
    setUser: Dispatch<SetStateAction<User>>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    loginUser: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
    children: React.ReactNode;
};

const initialValue = {
    user: {},
    setUser: () => {},
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    loginUser: () => Promise.resolve()
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState(
        sessionStorage.getItem("@auto-cars:user")
            ? JSON.parse(sessionStorage.getItem("@auto-cars:user") || "")
            : initialValue.user
    );
    const [isAuthenticated, setIsAuthenticated] = useState(
        sessionStorage.getItem("@auto-cars:user") ? true : initialValue.isAuthenticated
    );

    const loginUser = async (email: string, password: string) => {
        const response = await login(email, password);
        setUser(response.data);
        setIsAuthenticated(true);
        sessionStorage.setItem("@auto-cars:user", JSON.stringify(response.data));
        sessionStorage.setItem("@auto-cars:token", response.data.token);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
