import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesCTR {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const listCategories = await listCategoriesUseCase.execute();

    return response.json(listCategories);
  }
}

export { ListCategoriesCTR };
