import { NEXT_PAGE, PREVIOUS_PAGE, NAVIGATE_PAGE } from './actionTypes';

const navigateToNextPage = () => ({
  type: NEXT_PAGE,
  value: 1
});

const navigateToPreviousPage = () => ({
  type: PREVIOUS_PAGE,
  value: -1
});

const navigatePage = (direction) => ({
  type: NAVIGATE_PAGE,
  direction
});

export const navigate = direction => (dispatch) => {
  dispatch(navigatePage(direction));
};
