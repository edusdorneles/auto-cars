import { Router } from "express";

import {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar,
} from "../controller/Car";

const carRouter = Router();

carRouter.get("/", getAllCars);
carRouter.get("/:id", getCarById);
carRouter.post("/", addCar);
carRouter.put("/:id", updateCar);
carRouter.delete("/:id", deleteCar);

export default carRouter;
