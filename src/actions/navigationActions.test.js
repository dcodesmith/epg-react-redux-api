import { NAVIGATE_PAGE } from './actionTypes';
import { navigatePage, navigate } from './navigationActions';

const dispatchSpy = jest.fn();

describe('Navigation Actions', () => {
  let action;

  describe('Given a direction', () => {
    const direction = 1;

    describe('When navigate action creator is invoked', () => {
      beforeAll(() => {
        action = navigate(direction)(dispatchSpy);
      });

      it('should return a type `SHOW_MODAL`', () => {
        expect(dispatchSpy).toHaveBeenCalledWith(navigatePage(direction));
      });
    });

    describe('When navigatePage is invoked', () => {
      beforeAll(() => {
        action = navigatePage(direction);
      });

      it('should return a type `NAVIGATE_PAGE`', () => {
        expect(action).toEqual({ type: NAVIGATE_PAGE, direction });
      });
    });
  });
});
