class Resources {
  constructor({ axios, responseBuiler = null }) {
    this.axios = axios;
    this._responseBuiler = responseBuiler;
  }

  async get(url, config) {
    const response = await this.axios
      .get(url, config)
      .catch(err => err.response);
    return this._buildResponse(response);
  }

  _buildResponse(response) {
    if (typeof this._responseBuiler !== 'function') {
      return response;
    }
    return this._responseBuiler(response);
  }
}

export const build = ({ axios, responseBuiler }) => {
  return new Resources({ axios, responseBuiler });
};
