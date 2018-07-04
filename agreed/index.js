const { UserResponse } = require('./models/responses');

const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:8080',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Credentials': true,
};

module.exports = [
  {
    request: {
      path: '/users/:id',
      method: 'GET',
    },
    response: {
      headers,
      body: new UserResponse(),
    },
  },
];
