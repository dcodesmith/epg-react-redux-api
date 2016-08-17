import React, { PropTypes } from 'react';
import classNames from 'classnames';

import TimeTrack from './TimeTrack';

const Header = ({ times }) => {

  return (
    <div className="programme-guide__header">
      <div className="programme-guide__header__legend">&nbsp;</div>

      <TimeTrack times={times}/>
    </div>
  );
};

Header.propTypes = {
  times: PropTypes.array.isRequired
};

export default Header;
