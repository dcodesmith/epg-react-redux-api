import React, { PropTypes } from 'react';

const Controls = ({ onNavigate, offset, times }) => {

  const TRACK_LENGTH = 12;
  const LAST_OFFSET = Math.floor(times.length - TRACK_LENGTH) / 2;

  return (
    <div className="programme-guide__controls">
      <button title="Previous 1 hr" className="previous" disabled={!offset} onClick={onNavigate.bind(null, -1)}>
        <span>&laquo;</span>
      </button>
      <button title="Next 1 hr" className="next" disabled={offset >= LAST_OFFSET} onClick={onNavigate.bind(null, 1)}>
        <span>&raquo;</span>
      </button>
    </div>
  );
};

Controls.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  times: PropTypes.array.isRequired
};

export default Controls;
