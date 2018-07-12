import { Resources } from './Resources';

export const build = ({ axios, responseBuilder }) => {
  return new Resources({ axios, responseBuilder });
};
