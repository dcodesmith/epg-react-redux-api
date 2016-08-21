// NOTES: click events could still be triggered when element is disabled when `shallow` is used to render component
// always reset spy() after event trigger

import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { mount } from 'enzyme';
import Controls from './Controls';

const onNavigate = sinon.spy();
let component;

function render(offset = 0, times = new Array(24)) {
  let props = { onNavigate, offset, times };

  return mount(<Controls {...props} />);
}

describe('Controls', () => {

  describe('Given a 24hr time track starting from the beginning/offset = 0', () => {

    describe('And the offset value is 0', () => {
      // let offset = 0;

      describe('When the component is rendered', () => {
        before(() => {
          component = render();
        });

        it('should have a disabled/unclickable previous button', () => {
          expect(component.find('.previous').prop('disabled')).toBe(true);
        });

        it('should have an enabled/clickable next button', () => {
          expect(component.find('.next').prop('disabled')).toBe(false);
        });

        describe('And the next button is clicked', () => {
          before(() => {
            component.find('.next').simulate('click');
          });

          after(() => {
            onNavigate.reset();
          });

          it('should call `onNavigate()` once', () => {
            expect(onNavigate.calledOnce).toEqual(true);
            expect(onNavigate.callCount).toEqual(1);
          });
        });

        describe('And the previous button is clicked', () => {
          before(() => {
            component.find('.previous').simulate('click');
          });

          after(() => {
            onNavigate.reset();
          });

          it('should not call `onNavigate()`', () => {
            expect(onNavigate.callCount).toEqual(0);
            expect(onNavigate.notCalled).toEqual(true);
          });
        });
      });
    });

    describe('And the offset value is greater than 0 and less than the last offset', () => {
      let offset = 1;

      describe('When the component is rendered', () => {
        before(() => {
          component = render(offset);
        });

        it('should have a enabled/clickable previous button', () => {
          expect(component.find('.previous').prop('disabled')).toBe(false);
        });

        it('should have an enabled/clickable next button', () => {
          expect(component.find('.next').prop('disabled')).toBe(false);
        });

        describe('And the next button is clicked', () => {
          before(() => {
            component.find('.next').simulate('click');
          });

          after(() => {
            onNavigate.reset();
          });

          it('should call `onNavigate()` once', () => {
            expect(onNavigate.calledOnce).toEqual(true);
            expect(onNavigate.callCount).toEqual(1);
          });
        });

        describe('And the previous button is clicked', () => {
          before(() => {
            component.find('.previous').simulate('click');
          });

          after(() => {
            onNavigate.reset();
          });

          it('should call `onNavigate()`', () => {
            expect(onNavigate.calledOnce).toEqual(true);
            expect(onNavigate.callCount).toEqual(1);
          });
        });
      });
    });

    describe('And the offset value is equal to or greater than the last offset', () => {
      let offset = 6;

      describe('When the component is rendered', () => {
        before(() => {
          component = render(offset);
        });

        it('should have an enabled/clickable previous button', () => {
          expect(component.find('.previous').prop('disabled')).toBe(false);
        });

        it('should have a disabled/unclickable next button', () => {
          expect(component.find('.next').prop('disabled')).toBe(true);
        });

        describe('And the next button is clicked', () => {
          before(() => {
            component.find('.next').simulate('click');
          });

          after(() => {
            onNavigate.reset();
          });

          it('should call `onNavigate()` once', () => {
            expect(onNavigate.calledOnce).toEqual(false);
            expect(onNavigate.callCount).toEqual(0);
          });
        });

        describe('And the previous button is clicked', () => {
          before(() => {
            component.find('.previous').simulate('click');
          });

          after(() => {
            onNavigate.reset();
          });

          it('should call `onNavigate()`', () => {
            expect(onNavigate.calledOnce).toEqual(true);
            expect(onNavigate.callCount).toEqual(1);
          });
        });
      });
    });
  });
});
