import { Post } from './../Post';

export class PostsResponse {
  constructor({ posts } = {}) {
    this.posts = posts.map(post => new Post(post));
  }
}
