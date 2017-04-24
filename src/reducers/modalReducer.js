import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';
import initialState from './initialState';

// Consider using immutable.js here

export default function modalReducer(state = initialState.isOpen, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return !initialState.isOpen;

    case HIDE_MODAL:
      return initialState.isOpen;

    default:
      return state;
  }
}
