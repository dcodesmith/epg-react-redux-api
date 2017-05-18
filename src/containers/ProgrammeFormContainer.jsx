import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../actions/modalActions';

import ProgrammeForm from '../components/ProgrammeForm';

const mapStateToProps = (state, ownProps) => {
  // const { data } = state.modal;
  console.log('ownProps', ownProps);
  return { data: state.modal.data };
};

export default connect(
  mapStateToProps,
  {
    onHideModal: hideModal
  }
)(ProgrammeForm);
