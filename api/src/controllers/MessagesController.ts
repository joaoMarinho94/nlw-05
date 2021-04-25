import { Request, Response } from "express";

import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { admin_id, text, user_id } = req.body;

      const messagesService = new MessagesService();
      const user = await messagesService.create({ admin_id, text, user_id });

      return res.json(user);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao criar a mensagem." });
    }
  }

  async indexByUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const messagesService = new MessagesService();
      const setting = await messagesService.listByUser(id);

      return res.json(setting);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar a mensagem." });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const messagesService = new MessagesService();
      const settings = await messagesService.index();

      return res.json(settings);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar todas as mensagens." });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const messagesService = new MessagesService();
      await messagesService.delete(id);

      return res.json({ message: "Mensagem deletada com sucesso." });
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao deletar a mensagem." });
    }
  }
}

export { MessagesController };
