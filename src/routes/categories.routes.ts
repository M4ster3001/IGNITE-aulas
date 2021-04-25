import { Router } from "express";

import { createCategoryCTR } from "../modules/cars/useCases/createCategory";
import { listCategoriesCTR } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryCTR.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesCTR.handle(request, response);
});

export { categoriesRoutes };
