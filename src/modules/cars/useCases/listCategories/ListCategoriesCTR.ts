import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesCTR {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const listCategories = this.listCategoriesUseCase.execute();

    return response.json(listCategories);
  }
}

export { ListCategoriesCTR };
