import qs from 'querystring';

/* *********************************** */
/* let capi = new ChannelApi(api_url); */
/* capi.readAll();                     */
/* *********************************** */
const API_URL = 'http://localhost:8010/v1/programmes';

class ProgrammeApi {

  static create(data) {
    const url = `${API_URL}/import`;

    return fetch(url, {
      method: 'POST',
      body: data
    }).then(response => response.json());
  }

  static readAll(query) {
    let url = API_URL;
    let queryString;

    if (query) {
      queryString = qs.stringify(query);
      url += `?${queryString}`;
    }

    return fetch(url).then(response => response.json());
  }

  static update(data) {}

  static delete(id) {
    return fetch(API_URL, {
      method: 'DELETE'
    }).then((response) => {
      if (response.ok && response.status === '204') {
        return [];
      }
    });
  }

}

export default ProgrammeApi;
