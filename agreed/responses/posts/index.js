const { Post, User, PostsResponse } = require('./../../models');
const { create } = require('./../../helpers/create');

const posts = Array(3)
  .fill({})
  .map((v, index) => {
    return new Post({
      id: index,
      title: 'test',
      body: 'body text',
      user: new User({ id: '{:id}' }),
    });
  });

const usersIdPosts = create({
  path: '/users/:id/posts',
  body: new PostsResponse({ posts }),
});

module.exports = [usersIdPosts];
