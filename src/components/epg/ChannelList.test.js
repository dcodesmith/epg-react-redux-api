import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ChannelList from './ChannelList';

describe.only('ChannelList', () => {

  describe('Given there are 4 channels', () => {
    let channels = [{id: 1, name: 'name', code: '0lo08w'}];

    describe('When the the component is rendered', () => {
      let component;

      beforeEach(() => {
        let props = { channels };
        component = shallow(<ChannelList {...props} />);
      });

      it('should have', () => {
        console.log(component.html());
      });

    });
  });
});
