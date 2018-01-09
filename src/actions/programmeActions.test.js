import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import chai, { expect } from 'chai';

import {
  CREATE_PROGRAMMES_SUCCESS,
  LOAD_PROGRAMMES_SUCCESS,
  DELETE_PROGRAMMES_SUCCESS,
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR
} from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import ProgrammeApi from '../api/ProgrammeApi';
import { createProgrammes, loadProgrammes, deleteProgrammes } from './programmeActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const createStub = sinon.stub(ProgrammeApi, 'create');
const readAllStub = sinon.stub(ProgrammeApi, 'readAll');
const deleteStub = sinon.stub(ProgrammeApi, 'delete');

const payload = [{ programme: 'Random Programme' }];

describe.only('Given programme actions', () => {
  let store;
  let actualActions;
  let expectedActions;

  beforeAll(() => {
    store = mockStore({});
  });

  beforeEach(async () => {
    actualActions = store.getActions();
  });

  afterEach(() => {
    store.clearActions();
  });

  describe('create programmes', () => {
    beforeEach(async () => await store.dispatch(createProgrammes({})));
    afterEach(() => createStub.reset());

    describe('when the call to the API is successful', () => {
      beforeAll(async () => await createStub.resolves(payload));

      it('should dispatch `BEGIN_AJAX_CALL` and `CREATE_PROGRAMMES_SUCCESS` actions', async () => {
        expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: CREATE_PROGRAMMES_SUCCESS, programmes: payload }];

        expect(actualActions).to.eql(expectedActions);
      });
    });

    describe('when the call to the API is unsuccessful', () => {
      beforeAll(async () => await createStub.rejects());

      it('should dispatch `BEGIN_AJAX_CALL` and `AJAX_CALL_ERROR` actions', async () => {
        expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: AJAX_CALL_ERROR }];

        expect(actualActions).to.eql(expectedActions);
      });
    });
  });

  describe('load programmes', () => {
    beforeEach(async () => await store.dispatch(loadProgrammes()));
    afterEach(() => readAllStub.reset());

    describe('when the call to the API is successful', () => {
      beforeAll(async () => await readAllStub.resolves(payload));

      it('should dispatch `BEGIN_AJAX_CALL` and `LOAD_PROGRAMMES_SUCCESS` actions', async () => {
        expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: LOAD_PROGRAMMES_SUCCESS, programmes: payload }];

        expect(actualActions).to.eql(expectedActions);
      });
    });

    describe('when the call to the API is unsuccessful', () => {
      beforeAll(async () => await readAllStub.rejects());

      it('should dispatch `BEGIN_AJAX_CALL` and `AJAX_CALL_ERROR` actions', async () => {
        expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: AJAX_CALL_ERROR }];

        expect(actualActions).to.eql(expectedActions);
      });
    });
  });

  describe('delete programmes', () => {
    beforeEach(async () => await store.dispatch(deleteProgrammes()));
    afterEach(() => deleteStub.reset());

    describe('when the call to the API is successful', () => {
      beforeAll(async () => await deleteStub.resolves());

      it('should dispatch `BEGIN_AJAX_CALL` and `DELETE_PROGRAMMES_SUCCESS` actions', async () => {
        expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: DELETE_PROGRAMMES_SUCCESS, programmes: [] }];

        expect(actualActions).to.eql(expectedActions);
      });
    });

    describe('when the call to the API is unsuccessful', () => {
      beforeAll(async () => await deleteStub.rejects());

      it('should dispatch `BEGIN_AJAX_CALL` and `AJAX_CALL_ERROR` actions', async () => {
        expectedActions = [{ type: BEGIN_AJAX_CALL }, { type: AJAX_CALL_ERROR }];

        expect(actualActions).to.eql(expectedActions);
      });
    });
  });
});
