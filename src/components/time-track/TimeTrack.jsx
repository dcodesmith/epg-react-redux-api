import React from 'react';
import PropTypes from 'prop-types';

import { formatTrackTime, md5ObjectHash } from '../../utils';

const TimeTrack = ({ times, transformStyle }) => {
  const timeNodes = times.map(time =>
    <li key={md5ObjectHash(time)} className="programme-guide__showtimes__time">
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
  transformStyle: PropTypes.object.isRequired
};

export default TimeTrack;
