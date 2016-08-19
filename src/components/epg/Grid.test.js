import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe.skip('Grid', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<Grid {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
