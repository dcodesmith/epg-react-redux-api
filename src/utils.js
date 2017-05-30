import md5 from 'md5';
import moment from 'moment';

import { ONE_MILLISECOND, TRACK_WIDTH, TIME_FORMAT, ITEM_WIDTH } from './constants';

export const md5ObjectHash = obj => md5(JSON.stringify(obj));

export const pad = number => ((number < 10) ? `0${number}` : number);

export const formatTrackTime = (timestamp) => {
  const time = pad(timestamp.toString());

  if (time.indexOf('.') > 0) {
    return time.replace('.5', ':30');
  }

  return `${time}:00`;
};

export const setItemStyle = (programme) => {
  const startTime = moment(programme.startTime, TIME_FORMAT);
  const endTime = moment(programme.endTime, TIME_FORMAT);
  const duration = endTime.diff(startTime) / ONE_MILLISECOND;

  return { width: `${(duration * TRACK_WIDTH) / 30}px` };
};

export const computeTransitionStyle = (selectedDateIndex = 0) => ({
  transform: `translate3d(${ITEM_WIDTH * selectedDateIndex}px, 0, 0)`,
  WebkitTransform: `translate3d(${ITEM_WIDTH * selectedDateIndex}px, 0, 0)`
});
