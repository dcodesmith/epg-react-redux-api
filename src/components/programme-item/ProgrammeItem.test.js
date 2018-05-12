import React from 'react';
import { shallow } from 'enzyme';

import ProgrammeItem from './ProgrammeItem';

const onModalShowSpy = jest.fn();
const programme = {
  createdAt: '2018-01-01T13:30:55.446Z',
  day: 1,
  endTime: '12:00',
  frequency: '39',
  genre: 'strawberry',
  id: '5a4a380f64473a354df8f8cc',
  numberOfEpisodes: 0,
  season: 0,
  show: 'Boxing Hour',
  startTime: '09:01',
  synopsis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large …',
  type: 'green',
  updatedAt: '2018-01-01T13:30:55.446Z'
};

const DEFAULT_PROPS = {
  programme,
  onModalShow: onModalShowSpy
};

describe('Given a ProgrammeItem component', () => {
  describe('When rendered', () => {
    let component;

    beforeAll(() => {
      component = shallow(<ProgrammeItem { ...DEFAULT_PROPS } />);
    });

    it('should render the component', () => {
      expect(component.find('.schedule__item')).toHaveLength(1);
    });

    it('should display the show title', () => {
      expect(component.find('.schedule__item__title').text()).toEqual(programme.show);
    });

    it('should display the show time', () => {
      const { startTime, endTime } = programme;

      expect(component.find('.schedule__item__time').text()).toEqual(`${startTime} - ${endTime}`);
    });

    describe('and the component is clicked', () => {
      beforeAll(() => {
        component.find('.schedule__item').simulate('click');
      });

      it('should invoke onModalShow', () => {
        expect(onModalShowSpy).toHaveBeenCalled();
      });
    });
  });
});