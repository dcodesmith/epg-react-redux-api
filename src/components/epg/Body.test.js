import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Body from './Body';

describe.skip('Body', () => {

  describe('Given ...', () => {

    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = {};
        component = shallow(<Body {...props} />);
      });

      it('should ....', () => {
        console.log(component.html());
      });

    });
  });
});
