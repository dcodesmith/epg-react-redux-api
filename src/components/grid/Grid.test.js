import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid';

import ToolbarContainer from '../../containers/ToolbarContainer';

const DEFAULT_PROPS = {
  programmes: {},
  offset: 0,
  onNavigate: () => {},
  times: [],
  transformStyle: {},
  onShowModal: () => {}
};

describe('Given a Grid component', () => {
  describe('When rendered', () => {
    let component;

    beforeAll(() => {
      component = shallow(<Grid { ...DEFAULT_PROPS } />);
    });

    it('should render a Header component with the correct props', () => {
      const headerComponent = component.find('Header');
      const { times, transformStyle } = headerComponent.props();

      expect(times).toEqual(DEFAULT_PROPS.times);
      expect(transformStyle).toEqual(DEFAULT_PROPS.transformStyle);
    });

    it('should render a Body component with the correct props', () => {
      const bodyComponent = component.find('Body');
      const { programmes, transformStyle, onModalShow } = bodyComponent.props();

      expect(programmes).toEqual(DEFAULT_PROPS.programmes);
      expect(transformStyle).toEqual(DEFAULT_PROPS.transformStyle);
      expect(onModalShow).toEqual(DEFAULT_PROPS.onShowModal);
    });

    it('should render a Controls component with the correct props', () => {
      const controlsComponent = component.find('Controls');
      const { onNavigate, times, offset } = controlsComponent.props();

      expect(onNavigate).toEqual(DEFAULT_PROPS.onNavigate);
      expect(times).toEqual(DEFAULT_PROPS.times);
      expect(offset).toEqual(DEFAULT_PROPS.offset);
    });

    it('should render a Toolbar Container component', () => {
      const toolbarContainerComponent = component.find(ToolbarContainer);

      expect(toolbarContainerComponent).toHaveLength(1);
    });
  });
});
