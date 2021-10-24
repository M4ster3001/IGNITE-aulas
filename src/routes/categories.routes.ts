import uploadConfig from "@config/upload";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";
import { CreateCategoryCTR } from "@modules/cars/useCases/createCategory/CreateCategoryCTR";
import { ImportCategoryCTR } from "@modules/cars/useCases/importCategory/ImportCategoryCTR";
import { ListCategoriesCTR } from "@modules/cars/useCases/listCategories/ListCategoriesCTR";
import { Router } from "express";
import multer from "multer";

const categoriesRoutes = Router();

const uplodaImport = multer(uploadConfig.upload("./tmp"));

const createCategoryCTR = new CreateCategoryCTR();
const listCategoriesCTR = new ListCategoriesCTR();
const importCategoryCTR = new ImportCategoryCTR();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.post("/", createCategoryCTR.handle);

categoriesRoutes.get("/", listCategoriesCTR.handle);

categoriesRoutes.post(
  "/import",
  uplodaImport.single("file"),
  importCategoryCTR.handle
);

export { categoriesRoutes };
