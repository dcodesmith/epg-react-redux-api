import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import TImeTrack from './TImeTrack';

describe('TImeTrack', () => {

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
