import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { ORDINAL_MONTH_DAY, DAY_NAME } from '../constants';

const DateNodeButton = ({ index, onSelect, date }) => (
  <button className="date" onClick={ onSelect(index) }>
    <span>{ moment(date.value).format(DAY_NAME) }</span>
    <span>{ moment(date.value).format(ORDINAL_MONTH_DAY) }</span>
  </button>
);

DateNodeButton.propTypes = {
  onSelect: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default DateNodeButton;
