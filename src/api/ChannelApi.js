import fetch from 'isomorphic-fetch';

const host = process.env.NODE_ENV === 'production' ? 'http://localhost:8010' : 'api.dcodesmith.com';
const API_URL = `${host}/v1/channels`;

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
