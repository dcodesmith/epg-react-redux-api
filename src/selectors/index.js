import moment from 'moment';
import { createSelector } from 'reselect';
import { filter, uniq } from 'lodash';

const DATE_FORMAT = 'YYYY-MM-DD';

const getProgrammes = state => state.programmes;
const getChannels = state => state.channels;

export const getProgrammeDates = createSelector(
  [getProgrammes], programmes => {
  const days = programmes.map(({ day }) => day);
  const numberOfDays = uniq(days);

  return numberOfDays.map((day, index) => ({
    day,
    value: moment().add(index, 'days').format(DATE_FORMAT)
  }));
});

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
