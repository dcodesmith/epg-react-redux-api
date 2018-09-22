const { REACT_APP_API_HOST } = process.env;
const API_URL = `${REACT_APP_API_HOST}/channels`;

class ChannelApi {
  static create(data) {}

  static readAll() {
    return fetch(API_URL)
      .then(response => response.json());
  }

  static update(data) {}

  static delete(id) {}
}

export default ChannelApi;
