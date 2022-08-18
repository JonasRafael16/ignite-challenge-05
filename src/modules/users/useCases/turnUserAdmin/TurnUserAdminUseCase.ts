import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    if (!user_id) {
      throw new Error("inform a id of user");
    }
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("user not found!");
    }
    const changedUser = this.usersRepository.turnAdmin(user);
    return changedUser;
  }
}

export { TurnUserAdminUseCase };
