import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteProgrammes } from '../actions/programmeActions';

import Toolbar from '../components/Toolbar';

export default connect(
  null,
  { deleteProgrammes }
)(Toolbar);
