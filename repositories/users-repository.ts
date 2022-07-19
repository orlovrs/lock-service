import {User} from "../models/user";
import {faker} from "@faker-js/faker";
import {Status} from "../models/status";

export class UsersRepository {

    private static users: Array<User> = [
        new User(1, faker.name.findName(), Status.FREE),
        new User(2, faker.name.findName(), Status.FREE),
        new User(3, faker.name.findName(), Status.FREE),
        new User(4, faker.name.findName(), Status.FREE),
        new User(5, faker.name.findName(), Status.FREE),
        new User(6, faker.name.findName(), Status.FREE),
        new User(7, faker.name.findName(), Status.FREE),
        new User(8, faker.name.findName(), Status.FREE),
        new User(9, faker.name.findName(), Status.LOCKED),
        new User(10, faker.name.findName(), Status.LOCKED)
    ];

    static getByPoid(poid: number): User | undefined {
        return this.users.find(u => u.getPoid() === poid);
    }

    static save(user: User): User {
        if (!this.users.some(u => u === user)) {
            const maxId = Math.max(...this.users.map(u => u.getPoid()));
            user.setPoid(maxId + 1);
            this.users.push(user);
        }

        return user;
    }
}