import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import { ONE_MILLISECOND, TRACK_WIDTH, TIME_FORMAT } from '../constants';

const ProgrammeItem = ({ programme }) => {
  const currentDate = new Date();
  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const setItemStyle = () => {
    const startTime = moment(programme.startTime, TIME_FORMAT);
    const endTime = moment(programme.endTime, TIME_FORMAT);
    const duration = endTime.diff(startTime) / ONE_MILLISECOND;

    return { width: `${(duration * TRACK_WIDTH) / 30}px` };
  };

  const itemStyle = classNames('schedule__item', {
    highlight: (programme.startTime <= currentTime && programme.endTime >= currentTime)
  });

  return (
    <li className={ itemStyle } style={ setItemStyle() } title={ programme.show }>
      <div>
        <span className="schedule__item__time">
          { programme.startTime } - { programme.endTime }
        </span>
        <span className="schedule__item__title">
          { programme.show }
        </span>
      </div>
    </li>
  );
};

ProgrammeItem.propTypes = {
  programme: PropTypes.object.isRequired
};

export default ProgrammeItem;
