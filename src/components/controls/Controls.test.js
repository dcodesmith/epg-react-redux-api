import React from 'react';
import { shallow } from 'enzyme';

import Controls from './Controls';
import ControlButton from '../control-button';
import {
  TRACK_LENGTH,
  PREVIOUS_BUTTON_CLASS,
  PREVIOUS_BUTTON_TITLE,
  NEXT_BUTTON_CLASS,
  NEXT_BUTTON_TITLE,
  BACKWARD,
  FORWARD
} from '../../constants';

const onNavigateSpy = jest.fn();
const DEFAULT_PROPS = {
  onNavigate: onNavigateSpy,
  times: new Array(24),
  offset: 0
};
const testProps = {};

describe('Given a Controls component', () => {
  describe('When rendered', () => {
    let component, controlButtonComponents, nextButton, previousButton;

    beforeEach(() => {
      const props = { ...DEFAULT_PROPS, ...testProps };

      component = shallow(<Controls { ...props } />);
      controlButtonComponents = component.find('ControlButton');
      previousButton = controlButtonComponents.at(0);
      nextButton = controlButtonComponents.at(1);
    });

    it('should render 2 ControlButton components', () => {
      expect(controlButtonComponents).toHaveLength(2);
    });

    it('should have a previous ControlButton with the appropriate props', () => {
      const { title, className, direction, onNavigate } = previousButton.props();

      expect(title).toEqual(PREVIOUS_BUTTON_TITLE);
      expect(className).toEqual(PREVIOUS_BUTTON_CLASS);
      expect(direction).toEqual(BACKWARD);
      expect(onNavigate).toEqual(onNavigateSpy);
    });

    it('should have a next ControlButton with the appropriate props', () => {
      const { title, className, direction, onNavigate } = nextButton.props();

      expect(title).toEqual(NEXT_BUTTON_TITLE);
      expect(className).toEqual(NEXT_BUTTON_CLASS);
      expect(direction).toEqual(FORWARD);
      expect(onNavigate).toEqual(onNavigateSpy);
    });

    describe('And the offset value is 0', () => {
      beforeAll(() => {
        testProps.offset = 0;
      });

      it('should enable the next button', () => {
        expect(nextButton.props().isDisabled).toBeFalsy();
      });

      it('should disable the previous button', () => {
        expect(previousButton.props().isDisabled).toBeTruthy();
      });
    });

    describe('And the offset value is greater than 0 and less than the last offset', () => {
      beforeAll(() => {
        testProps.offset = 1;
      });

      it('should enable the next button', () => {
        expect(nextButton.props().isDisabled).toBeFalsy();
      });

      it('should enable the previous button', () => {
        expect(previousButton.props().isDisabled).toBeFalsy();
      });
    });

    describe('And the offset value is equal to or greater than the last offset', () => {
      beforeAll(() => {
        testProps.offset = 6;
      });

      it('should disable the next button', () => {
        expect(nextButton.props().isDisabled).toBeTruthy();
      });

      it('should enable the previous button', () => {
        expect(previousButton.props().isDisabled).toBeFalsy();
      });
    });
  });
});
