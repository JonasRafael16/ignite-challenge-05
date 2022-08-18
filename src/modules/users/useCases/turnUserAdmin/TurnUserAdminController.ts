import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    console.log(user_id);
    this.turnUserAdminUseCase.execute({ user_id });
    return response.status(201).send();
  }
}

export { TurnUserAdminController };
