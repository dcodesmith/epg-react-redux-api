import { LOAD_CHANNELS_SUCCESS } from './actionTypes';
import ChannelApi from '../api/ChannelApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadChannelsSuccess(channels) {
  return { type: LOAD_CHANNELS_SUCCESS, channels };
}

export const loadChannels = () => async (dispatch) => {
  dispatch(beginAjaxCall());

  try {
    const channels = await ChannelApi.readAll();

    dispatch(loadChannelsSuccess(channels));
  } catch (error) {
    dispatch(ajaxCallError());
    // throw (error);
  }
};
