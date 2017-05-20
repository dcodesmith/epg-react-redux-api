import { expect } from 'chai';

import reducer from './navigationReducer';
import { NAVIGATE_PAGE } from '../actions/actionTypes';
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

  describe('Given an action type: NAVIGATE_PAGE', () => {
    const type = NAVIGATE_PAGE;

    describe('and a forward direction', () => {
      const direction = 1;

      before(() => {
        state = reducer(initialState.offset, { type, direction });
      });

      it('should return a state of 1', () => {
        expect(state).to.equal(1);
      });
    });

    describe('and a backward direction', () => {
      const direction = -1;

      before(() => {
        state = reducer(state = 1, { type, direction });
      });

      it('should return a state of 0', () => {
        expect(state).to.equal(0);
      });
    });
  });
});
