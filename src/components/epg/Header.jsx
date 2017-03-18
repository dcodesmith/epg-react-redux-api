import React, { PropTypes } from 'react';
import classNames from 'classnames';

import TimeTrack from './TimeTrack';

const Header = ({ times, transformStyle }) => (
  <div className="programme-guide__header">
    <div className="programme-guide__header__legend">&nbsp;</div>

    <TimeTrack times={ times } transformStyle={ transformStyle } />
  </div>
);

Header.propTypes = {
  times: PropTypes.array.isRequired,
  transformStyle: PropTypes.object.isRequired
};

export default Header;
