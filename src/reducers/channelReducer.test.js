import { expect } from 'chai';

import reducer from './channelReducer';
import { LOAD_CHANNELS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

let state;

describe('Channel reducer', () => {
  describe('Given no action type', () => {
    beforeAll(() => {
      state = reducer(undefined, {});
    });

    it('should return the initial state', () => {
      expect(state).to.eql(initialState.channels);
    });
  });

  describe('Given an action type: LOAD_CHANNELS_SUCCESS', () => {
    const type = LOAD_CHANNELS_SUCCESS;

    describe('and there are channels', () => {
      const channels = [{ name: 'BBC ONE' }];

      beforeAll(() => {
        state = reducer(initialState.offset, { type, channels });
      });

      it('should return channels', () => {
        expect(state).to.equal(channels);
      });
    });
  });
});
