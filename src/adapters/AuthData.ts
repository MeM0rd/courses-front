import {Raw} from '@/@types/Raw';
import {onlyDigits} from '@/utils/string';

export default class AuthData
{
    public name: string;
    public phone: string;
    public email: string|null;
    public password: string|null;

    constructor(raw: Raw) {
        this.name = raw['name'];
        this.phone = raw['phone'];
        this.email = 'ajsdajk';
        this.password = raw['password'] ? raw['password'] : null;
    }

    static toRaw(authData: AuthData): Raw {
        const raw: Raw = {};

        raw['name'] = authData.name;
        raw['phone'] = onlyDigits(authData.phone);
        raw['email'] = authData.email ? authData.email : null;
        raw['password'] = authData.password;

        return raw;
    }

    static fromRaw(raw: Raw): AuthData {
        return new AuthData(raw);
    }
}
