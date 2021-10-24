import { AuthenticateUserCTR } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserCTR";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateCTR = new AuthenticateUserCTR();

authenticateRoutes.post("/sessions", authenticateCTR.handle);

export { authenticateRoutes };
