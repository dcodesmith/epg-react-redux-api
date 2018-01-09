import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import Toolbar from './Toolbar';

const onDeleteSpy = sinon.spy();
const DEFAULT_PROPS = { onDelete: onDeleteSpy };

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<Toolbar { ...props } />);
};

describe('Toolbar', () => {
  describe('Given a Toolbar component', () => {
    describe('When rendered', () => {
      let component, button;

      beforeEach(() => {
        component = render();
        button = component.find('button');
      });

      it('should render the component', () => {
        expect(component.find('.programme-guide__toolbar').length).to.equal(1);
      });

      it('should render a button', () => {
        expect(button.length).to.equal(1);
      });

      describe('And the button is clicked', () => {
        beforeAll(() => {
          button.simulate('click');
        });

        it('should invoke the `onDelete` function', () => {
          expect(onDeleteSpy).to.be.calledOnce;
        });
      });
    });
  });
});
