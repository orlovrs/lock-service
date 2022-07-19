import {Status} from "./status";

export class User {
    private poid: number;
    private name: string;
    private status: Status;

    constructor(poid: number, name: string, status: Status) {
        this.poid = poid;
        this.name = name;
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status: Status) {
        this.status = status;
    }

    getPoid() {
        return this.poid;
    }

    setPoid(poid: number) {
        this.poid = poid;
    }
}