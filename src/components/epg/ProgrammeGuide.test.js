import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ProgrammeGuide from './ProgrammeGuide';

describe.skip('ProgrammeGuide', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<ProgrammeGuide {...props} />);
      });

      it('should ....', () => {
      });

    });
  });
});
