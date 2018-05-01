import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const DEFAULT_PROPS = {
  times: [],
  transformStyle: {}
};

describe('Given a Header component', () => {
  describe('When rendered', () => {
    let component;

    beforeAll(() => {
      component = shallow(<Header { ...DEFAULT_PROPS } />);
    });

    it('should render a TimeTrack component with the correct props', () => {
      const timeTrackComponent = component.find('TimeTrack');
      const { times, transformStyle } = timeTrackComponent.props();

      expect(times).toEqual(DEFAULT_PROPS.times);
      expect(transformStyle).toEqual(DEFAULT_PROPS.transformStyle);
    });
  });
});