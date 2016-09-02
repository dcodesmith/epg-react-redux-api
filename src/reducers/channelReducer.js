import { LOAD_CHANNELS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

// Consider using immutable.js here

export default function channelReducer(state = initialState.channels, action) {
  switch (action.type) {
    case LOAD_CHANNELS_SUCCESS:
      return action.channels;

    default:
      return state;
  }
}
