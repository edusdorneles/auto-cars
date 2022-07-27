import { Request, Response } from "express";
import { queryFindUserByEmailAndPassword } from "../service/User";

// Types
import User from "../@types/User";

export const userLogin = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user: User | null = queryFindUserByEmailAndPassword(email, password);

    if (!user) {
        return res.status(401).json({ msg: "Usuário não encontrado." });
    }

    res.status(200).json(user);
};
