import { Request, Response } from "express";

import { UsersService } from "../services/UsersService";

const usersService = new UsersService();

class UsersController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;

      const user = await usersService.create(email);

      return res.json(user);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao criar o usuário." });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const setting = await usersService.show(id);

      return res.json(setting);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar o usuário." });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const settings = await usersService.index();

      return res.json(settings);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar os usuários." });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      await usersService.delete(id);

      return res.json({ message: "Usuário deletado com sucesso." });
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao deletar o usuário." });
    }
  }
}

export { UsersController };
