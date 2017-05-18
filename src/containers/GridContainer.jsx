import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { range } from 'lodash';

import { navigate } from '../actions/navigationActions';
import { showModal, hideModal } from '../actions/modalActions';

import { getSelectedDatesProgrammes } from '../selectors';

import { ITEM_WIDTH } from '../constants';

import Grid from '../components/Grid';

const mapStateToProps = (state) => {
  const { offset } = state;
  const abscissa = `${-offset * ITEM_WIDTH}px`;

  return {
    offset,
    times: range(0, 24, 0.5),
    programmes: getSelectedDatesProgrammes(state),
    transformStyle: {
      transform: `translate3d(${abscissa}, 0, 0)`,
      WebkitTransform: `translate3d(${abscissa}, 0, 0)`
    }
  };
};

export default connect(
  mapStateToProps,
  {
    onNavigate: navigate,
    onShowModal: showModal
  }
)(Grid);
