import {UsersRepository} from "../repositories/users-repository";
import {Status} from "../models/status";
import {User} from "../models/user";

export class UsersService {

    public static lockUser(user: User): User | undefined {
        if (user.getStatus() === Status.FREE) {
            user.setStatus(Status.LOCKED);
            return UsersRepository.save(user);
        }

        return undefined;
    }

    static unlockUser(user: User) {
        if (user.getStatus() === Status.LOCKED) {
            user.setStatus(Status.FREE);
            return UsersRepository.save(user);
        }

        return undefined;
    }

    static findUserByPoid(poid: number): User | undefined {
        return UsersRepository.getByPoid(poid);
    }
}