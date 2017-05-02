import { NEXT_DATE, PREVIOUS_DATE } from '../actions/actionTypes';
import initialState from './initialState';

export default function dateSelectorReducer(state = initialState.selectedDateIndex, action) {
  if (action.type === NEXT_DATE) {
    return action.index;
  } else if (action.type === PREVIOUS_DATE) {
    return state - 1;
  }

  return state;
}
