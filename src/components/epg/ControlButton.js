import React, { PropTypes } from 'react';

const ControlButton = (props) => {
  const { title, klass, isDisabled, onNavigate, direction, children } = props;

  const _onClick = () => {
    onNavigate(direction);
  };

  return (
    <button title={title} className={klass} disabled={isDisabled} onClick={_onClick}>
      {children}
    </button>
  );
};

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  klass: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onNavigate: PropTypes.func,
  direction: PropTypes.number,
  children: PropTypes.element
};

export default ControlButton;
