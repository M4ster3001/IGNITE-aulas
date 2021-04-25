import express from "express";

import { router } from "./routes";

const PORT = 3333;

console.clear();
const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
