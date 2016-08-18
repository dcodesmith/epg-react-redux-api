import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<Controls {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
