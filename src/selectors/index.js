import moment from 'moment';
import { createSelector } from 'reselect';
import { filter, uniq } from 'lodash';

const getProgrammes = state => state.programmes;

export const getProgrammeDates = createSelector([getProgrammes], programmes => {
  const programmeDates = [];
  const days = programmes.map(({ day }) => day);
  const numberOfDays = uniq(days);
  // const endDate = new Date(Math.max.apply(null, dates));
  // const startDate = new Date(Math.min.apply(null, dates));
  // const numberOfDays = moment(endDate).diff(moment(startDate), 'days') + 1;
  let value;
  let index;

  const DATE_FORMAT = 'YYYY-MM-DD';

  for (index = 0; index < numberOfDays.length; index += 1) {
    value = moment().add(index, 'days').format(DATE_FORMAT);
    programmeDates[index] = {
      day: index + 1,
      value
      // ISOString: new Date(value).toISOString()
    };
  }

  return programmeDates;
});

const getChannels = state => state.channels;
const getSelectedDate = (state) => {
  const dates = getProgrammeDates(state);

  return dates[state.selectedDateIndex];
};

export const getSelectedDatesProgrammes = createSelector(
  [getSelectedDate, getProgrammes, getChannels],
  (selectedDate, programmes, channels) => {
    const selectedDateProgrammes = {};
    let todaysProgrammes = [];

    if (!selectedDate || !programmes) {
      return {};
    }
    
    todaysProgrammes = filter(programmes, { day: selectedDate.day });

    /* eslint no-shadow: 0 */
    todaysProgrammes.forEach(({ channel }, index, programmes) => {
      selectedDateProgrammes[channel.code] = filter(programmes, { channel });
    });

    return selectedDateProgrammes;
  }
);