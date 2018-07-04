export class Post {
  constructor({ id = null, title = '', body = '' } = {}) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
