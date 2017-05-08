import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { range } from 'lodash';

import { deleteProgrammes } from '../actions/programmeActions';
import { navigate } from '../actions/navigationActions';

import { getProgrammeDates, getSelectedDatesProgrammes } from '../utils';

import Grid from '../components/Grid';

const FILE_CHOOSER_LABEL = 'No File Chosen';

const GridContainer = ({channels, programmes, dates, times, selectedDateIndex, deleteProgrammes, navigate, offset }) => {
  const HOUR_WIDTH = 150;
  const abscissa = `${-offset * HOUR_WIDTH}px`;
  const selectedDate = dates[selectedDateIndex];
  const selectedProgrammes = getSelectedDatesProgrammes({ selectedDate, programmes, channels });

  const style = {
    transform: `translate3d(${abscissa}, 0, 0)`,
    WebkitTransform: `translate3d(${abscissa}, 0, 0)`
  };

  return (
    <Grid
      programmes={ selectedProgrammes }
      offset={ offset }
      onNavigate={ navigate }
      times={ times }
      transformStyle={ style }
      onClear={ () => deleteProgrammes() } />
  );
};

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
