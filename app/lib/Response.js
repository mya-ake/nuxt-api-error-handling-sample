export class Response {
  constructor(response) {
    this._rawResponse = response;
    this._expectStatus = 200;
    this._buildResponse();
    return this;
  }

  expectStatus(expectStatus) {
    this._expectStatus = expectStatus;
    return this;
  }

  toModel(Model) {
    if (this.isError) {
      return this;
    }
    this.data = new Model(this.data);
    return this;
  }

  get isError() {
    return this.status !== this._expectStatus;
  }

  _buildResponse() {
    const { status, data } = this._rawResponse;
    this.status = status;
    this.data = data;
  }
}
