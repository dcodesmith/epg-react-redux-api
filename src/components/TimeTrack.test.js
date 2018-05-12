import React from 'react';
import { shallow } from 'enzyme';
import { range } from 'lodash';

import TimeTrack from './TimeTrack';
import { formatTrackTime, md5ObjectHash } from '../utils';

const DEFAULT_PROPS = {
  times: range(0, 24, 0.5),
  transformStyle: {
    transform: `translate3d(0, 0, 0)`,
    WebkitTransform: `translate3d(0, 0, 0)`
  }
};

describe('TimeTrack', () => {
  describe('Given a TimeTrack component', () => {
    describe('When rendered', () => {
      let component, showTimeList, timeTracks;

      beforeAll(() => {
        component = shallow(<TimeTrack { ...DEFAULT_PROPS } />);
        showTimeList = component.find('ul.programme-guide__showtimes');
        timeTracks = showTimeList.find('li.programme-guide__showtimes__time');
      });

      it('should have the correct CSS inline style applied', () => {
        const { style } = showTimeList.props();

        expect(style).toEqual(DEFAULT_PROPS.transformStyle);
      });

      it('should render a list of number of times', () => {
        expect(timeTracks).toHaveLength(DEFAULT_PROPS.times.length);
      });

      it('should render the times in the correct format', () => {
        timeTracks.forEach((time, index) => {
          expect(time.text()).toEqual(formatTrackTime(DEFAULT_PROPS.times[index]));
        });
      });
    });
  });
});
