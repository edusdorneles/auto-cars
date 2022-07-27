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
    getCars: () => Promise<void>;
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
    getCars: () => Promise.resolve()
};

export const DashboardContext = createContext<DashboardContextType>(initialValue);

export const DashboardContextProvider = ({ children }: DashboardContextProviderProps) => {
    const [cars, setCars] = useState<Car[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const getCars = async () => {
        const response = await API.get("/cars");
        setCars(response.data);
    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <DashboardContext.Provider value={{ cars, setCars, page, setPage, rowsPerPage, setRowsPerPage, getCars }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);
