import { Request, Response } from "express";
import { queryFindUserByEmailAndPassword, prepareUser } from "../service/User";

// Types
import User from "../@types/User";

export const userLogin = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user: User = queryFindUserByEmailAndPassword(email, password);
    res.status(200).json(user);
};
