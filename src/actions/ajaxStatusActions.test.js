import { expect } from 'chai';

import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

describe('AJAX Status Actions', () => {
  describe('Given an ajax call', () => {
    let action;

    describe('When it begins', () => {
      before(() => {
        action = beginAjaxCall();
      });

      it('should return a type `BEGIN_AJAX_CALL`', () => {
        expect(action).to.eql({ type: BEGIN_AJAX_CALL });
      });
    });

    describe('When it fails', () => {
      before(() => {
        action = ajaxCallError();
      });

      it('should return a type `AJAX_CALL_ERROR`', () => {
        expect(action).to.eql({ type: AJAX_CALL_ERROR });
      });
    });
  });
});
