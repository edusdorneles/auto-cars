import { Router } from "express";

import { getAllCars } from "../controller/Car";

const carRouter = Router();

carRouter.get("/", getAllCars);
carRouter.get("/:id");
carRouter.post("");
carRouter.put("/:id");
carRouter.delete("/:id");

export default carRouter;
