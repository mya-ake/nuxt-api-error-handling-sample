import axios from 'axios';
import { Resources } from '~/lib/resources';
import { Response } from '~/lib/Response';

const responseBuilder = response => {
  return new Response(response);
};

export default (ctx, inject) => {
  const client = axios.create({
    baseURL: 'http://localhost:8081',
  });

  const resources = new Resources({ axios: client, responseBuilder });
  inject('_resources', resources);
};
