import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import ControlButton from './ControlButton';

const TRACK_LENGTH = 12;

const Controls = ({ onNavigate, offset = 0, times }) => { 
  // console.log('Controls rendered');
  return (
    <div className="programme-guide__controls">
      <ControlButton
        title="Previous 1 hr"
        klass="previous"
        isDisabled={ !offset }
        onNavigate={ () => onNavigate(-1) }>
        <span>&laquo;</span>
      </ControlButton>

      <ControlButton
        title="Next 1 hr"
        klass="next"
        isDisabled={ offset >= ( Math.floor(times.length - TRACK_LENGTH) / 2 ) }
        onNavigate={ () => onNavigate(1) }>
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
