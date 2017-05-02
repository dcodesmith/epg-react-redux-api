import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProgrammeDates } from '../utils';

import DateSelector from '../components/DateSelector';

class DateSelectorContainer extends Component {
  constructor(props, context) {
    super(props, context);

    let initialOffest;
    const HOUR_WIDTH = 150;
    const currentHour = (new Date()).getHours();

    if (currentHour >= 21) {
      initialOffest = 18;
    } else if (currentHour <= 6) {
      initialOffest = 0;
    } else {
      initialOffest = currentHour - 3;
    }

    // on load, offset should be set by getting the hour in the day

    const offset = initialOffest;
    const abscissa = `${-offset * HOUR_WIDTH}px`;

    this.state = {
      style: {
        transform: `translate3d(${abscissa}, 0, 0)`,
        WebkitTransform: `translate3d(${abscissa}, 0, 0)`
      }
    };

    this.onSelectDate = this.onSelectDate.bind(this);
  }

  onSelectDate(selectedDateIndex) {
    // TODO: reset position navigate
    const style = {
      transform: `translate3d(0, 0, 0)`,
      WebkitTransform: `translate3d(0, 0, 0)`
    };

    this.setState({ selectedDateIndex, style });
  }

  render() {
    const { dates, selectedDateIndex } = this.props;

    const selectedDate = dates[selectedDateIndex];

    return (
      <DateSelector
        dates={ dates }
        selectedDateIndex={ selectedDateIndex }
        onSelect={ this.onSelectDate } />
    );
  }
}

DateSelectorContainer.propTypes = {
  dates: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  selectedDateIndex: state.selectedDateIndex,
  dates: getProgrammeDates(state.programmes)
});

export default connect(
  mapStateToProps
)(DateSelectorContainer)
