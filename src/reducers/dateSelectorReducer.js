import { SELECT_DATE } from '../actions/actionTypes';
import initialState from './initialState';

export default function dateSelectorReducer(state = initialState.selectedDateIndex, action) {
  if (action.type === SELECT_DATE) {
    return action.index;
  }

  return state;
}
