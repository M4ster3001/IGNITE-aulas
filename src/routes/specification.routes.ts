import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationCTR } from "../modules/cars/useCases/createSpecification/CreateSpecificationCTR";
import { ListSpecificationsCTR } from "../modules/cars/useCases/listSpecifications/ListSpecificationsCTR";

const specificationRoutes = Router();

const createSpecificationCTR = new CreateSpecificationCTR();
const listSpecificationsCTR = new ListSpecificationsCTR();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post("/", createSpecificationCTR.handle);

specificationRoutes.get("/", listSpecificationsCTR.handle);

export { specificationRoutes };
