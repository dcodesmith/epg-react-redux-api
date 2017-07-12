import { expect } from 'chai';

import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';
import { showModal, hideModal } from './modalActions';

describe('Modal Actions', () => {
  let action;

  describe('Given some data', () => {
    const data = { name: 'A' };

    describe('When the show modal action creator is invoked', () => {
      before(() => {
        action = showModal(data);
      });

      it('should return a type `SHOW_MODAL`', () => {
        expect(action).to.eql({ type: SHOW_MODAL, data });
      });
    });
  });

  describe('When the hide modal action creator is invoked', () => {
    before(() => {
      action = hideModal();
    });

    it('should return a type `HIDE_MODAL`', () => {
      expect(action).to.eql({ type: HIDE_MODAL });
    });
  });
});
