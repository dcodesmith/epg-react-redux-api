import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

import { LOAD_CHANNELS_SUCCESS, BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import ChannelApi from '../api/ChannelApi';
import { loadChannels } from './channelActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const payload = [{
  arrivalTime: '2017-10-04T12:39:00.000Z',
  departureTime: '2017-10-04T11:13:00.000Z',
  duration: 'PT1H26M',
  numberOfChanges: 0
}];

describe.skip('Given channel actions', () => {
  let expectedActions;
  let store;
  let req;

  const readAll = sinon.stub(ChannelApi, 'readAll');

  beforeAll(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
    store.clearActions();
    readAll.reset();
  });

  describe('when the call to the API is successful', () => {
    beforeAll(async () => {
      await readAll.resolves(payload);
    });

    it('should dispatch `BEGIN_AJAX_CALL` and `LOAD_CHANNELS_SUCCESS` actions', (done) => {
      store.dispatch(loadChannels())
        .then(() => {
          expect(store.getActions()).to.eql([{ type: BEGIN_AJAX_CALL }, { type: LOAD_CHANNELS_SUCCESS, channels: payload }]);
          done();
        })
        .catch(done);
    });
  });

  describe('when the call to the API is unsuccessful', () => {
    beforeAll(async () => {
      await readAll.rejects();
    });

    it('should dispatch `BEGIN_AJAX_CALL` and `AJAX_CALL_ERROR` actions', (done) => {
      store.dispatch(loadChannels())
        .then(() => {
          expect(store.getActions()).to.eql([{ type: BEGIN_AJAX_CALL }, { type: AJAX_CALL_ERROR }]);
          done();
        })
        .catch(done);
    });
  });
});
