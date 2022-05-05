import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { listCars } from "../service/Car";

// Types
import Car from "../@types/Car";

export const getAllCars = (req: Request, res: Response) => {
    const cars: Car[] = listCars();
    res.json(cars);
};

export const getCarById = (req: Request, res: Response) => {
    const car: Car[] = listCars();
    const foundCar = car.find((car: Car) => car.id === req.params.id);

    if (!foundCar) {
        res.status(404).send("Car not found");
    }

    res.json(foundCar);
};

export const addCar = (req: Request, res: Response) => {
    const { name, year, color, price } = req.body;
    const cars: Car[] = listCars();

    if (!name) {
        res.status(400).send("Name is required");
    }

    if (!year) {
        res.status(400).send("Year is required");
    }

    if (!color) {
        res.status(400).send("Color is required");
    }

    if (!price) {
        res.status(400).send("Price is required");
    }

    const newCar: Car = {
        id: uuidv4(),
        name,
        year,
        color,
        price,
    };

    cars.push(newCar);
    res.json(newCar);
};
