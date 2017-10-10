import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

import { FORWARD } from '../constants';

import ControlButton from './ControlButton';

chai.use(sinonChai);

const onNavigateSpy = sinon.spy();

const childReactElement = React.createElement(
  'div',
  { className: 'a-child' },
  null
);

const DEFAULT_PROPS = {
  title: 'Title',
  className: 'a-class',
  onNavigate: onNavigateSpy,
  isDisabled: true,
  direction: FORWARD,
  children: childReactElement
};

const render = (testProps) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<ControlButton { ...props } />);
};

const testProps = {};

describe('ControlButton', () => {
  describe('Given a ControlButton component', () => {
    let component, button;

    describe('When the button is rendered', () => {
      beforeEach(() => {
        component = render(testProps);
        button = component.find('button');
      });

      it('should have a button element', () => {
        expect(button).to.be.length(1);
      });

      it('should have the expected props', () => {
        const { title, className, disabled } = button.props();

        expect(title).to.equal(DEFAULT_PROPS.title);
        expect(className).to.equal(DEFAULT_PROPS.className);
        expect(disabled).to.equal(DEFAULT_PROPS.isDisabled);
      });

      it('should have a child element', () => {
        expect(button.contains(childReactElement)).to.be.true;
      });

      describe('And the button is not disabled', () => {
        beforeAll(() => {
          testProps.isDisabled = false;
        });

        it('should have an enabled/clickable button element', () => {
          expect(button.prop('disabled')).to.be.false;
        });

        describe('And clicked', () => {
          beforeAll(() => {
            button.simulate('click');
          });

          it('should invoke the onNavigate method', () => {
            expect(onNavigateSpy)
              .to.have.been.calledOnce
              .and.to.be.calledWithExactly(FORWARD);
          });
        });
      });

      describe('And the button is disbabled', () => {
        beforeAll(() => {
          testProps.isDisabled = true;
        });

        it('should have a disabled button element', () => {
          expect(button.prop('disabled')).to.be.true;
        });

        describe('And clicked', () => {
          beforeAll(() => {
            button.simulate('click');
            onNavigateSpy.reset();
          });

          it('should NOT invoke the onClick method', () => {
            expect(onNavigateSpy).to.not.have.been.called;
          });
        });
      });
    });
  });
});
