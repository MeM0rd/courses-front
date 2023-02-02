import {Raw} from "@/@types/Raw";

export default class Subscription {
    public userId: number;
    public text: string;

    constructor(raw: Raw) {
        this.userId = Number(raw['user_id']);
        this.text = String(raw['text']);
    }

    static fromRaw(raw: Raw): Subscription {
        return new Subscription(raw);
    }
}
