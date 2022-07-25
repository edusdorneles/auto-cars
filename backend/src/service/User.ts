import { sign } from "jsonwebtoken";
import userFakeData from "../model/UserFakeData";

// Types
import User from "../@types/User";

export const prepareUser = (user: User): User => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: sign({ id: user.id }, process.env.JWT_SECRET || "", {
            expiresIn: "1h",
        }),
    };
};

export const queryFindUserByEmailAndPassword = (
    email: string,
    password: string
): User | null => {
    const user = userFakeData.find((user) => user.email === email);

    if (!user || user.password !== password) {
        return null;
    }

    return prepareUser(user);
};
