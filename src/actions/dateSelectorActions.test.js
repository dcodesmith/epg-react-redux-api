import { SELECT_DATE, NAVIGATE_PAGE } from './actionTypes';
import { move, goToNextDate } from './dateSelectorActions';

const dispatch = jest.fn();
const getState = jest.fn();
const offset = -1;
const mockState = { offset };

describe('Date Selector Actions', () => {
  let action, EXPECTED_ACTION;

  describe('Given an index', () => {
    const index = 1;

    describe('When move action creator is invoked', () => {
      beforeAll(() => {
        getState.mockReturnValueOnce(mockState);
        action = move(index)(dispatch, getState);
      });

      it('should invoke the dispatch method with `SELECT_DATE` action', () => {
        EXPECTED_ACTION = goToNextDate(index);

        expect(dispatch).toHaveBeenCalledWith(EXPECTED_ACTION);
      });

      it('should invoke the dispatch method with `NAVIGATE_PAGE` action', () => {
        EXPECTED_ACTION = { type: NAVIGATE_PAGE, direction: -Math.abs(offset) };

        expect(dispatch).toHaveBeenCalledWith(EXPECTED_ACTION);
      });
    });

    describe('When goToNextDate is invoked', () => {
      beforeAll(() => {
        action = goToNextDate(index);
      });

      it('should return a type `SELECT_DATE`', () => {
        expect(action).toEqual({ type: SELECT_DATE, index });
      });
    });
  });
});
