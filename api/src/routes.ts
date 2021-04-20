import { Router } from "express";

import { SettingsController } from "./controllers/SettingsController";

const settingsController = new SettingsController();

const routes = Router();

routes.post("/setting", settingsController.create);
routes.get("/settings", settingsController.index);
routes.get("/setting/:id", settingsController.show);
routes.delete("/setting/:id", settingsController.delete);

export { routes };
