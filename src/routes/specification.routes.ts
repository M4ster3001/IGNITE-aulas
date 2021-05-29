import { Router } from "express";

import { CreateSpecificationCTR } from "../modules/cars/useCases/createSpecification/CreateSpecificationCTR";
import { ListSpecificationsCTR } from "../modules/cars/useCases/listSpecifications/ListSpecificationsCTR";

const specificationRoutes = Router();

const createSpecificationCTR = new CreateSpecificationCTR();
const listSpecificationsCTR = new ListSpecificationsCTR();

specificationRoutes.post("/", createSpecificationCTR.handle);

specificationRoutes.get("/", listSpecificationsCTR.handle);

export { specificationRoutes };
