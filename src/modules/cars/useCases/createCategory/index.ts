import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryCTR } from "./CreateCategoryCTR";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryCTR => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryCTR = new CreateCategoryCTR(createCategoryUseCase);

  return createCategoryCTR;
};
