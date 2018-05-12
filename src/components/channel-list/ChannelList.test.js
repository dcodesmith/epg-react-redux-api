import React from 'react';
import { shallow } from 'enzyme';

import ChannelList from './ChannelList';

const DEFAULT_PROPS = {
  channels: [{ id: 1, name: 'name', code: '0lo08w' }]
};

describe('Given a ChannelList component', () => {
  describe('When the the component is rendered', () => {
    let component, channelList;

    beforeAll(() => {
      component = shallow(<ChannelList { ...DEFAULT_PROPS } />);
      channelList = component.find('.channel__list');
    });

    it('should have 1 ul/parent element', () => {
      expect(channelList).toHaveLength(1);
    });

    it(`should have ${DEFAULT_PROPS.channels.length} li/child elements`, () => {
      expect(channelList.find('li')).toHaveLength(DEFAULT_PROPS.channels.length);
    });

    it('should have child elements text content matching the channel property', () => {
      channelList.find('li').forEach((node, index) => {
        const { name, code } = DEFAULT_PROPS.channels[index];

        expect(node.find('.channel__name').text()).toEqual(name);
        expect(node.find('.channel__code').text()).toEqual(code);
      });
    });
  });
});