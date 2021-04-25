import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationCTR } from "./CreateSpecificationCTR";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationCTR = new CreateSpecificationCTR(
  createSpecificationUseCase
);

export { createSpecificationCTR };
