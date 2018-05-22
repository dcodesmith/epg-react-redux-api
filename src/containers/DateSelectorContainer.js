import { connect } from 'react-redux';

import { getProgrammeDates } from '../selectors';
import { move } from '../actions/dateSelectorActions';
import DateSelector from '../components/date-selector';

const mapStateToProps = state => ({
  selectedDateIndex: state.selectedDateIndex,
  dates: getProgrammeDates(state)
});

export default connect(
  mapStateToProps,
  { onSelect: move }
)(DateSelector);
