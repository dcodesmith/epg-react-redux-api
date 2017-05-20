import { expect } from 'chai';

import reducer from './dateSelectorReducer';
import { SELECT_DATE } from '../actions/actionTypes';
import initialState from './initialState';

let state;

describe('navigation reducer', () => {
  describe('Given no action type', () => {
    before(() => {
      state = reducer(undefined, {});
    });

    it('should return the initial state', () => {
      expect(state).to.eql(initialState.offset);
    });
  });

  describe('Given an action type: SELECT_DATE', () => {
    const type = SELECT_DATE;

    describe('and an new index is selected', () => {
      const index = 1;

      before(() => {
        state = reducer(undefined, { type, index });
      });

      it('should return a state of 1', () => {
        expect(state).to.equal(1);
      });
    });

    describe('and another index is selected', () => {
      const index = 1;

      before(() => {
        state = reducer(undefined, { type, index });
      });

      it('should return a state of 0', () => {
        expect(state).to.equal(1);
      });
    });
  });
});
