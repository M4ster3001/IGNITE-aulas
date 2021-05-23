import { Router } from "express";
import multer from "multer";

import createCategoryCTR from "../modules/cars/useCases/createCategory";
import { importCategoryCTR } from "../modules/cars/useCases/importCategory";
import { listCategoriesCTR } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
  return createCategoryCTR().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesCTR.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryCTR.handle(request, response);
});

export { categoriesRoutes };
