import { AppError } from "@shared/errors/AppError";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepository as UsersLocalRepository } from "../../repositories/in-memory/UsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersLocalRepository: UsersLocalRepository;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersLocalRepository = new UsersLocalRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersLocalRepository);
    createUserUseCase = new CreateUserUseCase(usersLocalRepository);
  });

  it("should be able to authenticate an use", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      name: "John Doe",
      email: "johndoe@gmail.com",
      username: "tester",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an non-existent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "teste@gmail.com",
        password: "teste123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "98988889",
        name: "John Doe2",
        email: "johndoe2@gmail.com",
        username: "tester2",
        password: "312s12sdfsa23343",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "teste123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
