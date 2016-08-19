import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import DateSelector from './DateSelector';

describe.skip('DateSelector', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<DateSelector {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
