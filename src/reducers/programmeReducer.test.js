import { expect } from 'chai';

import reducer from './programmeReducer';
import {
  LOAD_PROGRAMMES_SUCCESS,
  CREATE_PROGRAMMES_SUCCESS,
  DELETE_PROGRAMMES_SUCCESS
} from '../actions/actionTypes';
import initialState from './initialState';

let state;
const MOCK_PROGRAMMES = [{ name: 'News Night' }, { name: 'No Retreat No Surrender' }];
const ACTIONS = [{
  type: LOAD_PROGRAMMES_SUCCESS,
  programmes: MOCK_PROGRAMMES
}, {
  type: CREATE_PROGRAMMES_SUCCESS,
  programmes: MOCK_PROGRAMMES
}, {
  type: DELETE_PROGRAMMES_SUCCESS,
  programmes: []
}];

describe('Programme reducer', () => {
  describe('Given no action type', () => {
    before(() => {
      state = reducer(undefined, {});
    });

    it('should return the initial state', () => {
      expect(state).to.eql(initialState.programmes);
    });
  });

  ACTIONS.forEach((action) => {
    describe(`Given an action type: ${action.type}`, () => {
      const type = action.type;

      describe('and there are programmes', () => {
        const programmes = action.programmes;

        before(() => {
          state = reducer(undefined, { type, programmes });
        });

        it('should return programmes', () => {
          expect(state).to.eql(programmes);
        });
      });
    });
  });
});
