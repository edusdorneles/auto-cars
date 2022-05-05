import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes";

const app = express();
dotenv.config();

app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log("🚀 Servidor iniciado!");
});
