import express, { Express, Request, Response } from 'express';
import {UsersService} from "./services/users-service";

const app: Express = express();
const port = 3000;

app.use(express.json());

app.post('/users', (req: Request , res: Response) => {
    const user = UsersService.findUserByPoid(req.body.poid);

    if (!user) {
        res.status(404).send(`User with poid = ${req.body.poid} not found`);
        return;
    }

    if (UsersService.lockUser(user)) {
        res.status(200).send(user);
    } else {
        res.status(400).send(`User with poid = ${req.body.poid} already locked`);
    }
})

app.delete('/users/:poid', (req: Request , res: Response) => {
    const user = UsersService.findUserByPoid(Number(req.params.poid));

    if (!user) {
        res.status(404).send(`User with poid = ${req.params.poid} not found`);
        return;
    }

    if (UsersService.unlockUser(user)) {
        res.status(200).send(user);
    } else {
        res.status(400).send(`User with poid = ${req.params.poid} is not locked`);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})