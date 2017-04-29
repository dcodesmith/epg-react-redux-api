import React from 'react';
import sinon from 'sinon';
import moment from 'moment';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DateNodeButton from './DateNodeButton';

const onSelect = sinon.spy();
const date = { day: 1, value: '2016-03-03', ISOString: '2016-03-03T00:00:00.000Z' };
const DEFAULT_PROPS = {
  index: 0,
  onSelect,
  date
};

const EXPECTED_DAY = moment(date.value).format("dddd");
const EXPECTED_DATE = moment(date.value).format("Do");

const render = (testProps) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<DateNodeButton {...props} />);
};

describe('DateNodeButton', () => {
  describe('Given a DateNodeButton', () => {
    describe('When the component is rendered', () => {
      let component;

      beforeEach(() => {
        component = render({});
      });

      it('should be a button with the appropriate props', () => {
        expect(component.type()).to.equal('button');
        expect(component.props().onClick).to.be.defined;
      });

      it('should display dates in the correct format', () => {
        expect(component.childAt(0).text()).to.equal(EXPECTED_DAY);
        expect(component.childAt(1).text()).to.equal(EXPECTED_DATE);
      });

      describe('And the button is clicked', () => {
        before(() => {
          component.simulate('click');
        });

        it('should invoke the `onSelect` function with index `-1`', () => {
          expect(onSelect).to.be.calledOnce
            .and.to.be.calledWithExactly(DEFAULT_PROPS.index);
        });
      });
    });
  });
});
