import React from 'react';
import { shallow } from 'enzyme';

import DateSelector from './DateSelector';
// import DateNodeButton from './DateNodeButton';

import { computeTransitionStyle } from '../../utils';
import {
  ITEM_WIDTH,
  PREVIOUS_BUTTON_CLASS,
  PREVIOUS_BUTTON_TITLE,
  NEXT_BUTTON_CLASS,
  NEXT_BUTTON_TITLE
} from '../../constants';

const MOCK_DATES = [
  { day: 1, value: '2016-03-03', ISOString: '2016-03-03T00:00:00.000Z' },
  { day: 2, value: '2016-03-04', ISOString: '2016-03-04T00:00:00.000Z' }
];

const onSelectSpy = jest.fn();

const DEFAULT_PROPS = {
  dates: MOCK_DATES,
  selectedDateIndex: 0,
  onSelect: onSelectSpy
};

const testProps = {};

describe('Given a DateSelector component', () => {
  describe('When rendered', () => {
    let component;

    beforeEach(() => {
      const props = { ...DEFAULT_PROPS, ...testProps };

      component = shallow(<DateSelector { ...props } />);
    });

    it('should render 2 DateNodeButton components', () => {
      const dateNodeButtonComponents = component.find('DateNodeButton');

      expect(dateNodeButtonComponents).toHaveLength(MOCK_DATES.length);

      dateNodeButtonComponents.forEach((dateNodeButtonComponent, position) => {
        const { index, date, onSelect } = dateNodeButtonComponent.props();

        expect(index).toEqual(position);
        expect(date).toEqual(MOCK_DATES[position]);
        expect(onSelect).toEqual(onSelectSpy);
      });
    });

    it.skip('should have the transition style of 0px', () => {
      const { style } = component.find('span').props();
      const EXPECTED_TRASITION_STYLE = computeTransitionStyle();

      expect(style).toEqual(EXPECTED_TRASITION_STYLE);
    });

    it('should have an active the first list item', () => {
      const listItem = component.find('ul').childAt(0);

      expect(listItem.hasClass('date-selector__list__item--active')).toBeTruthy();
    });

    it('should NOT have an active the second list item', () => {
      const listItem = component.find('ul').childAt(1);

      expect(listItem.hasClass('date-selector__list__item--active')).toBeFalsy();
    });

    describe('And the 2nd date is selected', () => {
      const selectedDateIndex = 1;

      beforeAll(() => {
        testProps.selectedDateIndex = selectedDateIndex;
      });

      it.skip('should have the transition style of 150px', () => {
        const { style } = component.find('span').props();
        const EXPECTED_TRASITION_STYLE = computeTransitionStyle(selectedDateIndex);

        expect(style).toEqual(EXPECTED_TRASITION_STYLE);
      });

      it('should NOT have an active the first list item', () => {
        const listItem = component.find('ul').childAt(0);

        expect(listItem.hasClass('date-selector__list__item--active')).toBeFalsy()
      });

      it('should have an active the second list item', () => {
        const listItem = component.find('ul').childAt(1);

        expect(listItem.hasClass('date-selector__list__item--active')).toBeTruthy();
      });
    });
  });
});
