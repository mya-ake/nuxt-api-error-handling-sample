import { Post } from './../Post';

export class PostResponse {
  constructor({ post } = {}) {
    this.post = new Post(post);
  }
}
