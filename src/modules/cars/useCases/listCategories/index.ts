import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesCTR } from "./ListCategoriesCTR";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesCTR = new ListCategoriesCTR(listCategoriesUseCase);

export { listCategoriesCTR };
