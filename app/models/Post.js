import { User } from './';

export class Post {
  constructor({ id = null, title = '', body = '', user = undefined } = {}) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.user = new User(user);
  }
}
