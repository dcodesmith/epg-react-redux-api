import qs from 'querystring';

const { REACT_APP_API_HOST } = process.env;
const API_URL = `${REACT_APP_API_HOST}/programmes`;

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

  static delete(id) {
    const url = API_URL;

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
