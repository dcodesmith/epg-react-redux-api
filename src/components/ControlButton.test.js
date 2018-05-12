import React from 'react';
import { shallow } from 'enzyme';

import { FORWARD } from '../constants';
import ControlButton from './ControlButton';

const onNavigateSpy = jest.fn();

const DEFAULT_PROPS = {
  title: 'Title',
  className: 'a-class',
  onNavigate: onNavigateSpy,
  isDisabled: true,
  direction: FORWARD
};

const testProps = {};

describe('ControlButton', () => {
  describe('Given a ControlButton component', () => {
    let component, button;

    describe('When the button is rendered', () => {
      beforeEach(() => {
        const props =  { ...DEFAULT_PROPS, ...testProps };

        component = shallow(
          <ControlButton { ...props }>
            <div className="a-child"/>
          </ControlButton>
        );
        button = component.find('button');
      });

      it('should have a button element', () => {
        expect(button).toHaveLength(1);
      });

      it('should have the expected props', () => {
        const { title, className, disabled } = button.props();

        expect(title).toEqual(DEFAULT_PROPS.title);
        expect(className).toEqual(DEFAULT_PROPS.className);
        expect(disabled).toEqual(DEFAULT_PROPS.isDisabled);
      });

      it('should have a child element', () => {
        expect(button.find('.a-child')).toBeTruthy();
      });

      it('should have a disabled button element', () => {
        expect(button.prop('disabled')).toBeTruthy();
      });

      // TODO - Revisit
      describe.skip('And clicked', () => {
        beforeAll(() => {
          button.simulate('click');
        });

        it('should NOT invoke the onClick method', () => {
          expect(onNavigateSpy).not.toHaveBeenCalled();
        });
      });

      describe('And the button is not disabled', () => {
        beforeAll(() => {
          testProps.isDisabled = false;
        });

        it('should have an enabled/clickable button element', () => {
          expect(button.prop('disabled')).toBeFalsy()
        });

        describe('And clicked', () => {
          beforeAll(() => {
            onNavigateSpy.mockReset();
            button.simulate('click');
          });

          it('should invoke the onNavigate method', () => {
            expect(onNavigateSpy).toHaveBeenCalledTimes(1)
            expect(onNavigateSpy).toHaveBeenCalledWith(FORWARD);
          });
        });
      });
    });
  });
});
