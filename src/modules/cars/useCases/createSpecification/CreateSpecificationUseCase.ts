import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private SpecificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationExist = await this.SpecificationsRepository.findByName(
      name
    );

    if (specificationExist) {
      throw new Error("A especificação já existe");
    }

    await this.SpecificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
