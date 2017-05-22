import { NAVIGATE_PAGE } from './actionTypes';

const navigatePage = direction => ({ type: NAVIGATE_PAGE, direction });

export const navigate = direction => (dispatch) => {
  dispatch(navigatePage(direction));
};
