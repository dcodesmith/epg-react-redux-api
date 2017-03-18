import { combineReducers } from 'redux';
import channels from './channelReducer';
import programmes from './programmeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// loops through all files in the same folder that contain "Reducer", then pass

const rootReducer = combineReducers({
  channels,
  programmes,
  ajaxCallsInProgress
});

export default rootReducer;
