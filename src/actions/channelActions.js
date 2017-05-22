import { LOAD_CHANNELS_SUCCESS } from './actionTypes';
import channelApi from '../api/channelApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadChannelsSuccess(channels) {
  return { type: LOAD_CHANNELS_SUCCESS, channels };
}

// export function updateChannelSuccess(channel) {
//   return { type: UPDATE_CHANNEL_SUCCESS, channel };
// }
//
// export function createChannelSuccess(channel) {
//   return { type: CREATE_CHANNEL_SUCCESS, channel };
// }

export function loadChannels() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return channelApi.readAll().then((channels) => {
      dispatch(loadChannelsSuccess(channels));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}
