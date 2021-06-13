import { Router } from "express";
import { router } from "routes";

import { CreateUserCTR } from "../modules/accounts/useCases/createUser/CreateUserCTR";

const usersRoutes = Router();

const createUserCTR = new CreateUserCTR();

usersRoutes.post("/", createUserCTR.handle);

export { usersRoutes };
