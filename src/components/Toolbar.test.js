import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';

const onDelete = sinon.spy();

const DEFAULT_PROPS = { onDelete };

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<Toolbar {...props} />);
};


describe.skip('Toolbar', () => {
  describe('Given a Toolbar component', () => {
    describe('When rendered', () => {
      let component;

      beforeEach(() => {
        component = render();
      });

      it('should ....', () => {
        component.simulate('click');

        expect(onDelete).to.be.calledOnce;
      });
    });
  });
});
