// import fetch from 'isomorphic-fetch';

/* *********************************** */
/* let capi = new ChannelApi(api_url); */
/* capi.readAll();                     */
/* *********************************** */

class ChannelApi {

  static create(data) {}

  static readAll() {
    return fetch('http://localhost:8010/api/channels').then(response => {
      return response.json();
    });
  }

  static update(data) {}

  static delete(id) {}

}

export default ChannelApi;
