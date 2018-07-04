module.exports = [
  {
    request: {
      path: '/user/:id',
      method: 'GET',
      query: {
        q: '{:someQueryStrings}',
      },
      values: {
        id: 'yosuke',
        someQueryStrings: 'foo',
      },
    },
    response: {
      headers: {
        'x-csrf-token': 'csrf-token',
      },
      body: {
        message: '{:greeting} {:id} {:someQueryStrings}',
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
