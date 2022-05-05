import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { listCars } from "../service/Car";

// Types
import Car from "../@types/Car";

export const getAllCars = (req: Request, res: Response) => {
    const cars: Car[] = listCars();
    res.status(200).json(cars);
};

export const getCarById = (req: Request, res: Response) => {
    const car: Car[] = listCars();
    const foundCar = car.find((car: Car) => car.id === req.params.id);

    if (!foundCar) {
        res.status(404).json({ msg: "Car not found" });
    }

    res.status(200).json(foundCar);
};

export const addCar = (req: Request, res: Response) => {
    const { name, year, color, price } = req.body;
    const cars: Car[] = listCars();

    if (!name) {
        res.status(400).json({ msg: "Name is required" });
    }

    if (!year) {
        res.status(400).json({ msg: "Year is required" });
    }

    if (!color) {
        res.status(400).json({ msg: "Color is required" });
    }

    if (!price) {
        res.status(400).json({ msg: "Price is required" });
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

export const updateCar = (req: Request, res: Response) => {
    const { name, year, color, price } = req.body;
    const cars: Car[] = listCars();

    const carIndex: number = cars.findIndex(
        (car: Car) => car.id === req.params.id
    );

    if (carIndex === -1) {
        res.status(404).json({ msg: "Car not found" });
    }

    if (!name) {
        res.status(400).json({ msg: "Name is required" });
    }

    if (!year) {
        res.status(400).json({ msg: "Year is required" });
    }

    if (!color) {
        res.status(400).json({ msg: "Color is required" });
    }

    if (!price) {
        res.status(400).json({ msg: "Price is required" });
    }

    cars[carIndex] = {
        id: req.params.id,
        name,
        year,
        color,
        price,
    };

    res.status(200).json(cars[carIndex]);
};

export const deleteCar = (req: Request, res: Response) => {
    const cars: Car[] = listCars();

    const carIndex: number = cars.findIndex(
        (car: Car) => car.id === req.params.id
    );

    if (carIndex === -1) {
        res.status(404).json({ msg: "Car not found" });
    }

    cars.splice(carIndex, 1);

    res.status(200).json({ msg: "Car deleted" });
};
