import { Request, Response } from "express";
import { listCars } from "../service/Car";

export const getAllCars = (req: Request, res: Response) => {
    const cars = listCars();
    res.json(cars);
};

export const getCarById = (req: Request, res: Response) => {
    const car = listCars();
    const foundCar = car.find((car) => car.id === parseInt(req.params.id));

    if (!foundCar) {
        res.status(404).send("Car not found");
    }

    res.json(foundCar);
};
