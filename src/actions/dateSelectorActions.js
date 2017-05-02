import { PREVIOUS_DATE, NEXT_DATE } from './actionTypes';

const goToNextDate = index => ({
  type: NEXT_DATE,
  index
});

export const move = index => (dispatch) => {
  dispatch(goToNextDate(index));
};
