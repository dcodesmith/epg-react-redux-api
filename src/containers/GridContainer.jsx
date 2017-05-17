import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { range } from 'lodash';

import { navigate } from '../actions/navigationActions';

import { getSelectedDatesProgrammes } from '../selectors';

import Grid from '../components/Grid';

const HOUR_WIDTH = 150;

const mapStateToProps = (state) => {
  const { offset } = state;
  const abscissa = `${-offset * HOUR_WIDTH}px`;
  
  return {
    offset,
    times: range(0, 24, 0.5),
    programmes: getSelectedDatesProgrammes(state),
    transformStyle: {
      transform: `translate3d(${abscissa}, 0, 0)`,
      WebkitTransform: `translate3d(${abscissa}, 0, 0)`
    }
  };

  // const dates = getProgrammeDates(state);
  // const times = range(0, 24, 0.5);
  // const selectedDate = dates[selectedDateIndex];
  // const abscissa = `${-offset * HOUR_WIDTH}px`;
  // const transformStyle = {
  //   transform: `translate3d(${abscissa}, 0, 0)`,
  //   WebkitTransform: `translate3d(${abscissa}, 0, 0)`
  // };

  // const allProgrammes = getSelectedDatesProgrammes(state);

  // programmes = getSelectedDatesProgrammes({ selectedDate, programmes, channels });

  // return { programmes: allProgrammes, offset, times, transformStyle };
};

export default connect(
  mapStateToProps,
  { onNavigate: navigate }
)(Grid);
