import { getCustomRepository } from "typeorm";

import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string): Promise<any> {
    const userExists = await this.usersRepository.findOne({
      email,
    });

    if (userExists) return userExists;

    const user = this.usersRepository.create({
      email,
    });

    return await this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<any> {
    return await this.usersRepository.findOne({ email });
  }

  async show(id: string): Promise<any> {
    return await this.usersRepository.findOneOrFail(id);
  }

  async index(): Promise<any> {
    return await this.usersRepository.find();
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

export { UsersService };
