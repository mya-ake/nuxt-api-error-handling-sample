import axios from 'axios';
import { build } from '~/lib/resources';

import { Response } from '~/lib/Response';

const responseBuilder = response => {
  return new Response(response);
};

export default (ctx, inject) => {
  const client = axios.create({
    baseURL: 'http://localhost:8081',
  });

  inject('_resources', build({ axios: client, responseBuilder }));
};
