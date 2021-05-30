import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserCTR {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const { name, username, email, driver_license, password } = request.body;

    await createUserUseCase.execute({
      name,
      username,
      email,
      driver_license,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserCTR };
