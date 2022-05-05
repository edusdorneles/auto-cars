import { Request, Response } from "express";
import { listCars } from "../service/Car";

export const getAllCars = async (req: Request, res: Response) => {
    const cars = listCars();
    res.json(cars);
};
