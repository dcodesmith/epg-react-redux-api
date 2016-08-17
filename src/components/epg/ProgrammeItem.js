import React, { PropTypes } from 'react';
import moment from 'moment';

const ProgrammeItem = ({ programme }) => {

  const setItemStyle = (programme) => {
    const ONE_MILLISECOND = 60 * 1000;
    const TRACK_WIDTH = 75;

    let startTime = moment(programme.startTime, 'HH:mm');
    let endTime = moment(programme.endTime, 'HH:mm');
    let duration = endTime.diff(startTime) / ONE_MILLISECOND;

    return { width: `${(duration * TRACK_WIDTH) / 30}px` };
  };

  return (
    <li className="schedule__item" style={setItemStyle(programme)} title={programme.show}>
      <div>
        <span className="schedule__item__time">
          {programme.startTime} - {programme.endTime}
        </span>
        <span className="schedule__item__title">
          {programme.show}
        </span>
      </div>
    </li>
  );
};

ProgrammeItem.propTypes = {
  programme: PropTypes.object.isRequired
};

export default ProgrammeItem;
