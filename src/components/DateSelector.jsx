import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import { md5ObjectHash, computeTransitionStyle } from '../utils';
import { ITEM_WIDTH } from '../constants';

import DateNodeButton from './DateNodeButton';

const DateSelector = ({ dates, selectedDateIndex, onSelect }) => {
  const transitionStyle = computeTransitionStyle(selectedDateIndex);

  const isActive = index => classNames('date-selector__list__item', {
    'date-selector__list__item--active': selectedDateIndex === index
  });

  const dateNodes = dates.map((date, index) =>
    <li key={ md5ObjectHash(date) } className={ isActive(index) }>
      <DateNodeButton index={ index } date={ date } onSelect={ onSelect } />
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
