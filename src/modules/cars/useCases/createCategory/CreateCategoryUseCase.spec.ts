import { AppError } from "@errors/AppError";

import { CategoriesRepository as CategoriesLocalRepository } from "../../repositories/in-memory/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoriesLocalRepository: CategoriesLocalRepository;

describe("Create category", () => {
  beforeEach(() => {
    categoriesLocalRepository = new CategoriesLocalRepository();
    createCategory = new CreateCategoryUseCase(categoriesLocalRepository);
  });

  it("should be able to create a new category", async () => {
    const category = { name: "teste", description: "testando os testes" };

    await createCategory.execute(category);

    const categoryCreated = await categoriesLocalRepository.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = { name: "teste", description: "testando os testes" };

      await createCategory.execute(category);

      await createCategory.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
