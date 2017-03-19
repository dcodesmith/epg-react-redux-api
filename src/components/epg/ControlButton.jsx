import React, { PropTypes } from 'react';

const ControlButton = (props) => {
  const { title, klass, isDisabled, onNavigate, direction, children } = props;

  const onClick = () => {
    console.log('direction', direction);
    onNavigate(direction);
  };

  return (
    <button title={ title } className={ klass } disabled={ isDisabled } onClick={ onClick }>
      { children }
    </button>
  );
};

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  klass: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onNavigate: PropTypes.func.isRequired,
  direction: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};

ControlButton.defaultProps = {
  isDisabled: true
};

export default ControlButton;
