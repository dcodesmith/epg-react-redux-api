import React from 'react';
import PropTypes from 'prop-types';

const ControlButton = ({ title, className, direction, isDisabled, onNavigate, children }) => {
  const _onNaviagte = () => {
    onNavigate(direction);
  };

  return (
    <button title={ title } className={ className } disabled={ isDisabled } onClick={ _onNaviagte }>
      { children }
    </button>
  );
};

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onNavigate: PropTypes.func.isRequired,
  direction: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};

export default ControlButton;
