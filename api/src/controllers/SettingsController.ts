import { Request, Response } from "express";

import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { chat, username } = req.body;

      const settingsService = new SettingsService();
      const settings = await settingsService.create({ chat, username });

      return res.json(settings);
    } catch (error) {
      console.log("error: ", error);
      if (error.message === "User already exists.") {
        return res.status(401).json({ message: error.message });
      }
      return res.status(500).json({ message: "Ocorreu um erro ao criar a configuração." });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;
    const { chat } = req.body;

    const settingsService = new SettingsService();

    await settingsService.update(username, chat);

    return res.send();
  }

  async findByUsername(req: Request, res: Response): Promise<Response> {
    try {
      const { username } = req.params;

      const settingsService = new SettingsService();
      const setting = await settingsService.findByUsername(username);

      return res.json(setting);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar a configuração." });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const settingsService = new SettingsService();
      const setting = await settingsService.show(id);

      return res.json(setting);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar a configuração." });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const settingsService = new SettingsService();
      const settings = await settingsService.index();

      return res.json(settings);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar as configurações." });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const settingsService = new SettingsService();
      await settingsService.delete(id);

      return res.json({ message: "Configuração deletada com sucesso." });
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao deletar a configuração." });
    }
  }
}

export { SettingsController };
