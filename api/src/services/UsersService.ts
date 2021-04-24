import { getCustomRepository } from "typeorm";

import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string): Promise<any> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({
      email,
    });

    if (userExists) return userExists;

    const user = usersRepository.create({
      email,
    });

    return await usersRepository.save(user);
  }

  async show(id: string): Promise<any> {
    const usersRepository = getCustomRepository(UsersRepository);

    return await usersRepository.findOneOrFail(id);
  }

  async index(): Promise<any> {
    const usersRepository = getCustomRepository(UsersRepository);

    return await usersRepository.find();
  }

  async delete(id: string): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);

    await usersRepository.delete(id);
  }
}

export { UsersService };
