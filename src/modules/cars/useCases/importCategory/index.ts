import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ImportCategoryCTR } from "./ImportCategoryCTR";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryRepository = new CategoriesRepository();
const importCategoryUseCase = new ImportCategoryUseCase(
  importCategoryRepository
);
const importCategoryCTR = new ImportCategoryCTR(importCategoryUseCase);

export { importCategoryCTR };
