import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';
import initialState from './initialState';

// Consider using immutable.js here

export default function modalReducer(state = initialState.modal, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isOpen: !state.isOpen,
        data: action.data
      };

    case HIDE_MODAL:
      return initialState.modal;

    default:
      return state;
  }
}
