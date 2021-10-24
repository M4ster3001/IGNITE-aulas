import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";
import { CreateSpecificationCTR } from "@modules/cars/useCases/createSpecification/CreateSpecificationCTR";
import { ListSpecificationsCTR } from "@modules/cars/useCases/listSpecifications/ListSpecificationsCTR";
import { Router } from "express";

const specificationRoutes = Router();

const createSpecificationCTR = new CreateSpecificationCTR();
const listSpecificationsCTR = new ListSpecificationsCTR();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post("/", createSpecificationCTR.handle);

specificationRoutes.get("/", listSpecificationsCTR.handle);

export { specificationRoutes };
