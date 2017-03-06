import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { mount } from 'enzyme';
import ControlButton from './ControlButton';

chai.use(sinonChai);

const _onClick = sinon.spy();
const DEFAULT_PROPS = {
  title: 'Title',
  klass: 'a-class',
  onNavigate: _onClick,
  direction: -1,
  children: <div>Hi</div>
};

function render(props) {
  props = Object.assign({}, DEFAULT_PROPS, props);

  return mount(<ControlButton {...props} />);
}

describe('ControlButton', () => {
  describe('Given a ControlButton component', () => {
    let component;
    let button;

    describe('And the `isDisabled` property is set to `false`', () => {
      const props = { isDisabled: false };

      describe('When the the component is rendered', () => {
        before(() => {
          component = render(props);
          button = component.find('button');
        });

        it('should have a button element', () => {
          expect(button).to.be.length(1);
        });

        it('should have a title `Title`', () => {
          expect(button.prop('title')).to.equal('Title');
        });

        it('should have a list of classes `a-class`', () => {
          expect(button.hasClass(DEFAULT_PROPS.klass)).to.be.true;
        });

        it('should have an enabled/clickable button element', () => {
          expect(button.prop('disabled')).to.be.false;
        });

        it('should have a child element', () => {
          // expect(component.children().html()).to.equal(DEFAULT_PROPS.children);
        });

        describe('And clicked', () => {
          before(() => {
            button.simulate('click');
          });

          after(() => {
            _onClick.reset();
          });

          it('should invoke the _onClick method with the argument `-1`', () => {
            expect(_onClick).to.have.been
              .calledOnce
              .calledWithExactly(DEFAULT_PROPS.direction);
          });
        });
      });
    });

    describe('And the `isDisabled` property is set to `true`', () => {
      const props = { isDisabled: true };

      describe('When the the component is rendered', () => {
        let button;

        before(() => {
          component = render(props);
          button = component.find('button');
        });

        it('should have a button element', () => {
          expect(button).to.be.length(1);
        });

        it('should have a title `Title`', () => {
          expect(button.prop('title')).to.equal('Title');
        });

        it('should have a list of classes `a-class b-class`', () => {
          expect(button.hasClass(DEFAULT_PROPS.klass)).to.be.true;
        });

        it('should have a disabled button element', () => {
          expect(button.prop('disabled')).to.be.true;
        });

        it('should have a child element', () => {
          // expect(button.children().html()).to.equal(DEFAULT_PROPS.children);
        });

        describe('And clicked', () => {
          before(() => {
            button.simulate('click');
          });

          after(() => {
            _onClick.reset();
          });

          it('should NOT invoke the _onClick method with the argument', () => {
            expect(_onClick).to.not.have.been
              .calledOnce
              .calledWithExactly(DEFAULT_PROPS.direction);
          });
        });
      });
    });
  });
});
