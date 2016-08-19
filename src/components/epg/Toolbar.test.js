import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

describe.skip('Toolbar', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<Toolbar {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
