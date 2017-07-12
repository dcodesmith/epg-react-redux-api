import { expect } from 'chai';
import sinon from 'sinon';

import configureStore from '../store/configureStore.dev';
import { LOAD_CHANNELS_SUCCESS } from './actionTypes';
import { loadChannelsSuccess } from './channelActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

const sandbox = sinon.sandbox.create();
const store = configureStore();
const dispatch = sandbox.spy(store, 'dispatch'); // OR dispatch = sandbox.spy();

// dbAPI.fetchUser = sinon.stub().returns(Promise.resolve({username: 'John'}));

const channelApi = {
  create: sandbox.stub()
};

describe('Channel Actions', () => {
  describe('Given channels', () => {
    let action;
    const channels = [{ name: 'BBC One' }, { name: 'BBC Two' }];

    describe('When channels are succesfully loaded', () => {
      before(() => {
        action = loadChannelsSuccess(channels);
      });

      it('should return a `LOAD_CHANNELS_SUCCESS` action', () => {
        expect(action).to.eql({ type: LOAD_CHANNELS_SUCCESS, channels });
      });
    });
  });
});
