import { getCustomRepository } from "typeorm";

import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate{
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesService {
  private messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, text, user_id }: IMessageCreate): Promise<any> {
    const user = this.messagesRepository.create({
      admin_id, user_id, text,
    });

    return await this.messagesRepository.save(user);
  }

  async listByUser(user_id: string): Promise<any> {
    return await this.messagesRepository.find({
      where: { user_id },
      relations: ["user"],
    });
  }

  async index(): Promise<any> {
    return await this.messagesRepository.find();
  }

  async delete(id: string): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}

export { MessagesService };
