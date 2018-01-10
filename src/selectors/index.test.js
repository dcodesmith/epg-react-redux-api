import { expect } from 'chai';
import moment from 'moment';
import { getProgrammeDates, getSelectedDatesProgrammes } from './index';

const DATE_FORMAT = 'YYYY-MM-DD';

const programmes = [
  { day: 1, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' } },
  { day: 1, show: 'Peaky Blinders', channel: { code: 'fv56lj0' } },
  { day: 2, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' } },
  { day: 2, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 3, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 3, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 4, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 4, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 5, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 5, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 6, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  },
  { day: 6, show: 'Homes Under The Hammer', channel: { code: 'fv56lj0' }  }
];
const channels = [
  { id: '5a3fc7d5aafa22987749ec20', name: 'BBC One', code: 'fv56lj0' },
  { id: '5a3fc7d5aafa22987749ec23', name: 'Channel 4', code: 'vf63ko9' },
  { id: '5a3fc7d5aafa22987749ec22', name: 'Sky One', code: 'kl05fx3' },
  { id: '5a3fc7d5aafa22987749ec26', name: 'Universal', code: 'pl92yt4' }
];
let state = { programmes, channels, selectedDateIndex: 0 };

describe('selectors', () => {
  describe('getProgrammeDates', () => {
    let programmeDates;

    beforeAll(() => {
      programmeDates = getProgrammeDates(state);
    });

    it('should return each unique programmes day & value pair', () => {
      programmeDates.forEach((programmeDate, index) => {
        expect(programmeDate).to.eql({
          day: index +  1,
          value: moment().add(index, 'days').format(DATE_FORMAT)
        });
      });
    });
  });

  describe('getSelectedDatesProgrammes', () => {
    let selectedDatesProgrammes;

    beforeEach(() => {
      selectedDatesProgrammes = getSelectedDatesProgrammes(state);
    });

    it('should return the shows for the selected day', () => {
      expect(selectedDatesProgrammes).to.eql({
        fv56lj0: [
          {
            day: 1,
            show: 'Homes Under The Hammer',
            channel: { code: 'fv56lj0' }
          }, {
            day: 1,
            show: 'Peaky Blinders',
            channel: { code: 'fv56lj0' }
          }
        ]
      });
    });

    describe('and no date is selected', () => {
      beforeAll(() => {
        state = { programmes, channels };
      });

      it('should return no programmes', () => {
        expect({}).to.eql(selectedDatesProgrammes);
      });
    });
  });
});
