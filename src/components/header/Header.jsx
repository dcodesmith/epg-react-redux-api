import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import TimeTrack from '../time-track';

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
