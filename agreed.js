const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:8080',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Credentials': true,
};

module.exports = [
  {
    request: {
      path: '/user/:id',
      method: 'GET',
      values: {
        id: 'yosuke',
        someQueryStrings: 'foo',
      },
    },
    response: {
      headers,
      body: {
        message: '{:greeting} {:id}',
        images: '{:images}',
        themes: '{:themes}',
      },
      values: {
        greeting: 'hello',
        images: ['http://example.com/foo.jpg', 'http://example.com/bar.jpg'],
        themes: {
          name: 'green',
        },
      },
    },
  },
];
