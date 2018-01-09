import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import { NAVIGATE_PAGE } from './actionTypes';
import { navigatePage, navigate } from './navigationActions';

const sandbox = sinon.sandbox.create();
const dispatch = sandbox.spy();

describe('Navigation Actions', () => {
  let action;

  describe('Given a direction', () => {
    const direction = 1;

    describe('When navigate action creator is invoked', () => {
      beforeAll(() => {
        action = navigate(direction)(dispatch);
      });

      it('should return a type `SHOW_MODAL`', () => {
        expect(dispatch).to.be.calledWith(navigatePage(direction));
      });
    });

    describe('When navigatePage is invoked', () => {
      beforeAll(() => {
        action = navigatePage(direction);
      });

      it('should return a type `NAVIGATE_PAGE`', () => {
        expect(action).to.eql({ type: NAVIGATE_PAGE, direction });
      });
    });
  });
});
