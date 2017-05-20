import { expect } from 'chai';

import reducer from './ajaxStatusReducer';
import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR, LOAD_CHANNELS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

let state;

describe.only('AJAX Status Reducer', () => {
  describe('Given no action type', () => {
    before(() => {
      state = reducer(undefined, {});
    });

    it('should return the initial state', () => {
      expect(state).to.eql(initialState.ajaxCallsInProgress);
    });
  });

  describe('Given an action type: BEGIN_AJAX_CALL', () => {
    const type = BEGIN_AJAX_CALL;

    before(() => {
      state = reducer(initialState.ajaxCallsInProgress, { type });
    });

    it('should have to 1 ajax calls in progress', () => {
      expect(state).to.equal(1);
    });
  });
});
