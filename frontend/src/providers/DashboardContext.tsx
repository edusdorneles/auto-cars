import React, { useState, useEffect, createContext, useContext, SetStateAction, Dispatch } from "react";
import API from "services/API";

// Types
type DashboardContextType = {
    cars: Car[];
    setCars: Dispatch<SetStateAction<Car[]>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    rowsPerPage: number;
    setRowsPerPage: Dispatch<SetStateAction<number>>;
    alert: Alert;
    setAlert: Dispatch<SetStateAction<Alert>>;
    getCars: () => Promise<void>;
    resetAlert: () => void;
};

type DashboardContextProviderProps = {
    children: React.ReactNode;
};

const initialValue = {
    cars: [],
    setCars: () => {},
    page: 0,
    setPage: () => {},
    rowsPerPage: 10,
    setRowsPerPage: () => {},
    alert: { open: false, message: "", severity: "" },
    setAlert: () => {},
    getCars: () => Promise.resolve(),
    resetAlert: () => {}
};

export const DashboardContext = createContext<DashboardContextType>(initialValue);

export const DashboardContextProvider = ({ children }: DashboardContextProviderProps) => {
    const [cars, setCars] = useState<Car[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [alert, setAlert] = useState<Alert>({ open: false, message: "", severity: "" });

    const getCars = async () => {
        const response = await API.get("/cars");
        setCars(response.data);
    };

    const resetAlert = () => {
        setAlert({ open: false, message: "", severity: "" });
    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <DashboardContext.Provider
            value={{ cars, setCars, page, setPage, rowsPerPage, setRowsPerPage, alert, setAlert, getCars, resetAlert }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);
