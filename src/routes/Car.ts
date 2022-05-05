import { Router } from "express";

import { getAllCars, getCarById } from "../controller/Car";

const carRouter = Router();

carRouter.get("/", getAllCars);
carRouter.get("/:id", getCarById);
carRouter.post("/");
carRouter.put("/:id");
carRouter.delete("/:id");

export default carRouter;
