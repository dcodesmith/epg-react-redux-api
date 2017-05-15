import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import { md5ObjectHash } from '../utils';

import DateNodeButton from './DateNodeButton';

const DateSelector = ({ dates, selectedDateIndex, move }) => {
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
    <li key={ md5ObjectHash(date) } className={ isActive(index) }>
      <DateNodeButton index={ index } date={ date } onSelect={ () => move(index) } />
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
  move: PropTypes.func.isRequired
};

export default DateSelector;
