import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { ListSpecificationsCTR } from "./ListSpecificationsCTR";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);
const listSpecificationsCTR = new ListSpecificationsCTR(
  listSpecificationsUseCase
);

export { listSpecificationsCTR };
