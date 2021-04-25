import { Router } from "express";
import { listCategoriesCTR } from "modules/cars/useCases/listCategories";

import { createSpecificationCTR } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsCTR } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationCTR.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return listSpecificationsCTR.handle(request, response);
});

export { specificationRoutes };
