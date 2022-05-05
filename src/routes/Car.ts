import { Router } from "express";

const carRouter = Router();

carRouter.get("/cars");
carRouter.get("/cars/:id");
carRouter.post("/cars");
carRouter.put("/cars/:id");
carRouter.delete("/cars/:id");

export default carRouter;
