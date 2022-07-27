import React, { useState, createContext, useContext, SetStateAction, Dispatch } from "react";

// Types
type AuthContextType = {
    user: User | {};
    setUser: Dispatch<SetStateAction<User>>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

type AuthContextProviderProps = {
    children: React.ReactNode;
};

const initialValue = {
    user: {},
    setUser: () => {},
    isAuthenticated: false,
    setIsAuthenticated: () => {}
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

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
