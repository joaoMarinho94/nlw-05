import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate): Promise<any> {
    const settingsRepository = getCustomRepository(SettingsRepository);

    const userAlreadyExists = await settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) throw new Error("User already exists.");

    const settings = settingsRepository.create({
      chat,
      username,
    });

    return await settingsRepository.save(settings);
  }

  async show(id: string): Promise<any> {
    const settingsRepository = getCustomRepository(SettingsRepository);

    return await settingsRepository.findOneOrFail(id);
  }

  async index(): Promise<any> {
    const settingsRepository = getCustomRepository(SettingsRepository);

    return await settingsRepository.find();
  }

  async delete(id: string): Promise<void> {
    const settingsRepository = getCustomRepository(SettingsRepository);

    await settingsRepository.delete(id);
  }
}

export { SettingsService };
