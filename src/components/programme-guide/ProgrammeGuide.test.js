import React from 'react';
import { shallow } from 'enzyme';

import ProgrammeGuide from './ProgrammeGuide';

describe('Given a ProgrammeGuide component', () => {
  describe('When rendered', () => {
    let component;

    beforeAll(() => {
      component = shallow(
        <ProgrammeGuide>
          <div className="a-child"></div>
        </ProgrammeGuide>      
      );
    });

    it('should render the component', () => {
      expect(component.find('.col-md-12')).toHaveLength(1);
      expect(component.find('.grid')).toHaveLength(1);
    });

    it('should render 1 child', () => {
      expect(component.children()).toHaveLength(1);
    });
  });
});