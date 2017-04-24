import { combineReducers } from 'redux';
import modal from './modalReducer';
import channels from './channelReducer';
import programmes from './programmeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// loops through all files in the same folder that contain "Reducer", then pass

// console.log('modal', modal);

export default combineReducers({
  modal,
  channels,
  programmes,
  ajaxCallsInProgress
});

// export default rootReducer;
