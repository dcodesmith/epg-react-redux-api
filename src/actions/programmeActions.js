import {
  LOAD_PROGRAMMES_SUCCESS,
  CREATE_PROGRAMMES_SUCCESS,
  DELETE_PROGRAMMES_SUCCESS
} from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import programmeApi from '../api/programmeApi';

export function loadProgrammesSuccess(programmes) {
  return { type: LOAD_PROGRAMMES_SUCCESS, programmes };
}

export function createProgrammeSuccess(programmes) {
  return { type: CREATE_PROGRAMMES_SUCCESS, programmes };
}

export function deteleProgrammeSuccess(programmes) {
  return { type: DELETE_PROGRAMMES_SUCCESS, programmes };
}

// export function updateChannelSuccess(channel) {
//   return { type: UPDATE_CHANNEL_SUCCESS, channel };
// }
//
// export function createChannelSuccess(channel) {
//   return { type: CREATE_CHANNEL_SUCCESS, channel };
// }

export function createProgrammes(data) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return programmeApi.create(data).then((programmes) => {
      dispatch(createProgrammeSuccess(programmes));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}

export function loadProgrammes() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return programmeApi.readAll({ populate: 'channel' }).then((programmes) => {
      dispatch(loadProgrammesSuccess(programmes));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}

export function deleteProgrammes() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return programmeApi.delete().then((programmes) => {
      dispatch(deteleProgrammeSuccess(programmes));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}
