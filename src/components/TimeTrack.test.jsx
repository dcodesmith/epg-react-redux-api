import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
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

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<TimeTrack {...props} />);
};

describe('TimeTrack', () => {
  describe('Given a TimeTrack component', () => {
    describe('When rendered', () => {
      let component, showTimeList, timeTracks;

      beforeEach(() => {
        component = render();
        showTimeList = component.find('ul.programme-guide__showtimes');
        timeTracks = showTimeList.find('li.programme-guide__showtimes__time');
      });

      it('should have the correct CSS inline style applied', () => {
        const { style } = showTimeList.props();

        expect(style).to.eql(DEFAULT_PROPS.transformStyle);
      });

      it('should render a list of number of times', () => {
        expect(timeTracks).to.have.lengthOf(DEFAULT_PROPS.times.length);
      });

      it('should render the times in the correct format', () => {
        timeTracks.forEach((time, index) => {
          expect(time.key()).to.equal(md5ObjectHash(DEFAULT_PROPS.times[index]));
          expect(time.text()).to.equal(formatTrackTime(DEFAULT_PROPS.times[index]));
        });
      });
    });
  });
});
