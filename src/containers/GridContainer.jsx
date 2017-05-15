import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { range } from 'lodash';

import { navigate } from '../actions/navigationActions';

import { getProgrammeDates, getSelectedDatesProgrammes } from '../utils';

import Grid from '../components/Grid';

const FILE_CHOOSER_LABEL = 'No File Chosen';

const GridContainer = ({channels, programmes, dates, times, selectedDateIndex, navigate, offset }) => {
  const selectedDate = dates[selectedDateIndex];
  const selectedProgrammes = getSelectedDatesProgrammes({ selectedDate, programmes, channels });

  const transformStyle = (offset) => {
    const HOUR_WIDTH = 150;
    const abscissa = `${-offset * HOUR_WIDTH}px`;

    return {
      transform: `translate3d(${ abscissa }, 0, 0)`,
      WebkitTransform: `translate3d(${ abscissa }, 0, 0)`
    };
  };

  const style = transformStyle(offset);

  return (
    <Grid
      programmes={ selectedProgrammes }
      offset={ offset }
      onNavigate={ navigate }
      times={ times }
      transformStyle={ style } />
  );
};

GridContainer.propTypes = {
  channels: PropTypes.array.isRequired,
  programmes: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
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
  { navigate }
)(GridContainer);
