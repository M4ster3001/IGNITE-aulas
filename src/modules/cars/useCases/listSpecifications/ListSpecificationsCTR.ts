import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsCTR {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );

    const listSpecifications = await listSpecificationsUseCase.execute();

    return response.json(listSpecifications);
  }
}

export { ListSpecificationsCTR };
