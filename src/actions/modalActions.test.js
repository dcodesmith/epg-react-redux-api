import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';
import { showModal, hideModal } from './modalActions';

describe('Modal Actions', () => {
  let action;

  describe('Given some data', () => {
    const data = { name: 'A' };

    describe('When the show modal action creator is invoked', () => {
      beforeAll(() => {
        action = showModal(data);
      });

      it('should return a type `SHOW_MODAL`', () => {
        expect(action).toEqual({ type: SHOW_MODAL, data });
      });
    });
  });

  describe('When the hide modal action creator is invoked', () => {
    beforeAll(() => {
      action = hideModal();
    });

    it('should return a type `HIDE_MODAL`', () => {
      expect(action).toEqual({ type: HIDE_MODAL });
    });
  });
});
