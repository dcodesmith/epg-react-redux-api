import { NAVIGATE_PAGE } from './actionTypes';

export const navigatePage = direction => ({ type: NAVIGATE_PAGE, direction });

export const navigate = direction => (dispatch) => {
  // @TODO: navigate to next date when the last time/show is reached.
  // const { offset, selectedDateIndex } = getState();
  // let newSelectedDateIndex;

  // if (offset >= 18) {
  //   newSelectedDateIndex = selectedDateIndex + 1;
  //   dispatch(goToNextDate(newSelectedDateIndex));
  //   dispatch(navigatePage(-Math.abs(offset)));
  //   return;
  // }

  dispatch(navigatePage(direction));
};
