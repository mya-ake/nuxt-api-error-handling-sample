export class Resources {
  constructor({ axios, responseBuilder = null }) {
    this._axios = axios;
    this._responseBuilder = responseBuilder;
  }

  async get(url, config) {
    const response = await this._axios
      .get(url, config)
      .catch(err => err.response);
    return this._buildResponse(response);
  }

  _buildResponse(response) {
    if (typeof this._responseBuilder !== 'function') {
      return response;
    }
    return this._responseBuilder(response);
  }
}
