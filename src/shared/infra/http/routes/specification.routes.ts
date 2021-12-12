import { Router } from "express";

import { CreateSpecificationCTR } from "@modules/cars/useCases/createSpecification/CreateSpecificationCTR";
import { ListSpecificationsCTR } from "@modules/cars/useCases/listSpecifications/ListSpecificationsCTR";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationCTR = new CreateSpecificationCTR();
const listSpecificationsCTR = new ListSpecificationsCTR();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post("/", createSpecificationCTR.handle);

specificationRoutes.get("/", listSpecificationsCTR.handle);

export { specificationRoutes };
