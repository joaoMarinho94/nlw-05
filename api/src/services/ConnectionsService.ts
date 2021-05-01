import { getCustomRepository } from "typeorm";

import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsService {
  private connectionsRepository: ConnectionsRepository;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate): Promise<any> {
    const connection = this.connectionsRepository.create({
      socket_id,
      user_id,
      admin_id,
      id,
    });

    return await this.connectionsRepository.save(connection);
  }

  async findByUserId(user_id: string): Promise<any> {
    return await this.connectionsRepository.findOne({ user_id });
  }

  async findAllWithoutAdmin(): Promise<any> {
    return await this.connectionsRepository.find({
      where: {
        admin_id: null,
      },
      relations: ["user"],
    });
  }

  async findBySocketID(socket_id: string): Promise<any> {
    return await this.connectionsRepository.findOne({ socket_id });
  }

  async updateAdminID(user_id: string, admin_id: string): Promise<any> {
    await this.connectionsRepository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where("user_id = :user_id", {
        user_id,
      })
      .execute();
  }
}

export { ConnectionsService };
