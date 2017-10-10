import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProgrammeItem from './ProgrammeItem';

describe.skip('ProgrammeItem', () => {
  describe('Given ...', () => {
    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        const props = {};
        component = shallow(<ProgrammeItem {...props} />);
      });

      it('should ....', () => {
      });
    });
  });
});
