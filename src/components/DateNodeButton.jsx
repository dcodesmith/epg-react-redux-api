import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateNodeButton = ({ onSelect, date }) => (
  <button className="date" onClick={ onSelect }>
    <span>{ moment(date.value).format("dddd") }</span>
    <span>{ moment(date.value).format("Do") }</span>
  </button>
);

DateNodeButton.propTypes = {
  onSelect: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired
};

export default DateNodeButton;
