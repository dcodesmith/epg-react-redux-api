import React from 'react';
import PropTypes from 'prop-types';

const ControlButton = ({ title, className, isDisabled = true, onNavigate, children }) => (
  <button title={ title } className={ className } disabled={ isDisabled } onClick={ onNavigate }>
    { children }
  </button>
);

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onNavigate: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default ControlButton;
