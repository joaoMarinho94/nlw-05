import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string
}

class SettingsService {
  private settingsRepository: SettingsRepository;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate): Promise<any> {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) throw new Error("User already exists.");

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    return await this.settingsRepository.save(settings);
  }

  async findByUsername(username: string): Promise<any> {
    return await this.settingsRepository.findOneOrFail({ username });
  }

  async show(id: string): Promise<any> {
    return await this.settingsRepository.findOneOrFail(id);
  }

  async index(): Promise<any> {
    return await this.settingsRepository.find();
  }

  async delete(id: string): Promise<void> {
    await this.settingsRepository.delete(id);
  }
}

export { SettingsService };
