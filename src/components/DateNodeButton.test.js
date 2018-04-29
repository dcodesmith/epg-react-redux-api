import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import { ORDINAL_MONTH_DAY, DAY_NAME } from '../constants';
import DateNodeButton from './DateNodeButton';

const onSelectSpy = jest.fn();
const date = { day: 1, value: '2016-03-03', ISOString: '2016-03-03T00:00:00.000Z' };
const DEFAULT_PROPS = {
  index: 0,
  onSelect: onSelectSpy,
  date
};

const EXPECTED_DAY = moment(date.value).format(DAY_NAME);
const EXPECTED_DATE = moment(date.value).format(ORDINAL_MONTH_DAY);

describe('DateNodeButton', () => {
  describe('Given a DateNodeButton', () => {
    describe('When the component is rendered', () => {
      let component;

      beforeAll(() => {
        component = shallow(<DateNodeButton { ...DEFAULT_PROPS } />); //render();
      });

      it('should be a button with the appropriate props', () => {
        expect(component.type()).toEqual('button');
      });

      it('should display dates in the correct format', () => {
        expect(component.childAt(0).text()).toEqual(EXPECTED_DAY);
        expect(component.childAt(1).text()).toEqual(EXPECTED_DATE);
      });

      describe('And the button is clicked', () => {
        beforeAll(() => {
          component.simulate('click');
        });

        it('should invoke the `onSelect` function with index 0', () => {
          expect(DEFAULT_PROPS.onSelect).toHaveBeenCalledTimes(1);
          expect(DEFAULT_PROPS.onSelect).toHaveBeenCalledWith(DEFAULT_PROPS.index);
        });
      });
    });
  });
});
