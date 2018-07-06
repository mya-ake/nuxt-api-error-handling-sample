const faker = require('faker');

const { User, UserResponse, ErrorResponse } = require('./../../models');
const { create } = require('./../../helpers/create');

const user = create({
  path: '/users/:id',
  body: new UserResponse({
    user: new User({
      id: '{:id}',
      name: `${faker.name.findName()}`,
    }),
  }),
});

const notFounduser = create({
  status: 404,
  path: '/users/0',
  body: new ErrorResponse({ message: 'Not found' }),
});

module.exports = [notFounduser, user];
