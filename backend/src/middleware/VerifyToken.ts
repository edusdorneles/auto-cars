import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            msg: "Token não fornecido.",
        });
    }

    verify(authorization, process.env.JWT_SECRET || "", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                msg: "Token inválido.",
            });
        }

        next();
    });
};
