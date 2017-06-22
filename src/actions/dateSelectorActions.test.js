import { expect } from 'chai';
import sinon from 'sinon';

import { SELECT_DATE, NAVIGATE_PAGE } from './actionTypes';
import { move, goToNextDate } from './dateSelectorActions';

const sandbox = sinon.sandbox.create();
const dispatch = sandbox.spy();
const getState = sandbox.stub();
const offset = -1;
const mockState = { offset };

describe('Date Selector Actions', () => {
  let action, EXPECTED_ACTION;

  describe('Given an index', () => {
    const index = 1;

    describe('When move action creator is invoked', () => {
      before(() => {
        getState.returns(mockState);
        action = move(index)(dispatch, getState);
      });

      it('should invoke the dispatch method with `SELECT_DATE` action', () => {
        EXPECTED_ACTION = goToNextDate(index);

        expect(dispatch).to.be.calledWith(EXPECTED_ACTION);
      });

      it('should invoke the dispatch method with `NAVIGATE_PAGE` action', () => {
        EXPECTED_ACTION = { type: NAVIGATE_PAGE, direction: -Math.abs(offset) };

        expect(dispatch).to.be.calledWith(EXPECTED_ACTION);
      });
    });

    describe('When goToNextDate is invoked', () => {
      before(() => {
        action = goToNextDate(index);
      });

      it('should return a type `SELECT_DATE`', () => {
        expect(action).to.eql({ type: SELECT_DATE, index });
      });
    });
  });
});
