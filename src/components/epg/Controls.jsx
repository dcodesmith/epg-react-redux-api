import React, { PropTypes } from 'react';

import ControlButton from './ControlButton';

const Controls = ({ onNavigate, offset = 0, times }) => {
  const TRACK_LENGTH = 12;
  const LAST_OFFSET = Math.floor(times.length - TRACK_LENGTH) / 2;

  return (
    <div className="programme-guide__controls">
      <ControlButton
        title="Previous 1 hr"
        klass="previous"
        isDisabled={ !offset }
        direction={ -1 }
        onNavigate={ onNavigate }>
        <span>&laquo;</span>
      </ControlButton>

      <ControlButton
        title="Next 1 hr"
        klass="next"
        isDisabled={ offset >= LAST_OFFSET }
        direction={ 1 }
        onNavigate={ onNavigate }>
        <span>&raquo;</span>
      </ControlButton>
    </div>
  );
};

Controls.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  offset: PropTypes.number,
  times: PropTypes.array.isRequired
};

export default Controls;
