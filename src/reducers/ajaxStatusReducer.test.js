import reducer from './ajaxStatusReducer';
import {
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR,
  LOAD_CHANNELS_SUCCESS
} from '../actions/actionTypes';
import initialState from './initialState';

describe('AJAX Status Reducer', () => {
  let state;

  describe('Given no action type', () => {
    beforeAll(() => {
      state = reducer(undefined, {});
    });

    it('should return the initial state', () => {
      expect(state).toEqual(initialState.ajaxCallsInProgress);
    });
  });

  describe('Given an action type: BEGIN_AJAX_CALL', () => {
    const type = BEGIN_AJAX_CALL;

    describe('and there are no ajax calls in progress', () => {
      const ajaxCallsInProgress = 0;

      beforeAll(() => {
        state = reducer(initialState.ajaxCallsInProgress, { type });
      });

      it('should have to 1 ajax calls in progress', () => {
        expect(state).toEqual(1);
      });
    });
  });

  describe('Given succesful action type', () => {
    const type = 'A_RANDOM_SUCCESS';

    describe('and there is 1 ajax call in progress', () => {
      const ajaxCallsInProgress = 1;

      beforeAll(() => {
        state = reducer(ajaxCallsInProgress, { type });
      });

      it('should have to 0 ajax calls in progress', () => {
        expect(state).toEqual(0);
      });
    });
  });

  describe('Given an action type: AJAX_CALL_ERROR', () => {
    const type = AJAX_CALL_ERROR;

    describe('and there is 1 ajax call in progress', () => {
      const ajaxCallsInProgress = 1;

      beforeAll(() => {
        state = reducer(ajaxCallsInProgress, { type });
      });

      it('should have to 0 ajax calls in progress', () => {
        expect(state).toEqual(0);
      });
    });
  });
});
