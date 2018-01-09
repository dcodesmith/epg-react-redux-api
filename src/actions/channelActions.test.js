import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import chai, { expect } from 'chai';

import { LOAD_CHANNELS_SUCCESS, BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import ChannelApi from '../api/ChannelApi';
import { loadChannels } from './channelActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const payload = [{ name: 'Random Channel' }];

describe('Given channel actions', () => {
  let store;
  let actualActions;
  let expectedActions;

  const readAll = sinon.stub(ChannelApi, 'readAll');

  beforeAll(() => {
    store = mockStore({});
  });

  beforeEach(async() => {
    store.dispatch(loadChannels());
    actualActions = store.getActions();
  });

  afterEach(() => {
    store.clearActions();
    readAll.reset();
  });

  describe('when the call to the API is successful', () => {
    beforeAll(async () => {
      await readAll.resolves(payload);
    });

    it('should dispatch `BEGIN_AJAX_CALL` and `LOAD_CHANNELS_SUCCESS` actions', () => {
      expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: LOAD_CHANNELS_SUCCESS, channels: payload }];

      expect(actualActions).to.eql(expectedActions);
    });
  });

  describe('when the call to the API is unsuccessful', () => {
    beforeAll(async () => {
      await readAll.rejects();
    });

    it('should dispatch `BEGIN_AJAX_CALL` and `AJAX_CALL_ERROR` actions', () => {
      expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: AJAX_CALL_ERROR }];

      expect(actualActions).to.eql(expectedActions);
    });
  });
});
