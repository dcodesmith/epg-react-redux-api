import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import ProgrammeDetails from './ProgrammeDetails';

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const programme = {
  endTime: '12:00',
  genre: 'strawberry',
  show: 'Boxing Hour',
  startTime: '09:01',
  synopsis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large …',
  type: 'green',
  updatedAt: '2018-01-01T13:30:55.446Z'
};
const props = { data: programme };

describe('ProgrammeDetails', () => {
  describe('Given a ProgrammeDetails component', () => {
    describe('When rendered', () => {
      let component;

      beforeAll(() => {
        component = shallow(<ProgrammeDetails {...props} />);
      });

      it('should render the component', () => {
        expect(component.find('.programme-details')).to.have.lengthOf(1);
      });

      it('should display the show title', () => {
        expect(component.find('.programme-details__title').text().trim()).to.equal(programme.show);
      });

      it('should display the show time', () => {
        const { startTime, endTime } = programme;

        expect(component.find('.programme-details__time').text()).to.equal(`${startTime} - ${endTime}`);
      });

      it('should display the show genre', () => {
        expect(component.find('.programme-details__genre').text()).to.equal(`Genre: ${capitalizeFirstLetter(programme.genre)}`);
      });

      it('should display the show synopsis', () => {
        expect(component.find('.programme-details__body p').at(1).text()).to.equal(programme.synopsis);
      });
    });
  });
});
