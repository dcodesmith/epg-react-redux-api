import { SELECT_DATE } from './actionTypes';
import { navigatePage } from './navigationActions';

export const goToNextDate = index => ({ type: SELECT_DATE, index });

export const move = index => (dispatch, getState) => {
  const offset = -Math.abs(getState().offset);

  dispatch(goToNextDate(index));
  dispatch(navigatePage(offset));
};
