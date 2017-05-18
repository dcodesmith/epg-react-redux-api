import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteProgrammes } from '../actions/programmeActions';

import CustomModal from '../components/CustomModal';

const mapStateToProps = (state, ownProps) => {
  const { isOpen, data } = state.modal;

  return { isOpen, data };
};

export default connect(mapStateToProps)(CustomModal);
