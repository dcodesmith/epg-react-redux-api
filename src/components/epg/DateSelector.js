import React, { PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import DateNodeButton from './DateNodeButton';

const DateSelector = ({ dates, selectedDateIndex, onSelect }) => {

  const ITEM_WIDTH = 150;

  const isActive = (index) => {
    return classNames({
      'date-selector__list__item': true,
      'date-selector__list__item--active': selectedDateIndex === index
    });
  };

  let transitionStyle = {
    transform: 'translate3d(' + (ITEM_WIDTH * selectedDateIndex) + 'px, 0, 0)',
    WebkitTransform: 'translate3d(' + (ITEM_WIDTH * selectedDateIndex) + 'px, 0, 0)'
  };

  const dateNodes = dates.map((date, index) =>
    <li key={index} className={isActive(index)}>
      <DateNodeButton index={index} date={date} onSelect={onSelect} />
    </li>
  );

  return (
    <div className="date-selector">
      <ul className="date-selector__list">
        {dateNodes}
      </ul>
      <span style={transitionStyle} className="date-selector__list__item--underlined"/>
    </div>
  );
};

DateSelector.propTypes = {
  dates: PropTypes.array.isRequired,
  selectedDateIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DateSelector;
