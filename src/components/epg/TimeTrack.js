import React, { PropTypes } from 'react';
import moment from 'moment';

const TimeTrack = ({ times }) => {

  const formatTrackTime = (timestamp) => {
    let time = pad(timestamp.toString());

    if (time.indexOf('.') > 0) {
      return time.replace('.5', ':30');
    }

    return time + ':00';

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
  };

  const timeNodes = times.map((time, index) =>
    <li key={index} className="programme-guide__showtimes__time">
      {formatTrackTime(time)}
    </li>
  );

  return (
    <ul className="programme-guide__showtimes">
      {timeNodes}
    </ul>
  );
};

TimeTrack.propTypes = {
  times: PropTypes.array.isRequired
};

export default TimeTrack;
