import { User } from './../';

export class UserResponse {
  constructor({ user } = {}) {
    this.user = new User(user);
  }
}
