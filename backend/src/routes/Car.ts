import { Router } from "express";

import { verifyToken } from "../middleware/VerifyToken";
import {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar,
} from "../controller/Car";

const carRouter = Router();

carRouter.get("/", verifyToken, getAllCars);
carRouter.get("/:id", verifyToken, getCarById);
carRouter.post("/", verifyToken, addCar);
carRouter.put("/:id", verifyToken, updateCar);
carRouter.delete("/:id", verifyToken, deleteCar);

export default carRouter;
