import { expect } from 'chai';
import sinon from 'sinon';

import configureStore from '../store/configureStore.dev';
import {
  LOAD_PROGRAMMES_SUCCESS,
  CREATE_PROGRAMMES_SUCCESS,
  DELETE_PROGRAMMES_SUCCESS
} from './actionTypes';
import {
  createProgrammes,
  loadProgrammesSuccess,
  createProgrammeSuccess,
  deteleProgrammeSuccess
} from './programmeActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

const sandbox = sinon.sandbox.create();
const store = configureStore();
const dispatch = sandbox.spy(store, 'dispatch'); // OR dispatch = sandbox.spy();

// dbAPI.fetchUser = sinon.stub().returns(Promise.resolve({username: 'John'}));

const programmeApi = {
  create: sandbox.stub()
};

describe('Promotion Actions', () => {
  // describe('Given an ajax call', () => {
  //   let action, AsyncAction;

  //   describe('When it begins', () => {
  //     before(() => {
  //       action = createProgrammes(data)(dispatch);
  //       // programmeApi.create(data).returns(Promise.resolve({}));
  //     });

  //     it('should return a type `BEGIN_AJAX_CALL`', () => {
  //       action.then(() => {
  //         expect(dispatch).to.be.calledWith(beginAjaxCall());
  //         // done();
  //         // expect(dispatch.called).to.be.true;
  //       });
  //     });
  //   });
  // });

  describe('Given programmes', () => {
    let action;
    const programmes = [{ name: 'Show A' }, { name: 'Show B' }];

    describe('When programmes are succesfully loaded', () => {
      before(() => {
        action = loadProgrammesSuccess(programmes);
      });

      it('should return a `LOAD_PROGRAMMES_SUCCESS` action', () => {
        expect(action).to.eql({ type: LOAD_PROGRAMMES_SUCCESS, programmes });
      });
    });

    describe('When programmes are succesfully created', () => {
      before(() => {
        action = createProgrammeSuccess(programmes);
      });

      it('should return a `CREATE_PROGRAMMES_SUCCESS` action', () => {
        expect(action).to.eql({ type: CREATE_PROGRAMMES_SUCCESS, programmes });
      });
    });

    describe('When programmes are succesfully deleted', () => {
      before(() => {
        action = deteleProgrammeSuccess();
      });

      it('should return a `DELETE_PROGRAMMES_SUCCESS` action', () => {
        expect(action).to.eql({ type: DELETE_PROGRAMMES_SUCCESS, programmes: [] });
      });
    });
  });
});
