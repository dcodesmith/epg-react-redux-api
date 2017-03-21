import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { mount, shallow } from 'enzyme';

import ControlButton from './ControlButton';

chai.use(sinonChai);

const sandbox = sinon.sandbox.create();
const onClick = sandbox.stub();

const DEFAULT_PROPS = {
  title: 'Title',
  klass: 'a-class',
  onNavigate: onClick,
  direction: -1,
  children: <div>Hi</div>
};

const render = (testProps) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<ControlButton {...props} />);
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

      it('should have a title `Title`', () => {
        expect(button.prop('title')).to.equal(DEFAULT_PROPS.title);
      });

      it('should have a list of classes `a-class b-class`', () => {
        expect(button.hasClass(DEFAULT_PROPS.klass)).to.be.true;
      });

      it('should have a child element', () => {
        // FIXME
        // expect(component.children().html()).to.equal(DEFAULT_PROPS.children);
      });

      describe('And the button is not disabled', () => {
        before(() => {
          testProps.isDisabled = false;
        });

        it('should have an enabled/clickable button element', () => {
          expect(button.prop('disabled')).to.be.false;
        });

        describe('And clicked', () => {
          before(() => {
            button.simulate('click');
          });

          it('should invoke the onClick method with the argument `-1`', () => {
            expect(onClick).to.have.been
              .calledOnce
              .calledWithExactly(DEFAULT_PROPS.direction);
          });
        });
      });

      describe('And the button is disbabled', () => {
        before(() => {
          testProps.isDisabled = true;
        });

        it('should have a disabled button element', () => {
          expect(button.prop('disabled')).to.be.true;
        });

        describe('And clicked', () => {
          before(() => {
            button.simulate('click');
            onClick.reset();
          });

          it('should NOT invoke the onClick method with the argument', () => {
            expect(onClick).to.not.have.been.called;
          });
        });
      });
    });
  });
});
