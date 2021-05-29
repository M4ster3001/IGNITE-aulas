import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryExist = await this.categoriesRepository.findByName(name);

    if (categoryExist) {
      throw new Error("A categoria já existe");
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
