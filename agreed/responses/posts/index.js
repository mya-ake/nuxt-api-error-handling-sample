const faker = require('faker');

const { Post, User, PostsResponse } = require('./../../models');
const { create } = require('./../../helpers/create');

const user = new User({
  id: '{:id}',
  name: `${faker.name.findName()}`,
});

const posts = Array(3)
  .fill({})
  .map((v, index) => {
    return new Post({
      id: index,
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(),
      user,
    });
  });

const usersIdPosts = create({
  path: '/users/:id/posts',
  body: new PostsResponse({ posts }),
});

module.exports = [usersIdPosts];
