import { Router } from "express";
import multer from "multer";

import { CreateCategoryCTR } from "../modules/cars/useCases/createCategory/CreateCategoryCTR";
import { ImportCategoryCTR } from "../modules/cars/useCases/importCategory/ImportCategoryCTR";
import { ListCategoriesCTR } from "../modules/cars/useCases/listCategories/ListCategoriesCTR";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryCTR = new CreateCategoryCTR();
const listCategoriesCTR = new ListCategoriesCTR();
const importCategoryCTR = new ImportCategoryCTR();

categoriesRoutes.post("/", createCategoryCTR.handle);

categoriesRoutes.get("/", listCategoriesCTR.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryCTR.handle
);

export { categoriesRoutes };
