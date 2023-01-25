import {Raw} from "@/@types/Raw";

export default class Subscription {
    public id: number;
    public userId: number;
    public name: string;
    public cost: number;
    public currency: string;
    public note: string;

    constructor(raw: Raw) {
        this.id = Number(raw['id']);
        this.userId = Number(raw['user_id']);
        this.name = String(raw['name']);
        this.cost = Number(raw['cost']);
        this.currency = String(raw['currency']);
        this.note = String(raw['note']);
    }

    static fromRaw(raw: Raw): Subscription {
        return new Subscription(raw);
    }
}
