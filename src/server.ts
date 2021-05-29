import express from "express";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const PORT = 3333;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
