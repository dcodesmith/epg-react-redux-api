import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Controls from './Controls';
import ControlButton from './ControlButton';
import {
  TRACK_LENGTH,
  PREVIOUS_BUTTON_CLASS,
  PREVIOUS_BUTTON_TITLE,
  NEXT_BUTTON_CLASS,
  NEXT_BUTTON_TITLE
} from '../constants';

const DEFAULT_PROPS = {
  onNavigate: sinon.spy(),
  times: new Array(24)
};

const render = (testProps) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<Controls {...props} />);
};

const testProps = {};

describe('Controls', () => {
  describe('When the component is rendered', () => {
    let component, controlButtonComponents, nextButton, previousButton;

    beforeEach(() => {
      component = render(testProps);
      controlButtonComponents = component.find(ControlButton);
      previousButton = controlButtonComponents.at(0);
      nextButton = controlButtonComponents.at(1);
    });

    it('should render 2 `ControlButton` components', () => {
      expect(controlButtonComponents).to.be.length(2);

      controlButtonComponents.forEach((controlButtonComponent, index) => {
        // @FIXME - expect(controlButtonComponent.props().onNavigate).to.equal(DEFAULT_PROPS.onNavigate);
      });
    });

    it('should have a previous ControlButton with the appropriate props', () => {
      const { title, className } = previousButton.props();

      expect(title).to.equal(PREVIOUS_BUTTON_TITLE);
      expect(className).to.equal(PREVIOUS_BUTTON_CLASS);
    });

    it('should have a next ControlButton with the appropriate props', () => {
      const { title, className } = nextButton.props();

      expect(title).to.equal(NEXT_BUTTON_TITLE);
      expect(className).to.equal(NEXT_BUTTON_CLASS);
    });

    describe('And the offset value is 0', () => {
      before(() => {
        testProps.offset = 0;
      });

      it('should set the `isDisabled` previous button to false', () => {
        expect(nextButton.props().isDisabled).to.be.false;
      });

      it('should set the `isDisabled` next button to true', () => {
        expect(previousButton.props().isDisabled).to.be.true;
      });
    });

    describe('And the offset value is greater than 0 and less than the last offset', () => {
      before(() => {
        testProps.offset = 1;
      });

      it('should set the `isDisabled` previous button to false', () => {
        expect(nextButton.props().isDisabled).to.be.false;
      });

      it('should set the `isDisabled` next button to false', () => {
        expect(previousButton.props().isDisabled).to.be.false;
      });
    });

    describe('And the offset value is equal to or greater than the last offse', () => {
      before(() => {
        testProps.offset = 6;
      });

      it('should set the `isDisabled` previous button to true', () => {
        expect(nextButton.props().isDisabled).to.be.true;
      });

      it('should set the `isDisabled` next button to false', () => {
        expect(previousButton.props().isDisabled).to.be.false;
      });
    });
  });
});
