import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
  async create(req: Request, res: Response): Promise<any> {
    try {
      const { chat, username } = req.body;
      const settingsRepository = getCustomRepository(SettingsRepository);

      const settings = settingsRepository.create({
        chat,
        username,
      });

      await settingsRepository.save(settings);

      return res.json(settings);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao criar a configuração." });
    }
  }

  async show(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const settingsRepository = getCustomRepository(SettingsRepository);

      const setting = await settingsRepository.findOneOrFail(id);

      return res.json(setting);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar a configuração." });
    }
  }

  async index(req: Request, res:Response): Promise<any> {
    try {
      const settingsRepository = getCustomRepository(SettingsRepository);

      const settings = await settingsRepository.find();

      return res.json(settings);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar as configurações." });
    }
  }

  async delete(req: Request, res:Response): Promise<any> {
    try {
      const { id } = req.params;

      const settingsRepository = getCustomRepository(SettingsRepository);

      await settingsRepository.delete(id);

      return res.json({ message: "Configuração deletada com sucesso." });
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar as configurações." });
    }
  }
}

export { SettingsController };
