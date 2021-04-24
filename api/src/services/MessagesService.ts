import { getCustomRepository } from "typeorm";

import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate{
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesService {
  async create({ admin_id, text, user_id }: IMessageCreate): Promise<any> {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const user = messagesRepository.create({
      admin_id, user_id, text,
    });

    return await messagesRepository.save(user);
  }

  async listByUser(user_id: string): Promise<any> {
    const messagesRepository = getCustomRepository(MessagesRepository);

    return await messagesRepository.find({
      where: { user_id },
      relations: ["user"],
    });
  }

  async index(): Promise<any> {
    const messagesRepository = getCustomRepository(MessagesRepository);

    return await messagesRepository.find();
  }

  async delete(id: string): Promise<void> {
    const messagesRepository = getCustomRepository(MessagesRepository);

    await messagesRepository.delete(id);
  }
}

export { MessagesService };
