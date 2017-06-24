import { connect } from 'react-redux';

import { getProgrammeDates } from '../selectors';

import { move } from '../actions/dateSelectorActions';

import DateSelector from '../components/DateSelector';

const mapStateToProps = state => ({
  selectedDateIndex: state.selectedDateIndex,
  dates: getProgrammeDates(state)
});

export default connect(
  mapStateToProps,
  { onSelect: move }
)(DateSelector);
