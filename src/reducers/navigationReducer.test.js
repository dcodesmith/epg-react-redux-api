import reducer from './navigationReducer';
import { NAVIGATE_PAGE } from '../actions/actionTypes';
import initialState from './initialState';

let state;

describe('navigation reducer', () => {
  describe('Given no action type', () => {
    beforeAll(() => {
      state = reducer(undefined, {});
    });

    it('should return the initial state', () => {
      expect(state).toEqual(initialState.offset);
    });
  });

  describe('Given an action type: NAVIGATE_PAGE', () => {
    const type = NAVIGATE_PAGE;

    describe('and a forward direction', () => {
      const direction = 1;

      beforeAll(() => {
        state = reducer(initialState.offset, { type, direction });
      });

      it('should return a state of 1', () => {
        expect(state).toEqual(1);
      });
    });

    describe('and a backward direction', () => {
      const direction = -1;

      beforeAll(() => {
        state = reducer(state = 1, { type, direction });
      });

      it('should return a state of 0', () => {
        expect(state).toEqual(0);
      });
    });
  });
});
