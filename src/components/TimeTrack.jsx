import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimeTrack = ({ times, transformStyle }) => {
  const formatTrackTime = (timestamp) => {
    const pad = (number) => {
      if (number < 10) {
        return `0${number}`;
      }

      return number;
    };

    const time = pad(timestamp.toString());

    if (time.indexOf('.') > 0) {
      return time.replace('.5', ':30');
    }

    return `${time}:00`;
  };

  const timeNodes = times.map((time, index) =>
    /* eslint react/no-array-index-key:0 */
    <li key={index} className="programme-guide__showtimes__time">
      { formatTrackTime(time) }
    </li>
  );

  return (
    <ul className="programme-guide__showtimes" style={ transformStyle }>
      { timeNodes }
    </ul>
  );
};

TimeTrack.propTypes = {
  times: PropTypes.array.isRequired,
  transformStyle: PropTypes.object
};

export default TimeTrack;
