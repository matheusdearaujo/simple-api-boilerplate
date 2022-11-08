import { Request, Response } from "express";
import { CreateUsersService } from "./create.users";
import { CreateUserDTO } from "./create-user.dto";

export class CreateUsersController {
  constructor(private readonly _createUsersService: CreateUsersService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password }: CreateUserDTO = request.body;

      await this._createUsersService.execute({
        name,
        email,
        password,
      });

      return response
        .status(201)
        .json({ message: "User created successfully" });
    } catch (error: any) {
      return response
        .status(500)
        .json({ message: error.message || "Erro interno de servidor." });
    }
  }
}
