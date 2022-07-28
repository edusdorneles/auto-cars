import API from "./API";

export const login = async (email: string, password: string) => {
    return await API.post("/users", { email, password });
};
