import moment from 'moment';
import { filter } from 'lodash';

const getProgrammeDates = (programmes) => {
  const programmeDates = [];
  const dates = programmes.map(programme => new Date(programme.date));
  const endDate = new Date(Math.max.apply(null, dates));
  const startDate = new Date(Math.min.apply(null, dates));
  const numberOfDays = moment(endDate).diff(moment(startDate), 'days') + 1;
  let value;
  let index;

  const DATE_FORMAT = 'YYYY-MM-DD';

  for (index = 0; index < numberOfDays; index += 1) {
    value = moment(startDate).add(index, 'days').format(DATE_FORMAT);
    programmeDates[index] = {
      day: index + 1,
      value,
      ISOString: new Date(value).toISOString()
    };
  }

  return programmeDates;
};

// TODO: Move into selector folder
const getSelectedDatesProgrammes = ({ selectedDate, programmes, channels }) => {
  const selectedDateProgrammes = {};
  let todaysProgrammes = [];

  if (!selectedDate || !programmes) {
    return {};
  }

  todaysProgrammes = filter(programmes, { date: selectedDate.ISOString });

  /* eslint no-shadow: 0 */

  todaysProgrammes.forEach((programme, index, programmes) => {
    selectedDateProgrammes[programme.channel.code] = filter(programmes, {
      channel: programme.channel
    });
  });

  return selectedDateProgrammes;
};

export { getProgrammeDates, getSelectedDatesProgrammes };
