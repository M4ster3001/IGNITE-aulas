import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryCTR } from "./CreateCategoryCTR";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryCTR = new CreateCategoryCTR(createCategoryUseCase);

export { createCategoryCTR };
