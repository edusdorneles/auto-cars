import { Router } from "express";

import { userLogin } from "../controller/User";

const userRouter = Router();

userRouter.post("/", userLogin);

export default userRouter;
