const baseHeaders = {
  'Access-Control-Allow-Origin': 'http://localhost:8080',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
};

const createRequest = ({ method = 'GET', path }) => {
  return {
    method,
    path,
  };
};

const createResponse = ({ status = 200, headers = {}, body }) => {
  return {
    status,
    headers: {
      ...baseHeaders,
      ...headers,
    },
    body,
  };
};

const create = args => {
  return {
    request: createRequest(args),
    response: createResponse(args),
  };
};

module.exports = {
  createRequest,
  createResponse,
  create,
};
