import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export const showModal = data => ({ type: SHOW_MODAL, data });

export const hideModal = () => ({ type: HIDE_MODAL });