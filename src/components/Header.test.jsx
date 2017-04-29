import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from './Header';

describe.skip('Header', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<Header {...props} />);
      });

      it('should ....', () => {
      });
    });
  });
});
