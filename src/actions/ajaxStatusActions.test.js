import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

describe('AJAX Status Actions', () => {
  describe('Given an ajax call', () => {
    let action;

    describe('When it begins', () => {
      beforeAll(() => {
        action = beginAjaxCall();
      });

      it('should return a type `BEGIN_AJAX_CALL`', () => {
        expect(action).toEqual({ type: BEGIN_AJAX_CALL });
      });
    });

    describe('When it fails', () => {
      beforeAll(() => {
        action = ajaxCallError();
      });

      it('should return a type `AJAX_CALL_ERROR`', () => {
        expect(action).toEqual({ type: AJAX_CALL_ERROR });
      });
    });
  });
});
