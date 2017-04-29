import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DateSelector from './DateSelector';
import DateNodeButton from './DateNodeButton';

const MOCK_DATES = [
  { day: 1, value: '2016-03-03', ISOString: '2016-03-03T00:00:00.000Z' },
  { day: 2, value: '2016-03-04', ISOString: '2016-03-04T00:00:00.000Z' }
];

const spyOnSelect = sinon.spy();

const DEFAULT_PROPS = {
  dates: MOCK_DATES,
  selectedDateIndex: 0,
  onSelect: spyOnSelect
};

const render = (testProps) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<DateSelector {...props} />);
};

const testProps = {};
const ITEM_WIDTH = 150;
const computeExpectedTransitionStyle = (selectedDateIndex = 0) => ({
  transform: `translate3d(${ITEM_WIDTH * selectedDateIndex}px, 0, 0)`,
  WebkitTransform: `translate3d(${ITEM_WIDTH * selectedDateIndex}px, 0, 0)`
});

describe('DateSelector', () => {
  describe('Given a DateSelector', () => {
    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        component = render(testProps);
      });

      it('should render 2 DateNodeButton components', () => {
        const dateNodeButtonComponents = component.find(DateNodeButton);

        expect(dateNodeButtonComponents).to.be.length(MOCK_DATES.length);

        dateNodeButtonComponents.forEach((dateNodeButtonComponent, position) => {
          const { index, date, onSelect } = dateNodeButtonComponent.props();

          expect(index).to.equal(position);
          expect(date).to.equal(MOCK_DATES[position]);
          expect(onSelect).to.equal(spyOnSelect);
        });
      });

      it('should have the transition style of 0px', () => {
        const { style } = component.find('span').props();
        const EXPECTED_TRASITION_STYLE = computeExpectedTransitionStyle();

        expect(style).to.eql(EXPECTED_TRASITION_STYLE);
      });

      it('should have an active the first list item', () => {
        const listItem = component.find('ul').childAt(0);

        expect(listItem.hasClass('date-selector__list__item--active')).to.be.true;
      });

      it('should NOT have an active the second list item', () => {
        const listItem = component.find('ul').childAt(1);

        expect(listItem.hasClass('date-selector__list__item--active')).to.be.false;
      });

      describe('And the 2nd date is selected', () => {
        const selectedDateIndex = 1;

        before(() => {
          testProps.selectedDateIndex = selectedDateIndex;
        });

        it('should have the transition style of 150px', () => {
          const { style } = component.find('span').props();
          const EXPECTED_TRASITION_STYLE = computeExpectedTransitionStyle(selectedDateIndex);

          expect(style).to.eql(EXPECTED_TRASITION_STYLE);
        });

        it('should NOT have an active the first list item', () => {
          const listItem = component.find('ul').childAt(0);

          expect(listItem.hasClass('date-selector__list__item--active')).to.be.false;
        });

        it('should have an active the second list item', () => {
          const listItem = component.find('ul').childAt(1);

          expect(listItem.hasClass('date-selector__list__item--active')).to.be.true;
        });
      });
    });
  });
});
