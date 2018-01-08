import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ChannelLogo from './ChannelLogo';

const channelCode = '0lo08w';
const DEFAULT_PROPS = { channel: channelCode };

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<ChannelLogo { ...props } />);
};

describe.only('ChannelLogo', () => {
  describe('Given a channel logo', () => {
    describe('When the the component is rendered', () => {
      let component, channelLogo;

      beforeAll(() => {
        component = render();
        channelLogo = component.find('.channel-logo');
      });

      it('should render the logo', () => {
        expect(channelLogo).to.have.lengthOf(1);
        expect(channelLogo.prop('src')).to.equal(`../images/${channelCode}.svg`);
      });
    });
  });
});
