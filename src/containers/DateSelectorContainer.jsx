import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProgrammeDates } from '../utils';

import { move } from '../actions/dateSelectorActions';

import DateSelector from '../components/DateSelector';

const DateSelectorContainer = ({ dates, selectedDateIndex, move }) => (
  <DateSelector
    dates={ dates }
    selectedDateIndex={ selectedDateIndex }
    onSelect={ move } />
);

DateSelectorContainer.propTypes = {
  dates: PropTypes.array.isRequired,
  selectedDateIndex: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedDateIndex: state.selectedDateIndex,
  dates: getProgrammeDates(state.programmes)
});

export default connect(
  mapStateToProps,
  { move }
)(DateSelectorContainer);
