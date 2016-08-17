// import fetch from 'isomorphic-fetch';
// import delay from './delay';

//
// // This file mocks a web API by working with the hard-coded data below.
// // It uses setTimeout to simulate the delay of an AJAX call.
// // All calls return promises.
// const channels = [{
//   id: 0,
//   name: "BBC One"
// }, {
//   id: 1,
//   name: "BBC Two"
// }, {
//   id: 2,
//   name: "BBC Three"
// }, {
//   id: 3,
//   name: "BBC Four"
// }];
//
// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }
//
// //This would be performed on the server in a real app. Just stubbing in.
// const generateId = (course) => {
//   return replaceAll(course.title, ' ', '-');
// };

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
