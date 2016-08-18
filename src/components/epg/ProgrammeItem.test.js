import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ProgrammeItem from './ProgrammeItem';

describe('ProgrammeItem', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<ProgrammeItem {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
