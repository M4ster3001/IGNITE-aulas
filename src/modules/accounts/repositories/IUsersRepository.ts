import { User } from "modules/accounts/entities/Users";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };