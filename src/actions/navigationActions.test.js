import { expect } from 'chai';
import sinon from 'sinon';

import { NAVIGATE_PAGE } from './actionTypes';
import { navigatePage, navigate } from './navigationActions';

const sandbox = sinon.sandbox.create();
const dispatch = sandbox.spy();

describe('Navigation Actions', () => {
  let action;

  describe('Given a direction', () => {
    const direction = 1;

    describe('When navigate action creator is invoked', () => {
      before(() => {
        action = navigate(direction)(dispatch);
      });

      it('should return a type `SHOW_MODAL`', () => {
        expect(dispatch).to.be.calledWith(navigatePage(direction));
      });
    });

    describe('When navigatePage is invoked', () => {
      before(() => {
        action = navigatePage(direction);
      });

      it('should return a type `NAVIGATE_PAGE`', () => {
        expect(action).to.eql({ type: NAVIGATE_PAGE, direction });
      });
    });
  });
});
