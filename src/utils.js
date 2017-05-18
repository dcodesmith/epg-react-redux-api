import md5 from 'md5';

export const md5ObjectHash = obj => md5(JSON.stringify(obj));

export const formatTrackTime = (timestamp) => {
  const pad = (number) => {
    if (number < 10) {
      return `0${number}`;
    }

    return number;
  };

  const time = pad(timestamp.toString());

  if (time.indexOf('.') > 0) {
    return time.replace('.5', ':30');
  }

  return `${time}:00`;
};