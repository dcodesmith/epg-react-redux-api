import { connect } from 'react-redux';

import { deleteProgrammes } from '../actions/programmeActions';

import Toolbar from '../components/toolbar';

export default connect(
  null,
  { onDelete: deleteProgrammes }
)(Toolbar);
