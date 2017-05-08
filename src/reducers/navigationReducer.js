import { NAVIGATE_PAGE } from '../actions/actionTypes';
import initialState from './initialState';

export default function navigationReducer(state = initialState.offset, action) {
  if (action.type === NAVIGATE_PAGE) {
    return state + action.direction;
  }

  return state;
}
