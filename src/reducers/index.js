import { combineReducers } from 'redux';
import modal from './modalReducer';
import selectedDateIndex from './dateSelectorReducer';
import offset from './navigationReducer';
import channels from './channelReducer';
import programmes from './programmeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// loops through all files in the same folder that contain "Reducer", then pass

export default combineReducers({
  offset,
  selectedDateIndex,
  modal,
  channels,
  programmes,
  ajaxCallsInProgress
});

// export default rootReducer;
