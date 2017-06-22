import qs from 'querystring';

/* *********************************** */
/* let capi = new ChannelApi(api_url); */
/* capi.readAll();                     */
/* *********************************** */
const API_URL = 'http://localhost:8010/v1/programmes';

class ProgrammeApi {
  constructor(url) {
    this.url = url;
  }

  static create(data) {
    const url = `${this.url}/import`;
    return fetch(url, {
      method: 'POST',
      body: data
    }).then(response => response.json());
  }

  static readAll(query) {
    let url = this.url;
    let queryString;

    if (query) {
      queryString = qs.stringify(query);
      url += `?${queryString}`;
    }

    return fetch(url).then(response => response.json());
  }

  static update(data) {}

  static delete(id) {
    const url = this.url;

    return fetch(url, {
      method: 'DELETE'
    }).then((response) => {
      if (response.ok && response.status === '204') {
        return [];
      }
    });
  }

}

export default ProgrammeApi;
