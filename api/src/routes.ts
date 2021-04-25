import { Router } from "express";

import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

const routes = Router();

routes.post("/setting", settingsController.create);
routes.get("/settings", settingsController.index);
routes.get("/setting/:id", settingsController.show);
routes.get("/settings/:username", settingsController.findByUsername);
routes.delete("/setting/:id", settingsController.delete);

routes.post("/user", usersController.create);
routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.show);
routes.delete("/user/:id", usersController.delete);

routes.post("/message", messagesController.create);
routes.get("/messages", messagesController.index);
routes.get("/messages/:id", messagesController.indexByUser);
routes.delete("/message/:id", messagesController.delete);

export { routes };
