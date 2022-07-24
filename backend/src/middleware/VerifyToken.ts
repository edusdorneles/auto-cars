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
            message: "Token not provided",
        });
    }

    verify(authorization, process.env.JWT_SECRET || "", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }

        next();
    });
};
