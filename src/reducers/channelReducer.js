import { LOAD_CHANNELS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

// Consider using immutable.js here

export default function channelReducer(state = initialState.channels, action) {
  switch (action.type) {
    case LOAD_CHANNELS_SUCCESS:
      return action.channels;

    // case CREATE_COURSE_SUCCESS:
    //   return [
    //     ...state,
    //     Object.assign({}, action.course)
    //   ];
    //
    // case UPDATE_COURSE_SUCCESS:
    //   return [
    //     ...state.filter(course => course.id !== action.course.id),
    //     Object.assign({}, action.course)
    //   ];

    default:
      return state;
  }
}
