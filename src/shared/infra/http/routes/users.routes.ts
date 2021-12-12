import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserCTR } from "@modules/accounts/useCases/createUser/CreateUserCTR";
import { UpdateUserAvatarCTR } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarCTR";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uplodaAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserCTR = new CreateUserCTR();
const updateUserAvatar = new UpdateUserAvatarCTR();

usersRoutes.post("/", createUserCTR.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uplodaAvatar.single("avatar"),
  updateUserAvatar.handle
);

export { usersRoutes };
