import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ChannelList from './ChannelList';

const DEFAULT_PROPS = {
  channels: [{ id: 1, name: 'name', code: '0lo08w' }]
};

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<ChannelList { ...props } />);
};

describe('ChannelList', () => {
  describe('Given a channel', () => {
    describe('When the the component is rendered', () => {
      let component, channelList;

      before(() => {
        component = render();
        channelList = component.find('.channel__list');
      });

      it('should have 1 ul/parent element', () => {
        expect(channelList.length).to.equal(1);
      });

      it(`should have ${DEFAULT_PROPS.channels.length} li/child elements`, () => {
        expect(channelList.find('li').length).to.equal(DEFAULT_PROPS.channels.length);
      });

      it('should have child elements text content matching the channel property', () => {
        channelList.find('li').forEach((node, index) => {
          expect(node.find('.channel__name').text()).to.equal(DEFAULT_PROPS.channels[index].name);
          expect(node.find('.channel__code').text()).to.equal(DEFAULT_PROPS.channels[index].code);
        });
      });
    });
  });
});
