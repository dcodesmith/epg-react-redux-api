import { SELECT_DATE } from './actionTypes';

const goToNextDate = index => ({
  type: SELECT_DATE,
  index
});

export const move = index => (dispatch) => {
  dispatch(goToNextDate(index));
};
