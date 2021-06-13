import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw new AppError("Email or passsword incorrect");
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new AppError("Email or passsword incorrect");
    }

    const token = sign({}, "aa9cb8dc5969f82e85a8b71329839ef9", {
      subject: userExists.id,
      expiresIn: "1d",
    });

    const sessionReturn: IResponse = {
      token,
      user: {
        name: userExists.name,
        email: userExists.email,
      },
    };

    return sessionReturn;
  }
}

export { AuthenticateUserUseCase };
