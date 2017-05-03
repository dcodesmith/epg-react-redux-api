import React from 'react';
import PropTypes from 'prop-types';

const ControlButton = ({ title, klass, isDisabled = true, onNavigate, children }) => (
  <button title={ title } className={ klass } disabled={ isDisabled } onClick={ onNavigate }>
    { children }
  </button>
);

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  klass: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onNavigate: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default ControlButton;
