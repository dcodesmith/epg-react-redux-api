import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export const showModal = data => ({ type: SHOW_MODAL, data });

export const hideModal = () => ({ type: HIDE_MODAL });

// export function updateChannelSuccess(channel) {
//   return { type: UPDATE_CHANNEL_SUCCESS, channel };
// }
//
// export function createChannelSuccess(channel) {
//   return { type: CREATE_CHANNEL_SUCCESS, channel };
// }

// export function loadChannels() {
//   return (dispatch) => {

//   };
// }
