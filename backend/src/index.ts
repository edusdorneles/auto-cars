import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/routes";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log("🚀 Servidor iniciado!");
});
