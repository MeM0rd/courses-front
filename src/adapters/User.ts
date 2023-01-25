import { Raw } from '@/@types/Raw';

export default class User {
  public id: number|null;
  public email: string|null;
  public name: string|null;

  constructor(raw: Raw) {
    this.id = Number(raw['id']);
    this.email = String(raw['email'] || '');
    this.name = String(raw['name'] || '');
  }

  static fromRaw(raw: Raw): User {
    return new User(raw);
  }
}
