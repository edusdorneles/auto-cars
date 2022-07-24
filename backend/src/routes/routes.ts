import { Router } from "express";

// Routes
import carRouter from "./Car";
import userRouter from "./User";

const routes = Router();

routes.use("/cars", carRouter);
routes.use("/users", userRouter);

export default routes;
