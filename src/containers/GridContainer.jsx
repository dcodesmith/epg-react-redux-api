import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { range } from 'lodash';

import { deleteProgrammes } from '../actions/programmeActions';
import { navigate } from '../actions/navigationActions';

console.log(navigate);

import { getProgrammeDates, getSelectedDatesProgrammes } from '../utils';

import Grid from '../components/Grid';

const FILE_CHOOSER_LABEL = 'No File Chosen';

class GridContainer extends Component {
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

    // const offset = initialOffest;
    // const abscissa = `${-offset * HOUR_WIDTH}px`;

    this.state = {
      // selectedDateIndex: 0,
      // offset: 0,
      style: {
        transform: `translate3d0, 0, 0)`,
        WebkitTransform: `translate3d(0, 0, 0)`
      }
    };

    this.onNavigate = this.onNavigate.bind(this);
  }

  onNavigate(direction) {
    const HOUR_WIDTH = 150;
    const offset = this.state.offset + direction;
    const abscissa = `${-offset * HOUR_WIDTH}px`;
    const style = {
      transform: `translate3d(${abscissa}, 0, 0)`,
      WebkitTransform: `translate3d(${abscissa}, 0, 0)`
    };

    this.setState({ style });
  }

  render() {
    const { channels, programmes, dates, times, selectedDateIndex, deleteProgrammes, navigate, offset } = this.props;

    console.log('offset', offset);

    const HOUR_WIDTH = 150;
    const abscissa = `${-offset * HOUR_WIDTH}px`;
    const style = {
      transform: `translate3d(${abscissa}, 0, 0)`,
      WebkitTransform: `translate3d(${abscissa}, 0, 0)`
    };

    // const { style } = this.state;

    const selectedDate = dates[selectedDateIndex];
    const selectedProgrammes = getSelectedDatesProgrammes({ selectedDate, programmes, channels });

    return (
      <Grid
        programmes={ selectedProgrammes }
        offset={ offset }
        onNavigate={ navigate }
        times={ times }
        transformStyle={ style }
        onClear={ () => deleteProgrammes() } />
    );
  }
}

GridContainer.propTypes = {
  channels: PropTypes.array.isRequired,
  programmes: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
  deleteProgrammes: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  selectedDateIndex: PropTypes.number.isRequired,
  times: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  const { programmes, channels, selectedDateIndex, offset } = state;

  const dates = getProgrammeDates(programmes);
  const times = range(0, 24, 0.5);

  return { channels, programmes, dates, times, selectedDateIndex, offset };
};

export default connect(
  mapStateToProps,
  { deleteProgrammes, navigate }
)(GridContainer);
