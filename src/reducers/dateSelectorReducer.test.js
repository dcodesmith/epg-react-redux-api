import reducer from './dateSelectorReducer';
import { SELECT_DATE } from '../actions/actionTypes';
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

  describe('Given an action type: SELECT_DATE', () => {
    const type = SELECT_DATE;

    describe('and an new index is selected', () => {
      const index = 1;

      beforeAll(() => {
        state = reducer(undefined, { type, index });
      });

      it('should return a state of 1', () => {
        expect(state).toEqual(1);
      });
    });

    describe('and another index is selected', () => {
      const index = 1;

      beforeAll(() => {
        state = reducer(undefined, { type, index });
      });

      it('should return a state of 0', () => {
        expect(state).toEqual(1);
      });
    });
  });
});
