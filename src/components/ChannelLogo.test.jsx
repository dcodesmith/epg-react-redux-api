import React from 'react';
import { shallow } from 'enzyme';

import ChannelLogo from './ChannelLogo';

const channelCode = '0lo08w';
const DEFAULT_PROPS = { channel: channelCode };

describe('ChannelLogo', () => {
  describe('Given a channel logo', () => {
    describe('When the the component is rendered', () => {
      let component, channelLogo;

      beforeAll(() => {
        component = shallow(<ChannelLogo { ...DEFAULT_PROPS } />);;
        channelLogo = component.find('.channel-logo');
      });

      it('should render the logo', () => {
        expect(channelLogo).toHaveLength(1);
        expect(channelLogo.prop('src')).toEqual(`../images/${channelCode}.svg`);
      });
    });
  });
});
