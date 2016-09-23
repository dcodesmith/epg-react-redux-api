import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import TImeTrack from './TimeTrack';

describe.skip('TimeTrack', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<TImeTrack {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
