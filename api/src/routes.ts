import { Router } from "express";

import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const settingsController = new SettingsController();
const usersController = new UsersController();

const routes = Router();

routes.post("/setting", settingsController.create);
routes.get("/settings", settingsController.index);
routes.get("/setting/:id", settingsController.show);
routes.delete("/setting/:id", settingsController.delete);

routes.post("/user", usersController.create);
routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.show);
routes.delete("/user/:id", usersController.delete);

export { routes };
