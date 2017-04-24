import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export function showModal(isOpen) {
  return { type: SHOW_MODAL, isOpen: true };
}

export function hideModal(isOpen) {
  return { type: HIDE_MODAL, isOpen: false };
}

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
