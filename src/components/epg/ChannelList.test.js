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

      it('should have one ul/parent element', () => {
        expect(component.find('ul').length).toBe(1);
      });

      it(`should have one ${channels.length} li/child elements`, () => {
        expect(component.find('ul').find('li').length).toBe(channels.length);
      });

      it(`should have child elements text content matching the channel property`, () => {
        component.find('ul').find('li').forEach((node, index) => {
          expect(node.find('.channel__name').text()).toEqual(channels[index].name);
          expect(node.find('.channel__code').text()).toEqual(channels[index].code);
        });
      });

    });
  });
});
