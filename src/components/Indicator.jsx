import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { pad } from '../utils';
import { ITEM_WIDTH, TIME_FORMAT, ONE_MINUTE, TRACK_WIDTH } from '../constants';

const Indicator = ({ offset }) => {
  const currentDate = new Date();
  const currentTime = `${pad(currentDate.getHours())}:${currentDate.getMinutes()}`;

  const hrs = currentDate.getHours();
  const minutes = (currentDate.getMinutes() / ONE_MINUTE);
  const time = hrs + minutes;
  console.log(offset, hrs, minutes, time, time * TRACK_WIDTH);

  // const transformStyle = {
  //     transform: `translate3d(${abscissa}, 0, 0)`,
  //     WebkitTransform: `translate3d(${abscissa}, 0, 0)`
  // }

  // console.log('time', time * TRACK_WIDTH, transformStyle);

  return (
    <div className="indicator">
      Afees Adedamola Kolawole
    </div>
  );
};

Indicator.propTypes = {
  offset: PropTypes.number.isRequired
};

export default Indicator;
