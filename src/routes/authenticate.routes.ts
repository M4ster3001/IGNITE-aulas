import { Router } from "express";

import { AuthenticateUserCTR } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserCTR";

const authenticateRoutes = Router();

const authenticateCTR = new AuthenticateUserCTR();

authenticateRoutes.post("/sessions", authenticateCTR.handle);

export { authenticateRoutes };
