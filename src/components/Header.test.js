import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';
import TimeTrack from './TimeTrack';

const DEFAULT_PROPS = {
  times: [],
  transformStyle: {}

};

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<Header {...props} />);
};

describe('Header', () => {
  describe('Given a Header component', () => {
    describe('When rendered', () => {
      let component;

      beforeEach(() => {
        component = render();
      });

      it('should render a TimeTrack component with the correct props', () => {
        const timeTrackComponent = component.find(TimeTrack);
        const { times, transformStyle } = timeTrackComponent.props();

        expect(times).to.eql(DEFAULT_PROPS.times);
        expect(transformStyle).to.eql(DEFAULT_PROPS.transformStyle);
      });
    });
  });
});
