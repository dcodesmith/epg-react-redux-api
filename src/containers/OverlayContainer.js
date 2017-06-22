import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../actions/modalActions';

import Overlay from '../components/Overlay';

const mapStateToProps = (state, ownProps) => {
  const { isOpen, data } = state.modal;

  return { isOpen, data };
};

export default connect(mapStateToProps, { onHideModal: hideModal })(Overlay);
