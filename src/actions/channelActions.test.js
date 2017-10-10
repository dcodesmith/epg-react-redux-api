import chai, { expect } from 'chai';
import nock from 'nock';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import configureStore from '../store/configureStore.prod';
import { LOAD_CHANNELS_SUCCESS } from './actionTypes';
import { loadChannelsSuccess, loadChannels } from './channelActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
// TODO: Revisit
const sandbox = sinon.sandbox.create();
const store = configureStore();
const dispatch = sandbox.spy(store, 'dispatch');

describe.skip('Channel Actions', () => {
  describe('Given channels', () => {
    let action;
    const channels = [{ name: 'BBC One' }, { name: 'BBC Two' }];

    describe('When channels are succesfully loaded', () => {
      beforeAll(() => {
        action = loadChannelsSuccess(channels);
      });

      it('should return a `LOAD_CHANNELS_SUCCESS` action', () => {
        expect(action).to.eql({ type: LOAD_CHANNELS_SUCCESS, channels });
      });
    });

    describe('When channels are succesfully requested', () => {
      const expectedData = [{ name: 'BBC One' }];

      beforeAll(() => {
        nock('http://localhost:8010')
          .get('/v1/channels')
          .reply(200, expectedData);

        loadChannels()(dispatch);
      });

      afterAll(() => {
        nock.cleanAll();
        dispatch.reset();
      });

      it('should invoke the dispatch method twice', () => {
        expect(dispatch).to.have.been.calledTwice;
      });

      it('should invoke the dispatch method with with beginAjaxCall', () => {
        expect(dispatch).to.have.been.calledWithExactly(beginAjaxCall());
      });

      it('should invoke the dispatch method with with loadChannelsSuccess', () => {
        expect(dispatch)
          .to.have.been.calledWithExactly(loadChannelsSuccess(expectedData));
      });
    });


    describe('When channels are unsuccesfully requested', () => {
      beforeAll(() => {
        nock('http://localhost:8010')
          .get('/v1/channels')
          .replyWithError();

        loadChannels()(dispatch);
      });

      afterAll(() => {
        nock.cleanAll();
        dispatch.reset();
      });

      it('should invoke the dispatch method twice', () => {
        expect(dispatch).to.have.been.calledTwice;
      });

      it('should invoke the dispatch method with with beginAjaxCall', () => {
        expect(dispatch).to.have.been.calledWithExactly(beginAjaxCall());
      });

      it('should invoke the dispatch method with with ajaxCallError', () => {
        expect(dispatch)
          .to.have.been.calledWithExactly(ajaxCallError());
      });
    });

    describe('When channels are succesfully requested', () => {
      beforeAll(() => {
        nock('http://localhost:8010')
          .get('/v1/channels')
          .reply(200, channels);

        store.dispatch(loadChannels());
      });

      afterAll(() => {
        nock.cleanAll();
      });

      it.skip('should update the channel state', (done) => {
        store.dispatch(loadChannels()).then(() => {
          expect(store.getState().channels).to.eql(channels);
        });
        done();
      });
    });

    describe('When channels are unsuccesfully requested', () => {
      beforeAll(() => {
        nock('http://localhost:8010')
          .get('/v1/channels')
          .replyWithError();
      });

      afterAll(() => {
        nock.cleanAll();
      });

      it.skip('should not update the channel state', (done) => {
        store.dispatch(loadChannels()).then(() => {
          expect(store.getState().channels).to.equal([]);
        });
        done();
      });
    });
  });
});
