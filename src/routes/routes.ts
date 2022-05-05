import { Router } from "express";

// Routes
import carRouter from "./Car";

const routes = Router();

routes.use("/cars", carRouter);

export default routes;
