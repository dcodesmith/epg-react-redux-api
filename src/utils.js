import md5 from 'md5';

export const md5ObjectHash = obj => md5(JSON.stringify(obj));

export const pad = number => ((number < 10) ? `0${number}` : number);

export const formatTrackTime = (timestamp) => {
  const time = pad(timestamp.toString());

  if (time.indexOf('.') > 0) {
    return time.replace('.5', ':30');
  }

  return `${time}:00`;
};
