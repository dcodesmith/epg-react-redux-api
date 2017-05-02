import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import DateNodeButton from './DateNodeButton';

const DateSelector = ({ dates, selectedDateIndex, onSelect }) => {
  const ITEM_WIDTH = 150;
  const isActive = index => classNames('date-selector__list__item', {
    'date-selector__list__item--active': selectedDateIndex === index
  });
  // TODO: Use utility function to be use in tests too computeExpectedTransitionStyle()
  const transitionStyle = {
    transform: `translate3d(${ITEM_WIDTH * selectedDateIndex}px, 0, 0)`,
    WebkitTransform: `translate3d(${ITEM_WIDTH * selectedDateIndex}px, 0, 0)`
  };

  const dateNodes = dates.map((date, index) =>
    /* eslint react/no-array-index-key: 0 */
    <li key={ index } className={ isActive(index) }>
      <DateNodeButton index={ index } date={ date } onSelect={ onSelect(index) } />
    </li>
  );

  return (
    <div className="date-selector">
      <ul className="date-selector__list">
        { dateNodes }
      </ul>
      <span style={ transitionStyle } className="date-selector__list__item--underlined" />
    </div>
  );
};

DateSelector.propTypes = {
  dates: PropTypes.array.isRequired,
  selectedDateIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DateSelector;
