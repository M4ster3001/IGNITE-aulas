import { ImportCategoryCTR } from "./ImportCategoryCTR";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryCTR = new ImportCategoryCTR(importCategoryUseCase);

export { importCategoryCTR };
