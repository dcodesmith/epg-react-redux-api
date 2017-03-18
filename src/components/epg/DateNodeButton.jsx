import React, { PropTypes } from 'react';
import moment from 'moment';

const DateNodeButton = ({ index, onSelect, date }) => {
  const onClick = () => {
    onSelect(index);
  };

  return (
    <button className="date" onClick={ onClick }>
      <span>{ moment(date.value).format("dddd") }</span>
      <span>{ moment(date.value).format("Do") }</span>
    </button>
  );
};

DateNodeButton.propTypes = {
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired
};

export default DateNodeButton;
