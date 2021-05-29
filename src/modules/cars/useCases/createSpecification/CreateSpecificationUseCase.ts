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

  execute({ name, description }: IRequest): void {
    const specificationExist = this.SpecificationsRepository.findByName(name);

    if (specificationExist) {
      throw new Error("A especificação já existe");
    }

    this.SpecificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
