import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ProgrammeGuide from './ProgrammeGuide';

const childReactElement = React.createElement(
  'div',
  { className: 'a-child' },
  null
);

const DEFAULT_PROPS = {
  children: childReactElement
};

const render = (testProps = {}) => {
  const props = Object.assign({}, DEFAULT_PROPS, testProps);

  return shallow(<ProgrammeGuide {...props} />);
};

describe('ProgrammeGuide', () => {
  describe('Given a ProgrammeGuide component', () => {
    describe('When rendered', () => {
      let component;

      beforeEach(() => {
        component = render();
      });

      it('should render the component', () => {
        expect(component.find('.col-md-12').length).to.equal(1);
        expect(component.find('.grid').length).to.equal(1);
      });

      it('should render children', () => {
        expect(component.contains(childReactElement)).to.be.true;
      });
    });
  });
});
