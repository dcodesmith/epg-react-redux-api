import qs from 'querystring';

/* *********************************** */
/* let capi = new ChannelApi(api_url); */
/* capi.readAll();                     */
/* *********************************** */
const API_URL = 'http://localhost:8010/api/programmes';

class ProgrammeApi {

  static create(data) {
    let url = `${API_URL}/import`;

    return fetch(url, {
      method: 'POST',
      body: data
    }).then(response => {
      return response.json();
    });
  }

  static readAll(query) {
    let url = API_URL;
    let queryString;

    if (query) {
      queryString = qs.stringify(query);
      url += `?${queryString}`;
    }

    return fetch(url).then(response => {
      return response.json();
    });
  }

  static update(data) {}

  static delete(id) {
    return fetch(API_URL, {
      method: 'DELETE'
    }).then(response => {
      return response.json();
    });
  }

}

export default ProgrammeApi;
