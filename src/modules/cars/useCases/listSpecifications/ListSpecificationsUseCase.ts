import { Specification } from "@modules/cars/entities/Specification";
import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
