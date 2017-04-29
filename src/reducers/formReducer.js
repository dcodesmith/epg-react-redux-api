import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';
import initialState from './initialState';

export default function formReducer(state = initialState.form, action) {
  switch (action.type) {
    case SUBMIT_FORM: {}

    default:
      return state;
  }
}
